var db = require('../config/connection')
var collection = require('../config/collection')

module.exports={
    addStaff:(staff)=>{
        return new Promise((resolve,reject)=>{
             db.get().collection(collection.ADD_STAFF).insertOne(staff).then((data)=>{
                // console.log(data)
                resolve(staff)
            })
            
        })
    }
}