import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full  c bg-pink-200 md:h-[80px] h-[50px] rounded-md shadow-md">

        <div className="flex justify-between px-4 mx-auto max-w-7xl">

            <div className="cursor-pointer mt-4">
                <a>
                <h2 className="md:text-2xl font-semibold">Book Vibe</h2>
                </a>
                

            </div>
            <div className="list-none md:flex gap-4 invisible md:visible cursor-pointer mt-4">

                <lil>
                    <Link to='/home'>Home</Link>
                </lil>

                <li>Listed Books</li>
                <li>Pages to Read</li>

            </div>
            <div className="mt-2">
                <button className="md:px-6 md:py-2  bg-green-400 rounded-md shadow-md p-1">Sign In</button>
                <button className="md:px-6 bg-blue-400 rounded-md md:py-2 ml-4 shadow-md p-1">Sign Up</button>
            </div>

        </div>
    </div>
  );
}

export default Navbar;
