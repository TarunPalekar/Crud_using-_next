"use client";

import { serverUrl } from '@/serverUrl';
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';


export default function create() {
  const [title, setTitle]=useState("");
  const [discription, setDiscription]=useState("");
  const router = useRouter();
  const handleSubmit= async ()=>{
   
    if(!title||!discription){
      alert("Title and Description are required");
      return;

    }
    try {
      const res= await fetch("http://localhost:3000/api/topic/",{
        method:"POST",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify({title, discription}),
      })
      
     
    
      
    } catch (error) {
      console.log( error);
      
    }

  }
  return (
    <>
    <div className='border border-black h-[12rem] rounded-xl my-5 w-[34rem] px-4  '>
    <form onSubmit={handleSubmit}  className='flex flex-col '>
        
        <input onChange={(e)=>setTitle(e.target.value)} value={title} className='border border-black rounded-l px-1 h-8 shadow-xl max-w-[15rem] my-3.5' type="text" placeholder='Topic Title'></input>
        <input onChange={(e)=>setDiscription(e.target.value)} value={discription} className='border border-black rounded-l px-1 h-8 shadow-xl max-w-[20rem]' type="text" placeholder='Topic Discription'></input>
       
        <div className='flex justify-center'>
    <button  type ="submit"className='my-10 flex border justify-center rounded-xl shadow-xl px-3 font-bold '>Add Topic</button></div>
    </form>
    
    </div>
    </>
  )
}
