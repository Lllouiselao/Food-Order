import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartTextProvider from "./store/CartTextProvider";

function App() {
  /* switch the cart pop */
  const [popCart, setPopCart] = useState(false);

  /* the function for controlling  the popup */
  const showCartHandler = () => {
    setPopCart(true);
  };

  const hideCartHandler = () => {
    setPopCart(false);
  };

  return (
    <CartTextProvider>
      {/* because we render Cart here so we try the state here */}
      {popCart && <Cart offShowCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}  />

      <main>
        <Meals />
      </main>
    </CartTextProvider>
  );
}

export default App;
