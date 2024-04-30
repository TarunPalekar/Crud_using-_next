
import React from 'react'
import Link from 'next/link';
import { HiPencilAlt } from "react-icons/hi";
import Removebtn from './removebtn';
import { serverUrl } from '@/serverUrl';
const getTopics = async () => {
  try {
    const res= await fetch(`${serverUrl}`,{
    cache:"no-store",
    })
    
    if(!res.ok){
      throw new Error("failed to load  topics");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    
  }

}


export default async function Topiclist() {
  const {topics}= await getTopics();
  return (
    <>
    {topics.map((t)=>(
      <div className="flex justify-between border  rounded-xl shadow-xl border-slate-300 p-4 my-3 gap  w-[40rem] " >
        <div  className='overflow-hidden'>
          <h3 className='text-2xl font-bold'>{t.title}</h3>
          <div className='leading-relaxed'>{t.discription}</div>
        </div>
        <div className=' flex items-start gap-5'>
          <Removebtn id={t._id} />
          <div>
           
            <Link href={`/editTopic/${t._id}` }>
              <HiPencilAlt size={26} />
            </Link>
          </div>
        </div>
      </div>
      ))}
    </>
  )
}
