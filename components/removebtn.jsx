"use client";
import React, { useEffect } from 'react'
import { HiTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation';

export default function Removebtn({id}) {
  const router=useRouter();
 const removeTopic= async()=>{


  const conformed=confirm("Are you want to delete");
  if(conformed){
     const res=await fetch(`http://localhost:3000/api/topic?id=${id}`, 
               { method:"DELETE"})
               router.refresh();
            
               
           
                     

  }
  


 }
  return (
    <div className='color-red'>
        <HiTrash onClick={removeTopic} size={26}/>
    </div>
  )
}
