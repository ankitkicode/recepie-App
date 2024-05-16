import React from "react";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Recipes from "./components/Recipes";
import Details from "./components/Details";
import Create from "./components/Create";
import About from "./components/About";
import Contact from "./components/Contact";
import Update from "./components/Update";

const App = () => {
    return (
        <div className="w-[80%] m-auto ">
            <Nav />

            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/create-recipe" element={<Create />} />
                <Route path="/update-recipe/:id" element={<Update />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:id" element={<Details />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
