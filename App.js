const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const geocode = require('./Fun-weth/fun1')
const forecast = require('./Fun-weth/fun')
const publicdir = path.join(__dirname,'../server/files')
const partial = path.join(__dirname,'../server/partial')
    


app.set('view engine' , 'hbs')
app.set('views' ,publicdir)
app.use(express.static(publicdir))
hbs.registerPartials(partial)  
    
app.get('/Home', (req,res)=>{
    res.render('home.hbs',{
        title:'Weather',
        name:'Shaddad alharthi '
    })
})
app.get('/about', (req,res)=>{
    res.render('about.hbs',{
        title:'about' ,
        name:'Shaddad alharthi'
    })
})

app.get('/help',(req,res)=>{
    res.render('help.hbs',{
        title:'Help' ,
        name:'Shaddad alharthi'
    })
})


app.get('/weather', (req,res)=>{
if(!req.query.address){
    return res.send('Error')
}else{
    geocode(req.query.address,(err,{latitude,longitude,location})=>{
        if(err){
            return res.send({
                Error:'Set an address please'
            })
        }else{
            forecast(latitude,longitude,(err,fordata)=>{
                if(err){
                    return res.send(err)
                }else{
                     
                   res.send({
                       forecast: fordata ,
                       location,
                       address : req.query.address
                   })
                }
            })
        }
    })
}
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });