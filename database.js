const {MongoClient}=require("mongodb")
const url  = "mongodb+srv://sonugupta:sonugupta07@namastenode.lvzwyq2.mongodb.net/"
const client = new MongoClient(url);

const dbName = 'HelloWorld'
async function main(){
    await client.connect();
    console.log("connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    const data = {
        firstname:"himanshu",
        lastname:"gupta",
        city:"patna",
        phoneNumber:"9102156460"
    };
    ///create
    const insertResult = await collection.insertOne(data);
    console.log("Inserted documents =>", insertResult);
    console.log(typeof insertResult)

    //read 
    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);
    const countResult = await collection.countDocuments({});
    console.log("count of documents in the User collection ",countResult)
    //find all documents with a filter of firstname :Deepika 
    const result = await collection.find({ firstname: "sonu" }).toArray();
console.log("result =>", result);
console.log(typeof result)

     
    return "sonu gupta";
}
main().then((value)=>{
    console.log(value)
    
})
.catch((err)=>{
   console.log(err)
})
.finally(()=>{
    client.close();
    console.log('connection closed')
})
// crud operation in mongodb is an homework