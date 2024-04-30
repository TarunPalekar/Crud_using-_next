import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req){
    const{ title, discription} = await req.json();
await connectMongoDb();
await Topic.create({title, discription});
return NextResponse.json({message:"topic created", 
status:201,})

}
export async function GET(){
    await connectMongoDb();
    const topics=await Topic.find();
    
    return NextResponse.json({topics});
}
export async function DELETE(req){
    const id=req.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:"deleted"})
    
}