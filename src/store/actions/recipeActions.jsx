import { toast } from "react-toastify";
import { addrecipe } from "../reducers/recipeSlice";

export const asyncgetrecipies = () => async (dispatch, getState) => {
    try {
        let data = JSON.parse(localStorage.getItem("recipes")) || [];
        dispatch(addrecipe(data));
    } catch (error) {
        toast.error(error);
    }
};