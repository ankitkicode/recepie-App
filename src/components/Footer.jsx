import React from "react";

const Footer = () => {
    return (
        <div className="w-[80%] m-auto  p-10">
            <h2 className="text-green-600 text-center">Features</h2>
            <h1 className="text-2xl font-bold text-center">
                OUR AWESOME SERVICES
            </h1>

            <div className="features flex flex-wrap justify-between mt-[5%]">
                <div className="w-[40%] flex items-center">
                    <i className="text-[10vh] ri-restaurant-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Quality Food</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>

                <div className="w-[40%] flex items-center">
                    <i className="text-[10vh] ri-graduation-cap-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Cook like a Chef</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-[40%] flex items-center">
                    <i className="text-[10vh] ri-bread-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Ingredients</h1>

                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-[40%] flex items-center">
                    <i className="text-[10vh] ri-presentation-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Easy Recipe</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-[40%] flex items-center">
                    <i className="text-[10vh] ri-temp-hot-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Serve Hot</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
