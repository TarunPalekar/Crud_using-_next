"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';




export default function EditTopic({id, title, discription}) {
  const [newTitle, setNewTitle]=useState(title);
  const router=useRouter()
  const [newDiscription, setNewDiscription]=useState(discription);
  
 const handleSubmit=async()=>{
  try {
    const res= await fetch(`http://localhost:3000/api/topic/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({newTitle,newDiscription}),
    })
   
    if(res.ok){
      router.push("/");
     

    }
   

    
  }
   catch (error) {
    console.log(error)
    
  }

 }
 
  

  
  return (
  
    
    <>
    
    <div className='border border-black h-[12rem] rounded-xl my-5 w-[34rem] px-4  '>
    <form onSubmit={handleSubmit} className='flex flex-col '>
        
        <input className='border border-black rounded-l px-1 h-8 shadow-xl max-w-[15rem] my-3.5' type="text"    onChange={(e)=>setNewTitle(e.target.value)} value={newTitle} ></input>
        <input className='border border-black rounded-l px-1 h-8 shadow-xl max-w-[20rem]' type="text"  onChange={(e)=>setNewDiscription(e.target.value)} value={newDiscription} ></input>
        <div className='flex justify-center'>
    <button  type="submit" className='my-10 flex border justify-center rounded-xl shadow-xl px-3 font-bold '>Update Topic</button></div>
    </form>
    
    </div>
    
    </>
  )
}
