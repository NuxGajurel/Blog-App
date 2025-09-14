import React from 'react'
import Nux from "../assets/Nuxgajurel.jpg"
import One from "../assets/1.JPG"
import Two from "../assets/2.JPG"
const Gallery = () => {
    const items =[
        {
            id:1 , url:Nux
        },
        {
            id:2 ,url:One
        },
        {
            id:3,url:Two
        },
    ]
  return (
    <div>
        <div>
{
    items.map((item)=>(
        <div key={item.id} className="overflow-hidden rounded-2xl shadow-md">
          <img src={item.url} alt={`Gallery item ${item.id}`} className="w-200 h-200 object-cover flex justify-between" />
        </div>
    ))
}

        </div>
    </div>
  )
}

export default Gallery