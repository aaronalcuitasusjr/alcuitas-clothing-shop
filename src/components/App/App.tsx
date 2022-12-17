import { useReducer } from "react";

import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Products } from "../Products";

import { ShopContext, ShopDispatchContext, initialShop } from "../../contexts";
import { shopReducer } from "../../reducers/shop";

export const App = () => {
  const [shop, dispatch] = useReducer(shopReducer, initialShop);

  return (
    <ShopContext.Provider value={shop}>
      <ShopDispatchContext.Provider value={dispatch}>
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
      </ShopDispatchContext.Provider>
    </ShopContext.Provider>
  );
};
