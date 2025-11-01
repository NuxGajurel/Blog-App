import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";

const BlogOne = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [fav, setFav] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-800">
      <header className="py-16 px-6 sm:px-10 lg:px-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-orange-500 mb-4">
          Building My Own Website
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          A personal journey of learning, building, and growing as a developer.
        </p>
      </header>

      <main className="px-6 sm:px-10 lg:px-32 py-10 space-y-12">
        <section className="space-y-6">
          <p className="text-lg sm:text-xl leading-relaxed">
            When I first started learning web development, I had no idea where
            to begin. I just knew I wanted to build something real — something
            that I could see, click, and share with others. That’s why I decided
            to make this blog website.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-orange-500 mb-3">
            Why I Built This Blog
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            This website is more than just a project — it’s my practice ground.
            Every time I learn something new about React, Tailwind CSS, or
            GitHub, I apply it here. This way, I’m not just watching tutorials —
            I’m building something real.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-orange-500 mb-3">
            What I Used to Build It
          </h2>
          <ul className="list-disc list-inside text-lg sm:text-xl space-y-2 ml-3">
            <li>React – for building fast and reusable components</li>
            <li>Tailwind CSS – for styling quickly and responsively</li>
            <li>GitHub – for saving my code and tracking my progress</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-orange-500 mb-3">
            My Plan for the Future
          </h2>
          <ul className="list-disc list-inside text-lg sm:text-xl space-y-2 ml-3">
            <li>A better home page design</li>
            <li>More blogs about what I’m learning</li>
            <li>A working contact page</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-orange-500 mb-3">
            What I Learned
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            Building this blog taught me that the best way to learn is by doing.
            Even if my code isn’t perfect right now, every small improvement
            helps me grow.
          </p>
        </section>

        <div className="border-t border-gray-300 pt-8 flex justify-center items-center gap-10 text-2xl">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 hover:scale-110 transition-transform"
          >
            <span className={`${liked ? "text-red-500" : "text-gray-500"}`}>
              {liked ? "❤️" : <LuHeart />}
            </span>
            <span className="text-lg">{likeCount}</span>
          </button>

          <button
            onClick={() => setFav(!fav)}
            className="hover:scale-110 transition-transform"
          >
            <FaBookmark
              className={`${fav ? "text-yellow-400" : "text-gray-400"}`}
            />
          </button>
        </div>
      </main>

      <footer className="mt-20 pb-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} — Built with 💻 React & Tailwind CSS by Nux
        Gajurel
      </footer>
    </div>
  );
};

export default BlogOne;
