import { createContext, useEffect, useState } from "react";

export const Recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [recipes, setrecipes] = useState([]);
    useEffect(() => {
        setrecipes(JSON.parse(localStorage.getItem("recipes")) || []);
    }, []);

    return (
        <Recipecontext.Provider value={[recipes, setrecipes]}>
            {props.children}
        </Recipecontext.Provider>
    );
};

export default RecipeContext;
