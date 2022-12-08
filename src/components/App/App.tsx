import { useReducer } from "react";

import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Products } from "../Products";

import { CartContext, CartDispatchContext, initialCart } from "../../contexts";
import { cartReducer } from "../../reducers/cart";

export const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        <Wrapper>
          <TitleWrapper>
            <h1>Clothing Shop Starter Project</h1>
          </TitleWrapper>
          <LinksWrapper>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
          </LinksWrapper>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Wrapper>
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
