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
    },
    getDetailsStaff:(proId)=>{
        return new Promise((resolve,reject)=>{
             db.get().collection(collection.ADD_STAFF).findOne({_id:objectId(proId)}).then((response)=>{
                //  console.log(response)
                resolve(response)
            })
        })
    },
    updateStaff:(proId,staffDetails)=>{
        return new Promise((reslove,reject)=>{
            db.get().collection(collection.ADD_STAFF).updateOne({_id:objectId(proId)},{
                $set:{
                    Name:staffDetails.Name,
                    Email:staffDetails.Email,
                    Position:staffDetails.Position,
                    Phone:staffDetails.Phone
                }
            }).then((result)=>{
                reslove(result)
            })
        })

    }
}