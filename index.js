const dbconnect=require('./mongodb')

const read=async ()=>{
    let data =await dbconnect()
    data=await data.find({}).toArray()
    console.log(data)
}

read()