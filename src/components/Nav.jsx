import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="h-[10vh] w-full flex items-center justify-between ">
            <img
                className="h-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
                alt=""
            />
            <div className="flex gap-x-10 text-md items-center">
                <Link className="hover:text-green-600 duration-200" to="/">
                    Home
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/recipes"
                >
                    Recipes
                </Link>
                <Link className="hover:text-green-600 duration-200" to="/about">
                    About
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
            <i className="text-3xl ri-grid-fill text-green-600"></i>
        </nav>
    );
};

export default Nav;
