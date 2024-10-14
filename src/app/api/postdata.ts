import dbConnect from "@/lib/dbConnect";
import UserModel from '../../model/User';

export async function POST(data:any){
await dbConnect();
try{
const userRecord = await UserModel.create(data);
console.log(userRecord);
return {statusCode: 201, body: JSON.stringify(userRecord)};
} catch(error){
    return{
        statusCode: 500,
        body: JSON.stringify({error: "Error Creating User"})
    }
  
}
}