import React, { useState } from "react";
import Nux from "../assets/3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Blogs = () => {
  const infoBlogs = [
    {
      id: 1,
      title: "Building My Own Website (Blog App)",
      author: "Nux Gajurel",
      image: Nux,
      link: "/blogone",
    },
  ];
  const [search, setSearch] = useState("");
  const filteredBlogs = infoBlogs.filter(
    (infoBlog) =>
      infoBlog.title.toLowerCase().includes(search.toLowerCase()) ||
      infoBlog.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
     <navbar />
      <div>
        <input
          type="text"
          value={search}
          placeholder="Search Blogs....."
          onChange={(e) => setSearch(e.target.value)}
          className="mt-33 border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none m-4 focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 mt-4 lg:grid-cols-3 lg:gap-10 py-10 m-4 justify-items-center">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((infoBlog) => (
            <Link
              key={infoBlog.id}
              to={infoBlog.link}
              className="overflow-hidden rounded shadow-lg max-w-sm"
            >
              <img src={infoBlog.image} alt="Blog 1" className="w-full" />
              <div>
                <h2 className="text-2xl m-3 text-black">{infoBlog.title} </h2>
                <p className="m-3 text-black">-{infoBlog.author}</p>{" "}
                <i className="flex justify-end m-3 text-2xl text-black">
                  {" "}
                  <FaArrowRightLong />
                </i>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No Bolgs Found
          </p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
