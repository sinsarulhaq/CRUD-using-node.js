var db = require('../config/connection')
var collection = require('../config/collection')
var objectId = require('mongodb').ObjectId
module.exports={
    addStaff:(staff)=>{
        return new Promise((resolve,reject)=>{
             db.get().collection(collection.ADD_STAFF).insertOne(staff).then((data)=>{
                // console.log(data)
                resolve(staff)
            })
            
        })
    },
    getStaff:()=>{
        return new Promise(async(resolve,reject)=>{
            let staffs =await db.get().collection(collection.ADD_STAFF).find().toArray()
            resolve(staffs)
        })
    },
    deleteStaff:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.ADD_STAFF).deleteOne({_id:objectId(proId)}).then((response)=>{
                resolve(response)
            })
        })
    }
}