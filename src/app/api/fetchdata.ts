
import { NextResponse } from "next/server";
import UserModel from '../../model/User';
import dbConnect from '../../lib/dbConnect'

export async function GET(request: Request, { params }: { params: { phoneNumber: string } }) {
  const { phoneNumber } = params;
  await dbConnect();
  try {
    const user = await UserModel.findOne({ phoneNumber });
    return user ? NextResponse.json({ user, statusCode: 200 }) : NextResponse.json({ message: "User not found", statusCode: 404 });
  } catch (error) {
    return NextResponse.json({ error: "Error Fetching User Data", statusCode: 500 });
  }
}
