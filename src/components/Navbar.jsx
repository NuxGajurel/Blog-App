import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const[open ,setOpen]=useState(false);
    const[dark ,serDark]=useState(false);
     useEffect(() => {
    if (dark) {
      document.body.classList.add("bg-black", "text-white");
    } else {
      document.body.classList.remove("bg-black", "text-white");
    }
  }, [dark]);
  return (
     <div
          className={`h-16 flex justify-between items-center px-6 ${
            dark ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
    <nav className="fixed top-0 w-full bg-white shadow">
      <div className="h-16 flex justify-between items-center px-6">
   
        <div className="text-xl font-bold px-1">
          <Link to="/"> BlogOfNux</Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex space-x-4">
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
            <Link to="/blogone"></Link>
          </div>
        <div>
          <button onClick={()=> serDark(!dark)}> 🌙 </button>
        </div>
          
           
        </div>
       
           <div className="m-0 bg-white ">
         <i onClick={()=> setOpen(!open) } className="block sm:hidden m-1 bg-white" size={30}>
{open ? <RxCross2/> : <CiMenuBurger/>}
          </i>
       </div>
  
      </div>
    
 
 {/* Mobile Screen hai ta ya bata  */}
    <div className={`${open?"block":"hidden"} sm:hidden bg-white space-y-6 pb-5 flex flex-col px-0.5`}>
        
     <Link to="/" className="block break-words w-40 text-black">Home</Link>
     <Link to="/blogs">Blogs</Link>
      <Link to="/about">About</Link>
      <Link to="/blogone"></Link>
      <button style={{
        backgroundColor:"orange",
        color:"white",
      }}>Message me</button>
</div>


    </nav>


 

   </div>
  );
};

export default Navbar;
