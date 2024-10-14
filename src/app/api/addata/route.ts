import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(req: Request) {
  await dbConnect(); // Ensure the database connection is established
  
  try {
    const data = await req.json(); // Parse the JSON body of the request

    // Create a new user record in the database
    const userRecord = await UserModel.create(data);
    console.log("New User Created:", userRecord);

    // Return success response with the created user
    return NextResponse.json({ user: userRecord, statusCode: 201 });
  } catch (error) {
    console.error("Error Creating User:", error);

    // Return error response if something goes wrong
    return NextResponse.json({ error: "Error Creating User", statusCode: 500 });
  }
}
