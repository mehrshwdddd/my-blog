import { NextResponse } from 'next/server';


const users : {email:string; password:string}[] = [];

export async function POST(req:Request) {

    const {email,password} =await req.json();

    const existingUser =users.find((u) => u.email ===email);
    if (existingUser) {
        return NextResponse.json({error:"user already exists"}, {status:400});
    }
    
    users.push({email,password});
    return NextResponse.json({message:"signup succesful"});
}
