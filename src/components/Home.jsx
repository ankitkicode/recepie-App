import React from "react";

const Home = () => {
    return (
        <div className="w-full flex justify-between items-center  h-[60vh]">
            <div className="left w-1/2 ">
                <h1 className="text-7xl font-extrabold text-green-600">
                    SIMPLE AND TASTY RECIPES
                </h1>
                <p className="text-zinc-400 mt-5 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi eos maiores harum doloribus, praesentium alias qui
                    esse id atque sapiente similique quis, velit fugit, nemo
                    unde consectetur voluptatem sequi repellat.
                </p>
                <button className="bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Get Started &nbsp; &#8594;
                </button>
            </div>
            <img
                className="w-1/2"
                src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
                alt=""
            />
        </div>
    );
};

export default Home;
