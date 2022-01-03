import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  /* reduce helps change array into single value if we add 3 sushi 2gether it will break down into 3 not 1  */
  const numberofCartitm = cartCtx.items.reduce((curNumber, item) =>{
    return curNumber + item.amount;
  } , 0);

  return (
    /* 这里的onclick 不是custom 而是react自带的一个控制*/
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}>{numberofCartitm} </span>
    </button>
  );
};

export default HeaderCartButton;
