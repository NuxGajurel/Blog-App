import React,{useState} from 'react'
import { FaBookmark } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
const BlogOne = () => {
    const[like ,setLike]=useState(0);
    const[countLike , setCountLike]=useState(false);
    const[fav , setFav]=useState(false);
  const handleLove=()=>{
    if(like){
      setLike(false);
      setCountLike((prev)=> prev - 1)
    }else{
      setLike(true);
      setCountLike((prev)=> prev + 1)
    }
  }
  return (
    <div>
      <div className='max-w-100 lg:max-w-800'>
        <h1 className='lg:text-4xl text-orange-500 m-3 flex justify-center mt-20'>Building My Own Website</h1>

        <div className='max-w-700'>
 <p className='mt-3 m-3 p-4 text-2xl flex justify-center'>
          When I first started learning web development, I had no idea where to begin. I just knew I wanted to
           build something real — something that I could see, click, and share with others. 
           That’s why I decided to make this blog website.
        </p>

       <h3 className='text-3xl m-7'>Why I Built This Blog</h3>
<p className='mt-3 m-3 p-4 text-2xl flex justify-center'>
  This website is more than just a project — it’s my practice ground. Every time I learn something new about React,
   Tailwind CSS, or GitHub, I try to apply it here.
   This way, I am not just watching tutorials, I am actually building something with my own hands.
</p>
     <h3 className='text-3xl m-7'>
           What I Used to Build It
     </h3>
     <p className='mt-3 m-3 p-4 text-2xl'>
  - For now, this website is made with:
     </p>
     <ul>
      <li className='mt-3 m-5'>1. React – for building fast and reusable components</li>
      <li className='mt-3 m-5'>2. Tailwind CSS – for styling everything quickly</li>
      <li className='mt-3 m-5'>3. GitHub – for saving my code and tracking my progress</li>
      </ul>
     <h3 className='text-3xl m-7'>My Plan for the Future</h3>
          <p className='mt-3 m-3 p-4 text-2xl'>
            - I will keep updating this website. I want to add:
          </p>



     <ul>
      <li className='mt-3 m-5'>1. A better home page design</li>
      <li className='mt-3 m-5'>2. More blogs about what I am learning</li>
      <li className='mt-3 m-5'>3. A working contact page</li>
  

 
     </ul>
       <h3 className='text-3xl m-7'>What I Learned</h3>
           <p className='mt-1 m-3 text-2xl'>Building this blog taught me that the best way to learn is by doing.
             Even if my code is not perfect right now, every small change helps me get better.</p>


        </div>
            <hr className='w-full'/>
<div className='p-7 flex justify-center shadow-md space-x-4'>
         
 <button onClick={handleLove}> {like ?"❤️":<LuHeart />}{countLike}</button>
 <button onClick={()=> setFav(!fav)} className='bg-white'>{fav?<FaBookmark className='text-yellow-400'/>:<FaBookmark className='text-white'/>}</button>
      
</div>
    
      </div>
   
    </div>
  )
}

export default BlogOne