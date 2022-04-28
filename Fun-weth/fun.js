const request = require('request')

const fun=(latitude,longitude,Callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=d956140ebc5c7470c65bb24d6e1cccc5&query='+ encodeURIComponent(longitude)+',' + encodeURIComponent(latitude)
request({url:url , json:true},(err,res)=>{
if(err){
   return Callback('Unable to connect ' , undefined)
}else if(res.body.err){
    return Callback('Can not fetch data',undefined)
}else{
    Callback(undefined,{
        name:res.body.location.name,
        country:res.body.location.country,
        temp:res.body.current.temperature
    })
}
})
}
module.exports=fun

