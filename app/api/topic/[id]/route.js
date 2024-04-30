import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
    const {id}=params;
    const {newTitle:title, newDiscription:discription}= await req.json();
    await connectMongoDb();
    await Topic.findByIdAndUpdate(id, {title, discription});
    return NextResponse.json({message:"data updated"})
}
export async function GET(req, {params}){
    const {id}=params;
    await connectMongoDb();
     const topics=await Topic.findOne({_id: id});
    return NextResponse.json({topics})
}