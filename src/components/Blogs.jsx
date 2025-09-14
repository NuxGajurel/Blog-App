import React from 'react'
import Nux from "../assets/3.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Blogs = () => {

  return (
    <div>
      {/* Top Contents */}

      {/* Grid */}
      <div className="grid grid-cols-1 gap-3 mt-4 lg:grid-cols-3 lg:gap-10 py-10 m-4 justify-items-center">

        
        {/* 1st Blog */}
        <Link to="/blogone" className="overflow-hidden rounded shadow-lg max-w-sm">
          <img src={Nux} alt="Blog 1" className="w-full"/>
          <div>
          <h2 className='text-2xl m-3 text-black'>Building My Own Website  </h2>
          <p className='m-3 text-black'>-Nawaraj Gajurel</p> <i className='flex justify-end m-3 text-2xl text-black'> <FaArrowRightLong/></i>
          </div>
        </Link>



      </div>
 
    </div>
  )
}

export default Blogs
