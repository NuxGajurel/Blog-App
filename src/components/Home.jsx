import React from "react";
import Three from "../assets/3.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="flex justify-between space-x-70 hidden sm:flex">
        <div className="mt-12 m-7">
          <h1 className="mt-15 m-4 text-2xl">Welcome!</h1>

          <h3>Here I write about tech, code, and my journey as a developer.</h3>
          <p>Check out my blogs and feel free to connect!</p>
          <Link to="/blogs">
            <button
              className="space-x-1 m-7"
              style={{
                backgroundColor: "orange",
                color: "white",
              }}
            >
              Start Reading
            </button>
          </Link>
          <a href="https://github.com/NuxGajurel">
            <button>GitHub</button>
          </a>
        </div>
        <div></div>
        <img src={Three} alt="" className="w-130 h-130 hidden sm:flex" />
      </div>

      <div className="block sm:hidden">
        <div>
          <img src={Three} alt="" className="w-100 h-100 mt-0" />
        </div>

        <div>
          <Link to="/blogs">
            <button
              className="space-x-1 m-6"
              style={{
                backgroundColor: "orange",
                color: "white",
              }}
            >
              Start Reading
            </button>
          </Link>
          <a href="https://github.com/NuxGajurel">
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
