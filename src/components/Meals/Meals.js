import AvaliableMeals from "./AvaliableMeals";
import MealsSummary from './MealsSummary'
import React from "react";

const Meals = () =>{
    return <React.Fragment>
        <MealsSummary/>
        <AvaliableMeals />
    </React.Fragment>

};

export default Meals;