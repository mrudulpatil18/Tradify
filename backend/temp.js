
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mrudulsp18:566d50dd@cluster0.dkvr5me.mongodb.net/tradify?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
 
    await client.connect();
  
}
run().then(e=>Console.log("connected")).catch(console.dir);
