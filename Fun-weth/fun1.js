const request = require('request')

const geocode =(address,callback)=>{
     const geo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2hhZGRhZHgiLCJhIjoiY2tiYzZsNzBnMDduMjJwcnFnZHYzamJkMiJ9.SC0RUmQ5TEhVTFprrFoiKg&limit=1'
request({url:geo , json:true},(err,res)=>{
    if(err){
        return callback('Unable to connect', undefined)
    }else if(res.body.err){
        return callback('Can not fetch data', undefined)
    }else{
        callback(undefined,{
            longitude:res.body.features[0].center[1] ,
            latitude:res.body.features[0].center[0]
        })
    }
})
}
module.exports= geocode