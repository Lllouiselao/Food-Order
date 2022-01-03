import React from "react";
import classes from './Header.module.css';
import mealsIMG from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";


const Header = props =>{
    return <React.Fragment>
        <header className={classes.header} >
            <h2>Food Order</h2>
            {/* the onClick is custom compoenent */}
            <HeaderCartButton onClick={props.onShowCart} />
            
        </header>
        <div className={classes['.main-image']} >
            <img src={mealsIMG}/>
        </div>
    </React.Fragment>
};

export default Header;