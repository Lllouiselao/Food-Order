import classes from "./Card.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {" "}
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name} </li>
      ))}
    </ul>
  );
  return (
    <Modal offShowCart={props.offShowCart} >
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>{/* total amount */}
        <span>35.99 </span>
      </div>
      <div className={classes.actions} >{/* button for adding in to the cart */}
        <button className={classes['button--alt']} onClick={props.offShowCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      
    </Modal>
  );
};

export default Cart;
