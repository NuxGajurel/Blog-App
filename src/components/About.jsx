import React, { useState } from 'react'

const About = () => {
  const abouts = [
    {
      id: 1,
      question: "Who am I?",
      answer: "I’m Nux, the person behind this blog. I love coding, learning new tech stuff, and sharing what I discover with others.",
    },
    {
      id: 2,
      question: "What is this blog about?",
      answer: "This is my personal space where I post about coding, projects, tips, and things I find interesting. Think of it as my public learning journal.",
    },
    {
      id: 3,
      question: "Why did I start this blog?",
      answer: "I started this blog to keep track of my journey and help others who might be learning the same things. Writing makes me learn better — and if it helps you too, that’s a win!",
    },
    {
      id: 4,
      question: "Who can read my posts?",
      answer: "Anyone who’s curious about tech, coding, or just wants to see what I’m up to. Beginners are totally welcome here.",
    },
    {
      id: 5,
      question: "Can you suggest a topic?",
      answer: "Yes! I’d actually love that. If you have a topic or a question you’d like me to write about, just contact me and I’ll try to cover it.",
    },
    {
      id: 6,
      question: "Do I collaborate?",
      answer: "Yes, I’m open to collaborations and fun projects. If you want to work on something together, let’s connect!",
    },
    {
      id:7,
      question:"Will I keep updating this website?",
      answer:"Yes! I will keep pushing updates on GitHub and improving this website as I learn more."
    }
  ];

  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-500 text-center mb-10 mt-13">Why I Make This Website ?</h1>

      {abouts.map((about) => (
        <div
          key={about.id}
          className="mb-4 border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
        >
     
          <button
            onClick={() => toggle(about.id)}
            className="w-full text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 font-semibold text-lg flex justify-between items-center"
          >
            {about.question}
            <span className="text-gray-500">
              {openId === about.id ? "−" : "+"}
            </span>
          </button>

        
          {openId === about.id && (
            <div className="px-5 py-4 bg-white text-gray-700 transition-all duration-300">
              {about.answer}
            </div>
          )}
        </div>
      ))}


<div className=' bg-white shadow p-15 space-x-8 space-y-3 mx-auto'>
  <button style={{
    backgroundColor:"orange",
    color:"white",
    alignItems:"center",
  }}>Connect With Me</button>
  
</div>
</div>
  );
};

export default About;
