import { useContext } from "react";
import { CartContext } from "../../contexts";
import { ProductsWrapper, Title } from "./Cart.styled";
import { ProductCard } from "../ProductCard";
import { Product } from "../../models";

export const Cart = () => {
  const cart = useContext(CartContext);

  function getCartTotal(cart: Product[]) {
    var cartTotal = 0;
    cart.map((product) => {
      cartTotal += product.price;
    });
    return cartTotal;
  }

  return (
    <>
      <Title>Your cart total is {getCartTotal(cart)}.00$</Title>
      <ProductsWrapper>
        {cart.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};
