const {MongoClient}=require('mongodb')
const url="mongodb://localhost:27017"
const conn=new MongoClient(url)

const dbconnect=async ()=>{
    let result=await conn.connect();
    let db=result.db("e-comm")
    return db.collection("products")
}

module.exports=dbconnect;