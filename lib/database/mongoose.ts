import mongoose,{Mongoose} from 'mongoose'

const MONGODB_URl = process.env.MONGODB_URL;
console.log(MONGODB_URl);


interface MongooseConnection {
    conn:Mongoose | null;
    promise:Promise<Mongoose> | null;
}

let cached:MongooseConnection = (global as any).mongoose
 
if(!cached){
    cached = (global as any).mongoose = {
        conn:null,promise:null
    }
}


export const connectToDatabase = async ()=>{
    if(cached.conn) return cached.conn;
    if(!MONGODB_URl) throw new Error("Missing MongoDburl ")

    cached.promise = 
    cached.promise || 
    mongoose.connect(MONGODB_URl,{
        dbName:"sora",bufferCommands:false})

    cached.conn = await cached.promise;

    return cached.conn;
}