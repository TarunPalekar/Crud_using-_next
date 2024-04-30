import React from 'react'
import EditTopic from '@/components/editTopics'
const getTopicById=async(id)=>{
  try {
  
    const res=await fetch(`http://localhost:3000/api/topic/${id}`,{
      method:'GET',
      cache:"no-store",
    })
    if(!res.ok){
      throw new Error("failed to load data");
    }
   
    return res.json();

    
  } catch (error) {
    console.log(error)
    
  }
 



}

export default async function EditPage({params}) {

  const {id}=params;
  
  const {topics}=await getTopicById(id);
 const {title, discription}=topics
  
  
  return (
    <div>
        <EditTopic id={id} title={title} discription={discription} />
    </div>
  )
}
