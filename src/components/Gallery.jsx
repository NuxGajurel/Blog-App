import React from 'react'
import Nux from "../assets/Nuxgajurel.jpg"
import One from "../assets/1.JPG"
import Two from "../assets/2.JPG"
const Gallery = () => {
    const items =[
        {
            id:1 , url:Nux , title :""
        },
        {
            id:2 ,url:One , title :""
        },
        {
            id:3,url:Two , title :""
        },
    ]
  return (
    <div>
        <div>
            <div>
           <h2 className='text-2xl mt-4 m-2'> Photo</h2>
          </div>
      {
        items.map((item)=>(

            <div className='flex justify-between space-x-5'> 
                <div className='' key={item.id}>
                    <img src={item.url} alt="" />
                </div>
          
            </div>
        ))
      }

        </div>
    </div>
  )
}

export default Gallery