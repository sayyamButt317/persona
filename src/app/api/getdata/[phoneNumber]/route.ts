
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';

export async function GET(req: Request, { params }: { params: { phoneNumber: string } }) {
  const { phoneNumber } = params;
  await dbConnect();
  try {
    const user = await UserModel.findOne({ phoneNumber });
    return user
      ? NextResponse.json({ user, statusCode: 200 })
      : NextResponse.json({ message: "User not found", statusCode: 404 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Error Fetching User Data", statusCode: 500 });
  }
}
