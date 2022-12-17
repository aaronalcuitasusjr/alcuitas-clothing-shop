import { useContext } from "react";
import { ShopContext } from "../../contexts";
import { ProductsWrapper, Title } from "./Cart.styled";
import { ProductCard } from "../ProductCard";
import { Product } from "../../models";

export const Cart = () => {
  const shop = useContext(ShopContext);

  function getCartTotal(cart: Product[]) {
    var cartTotal = 0;
    shop.cart.forEach((product) => (cartTotal += product.price));
    return cartTotal;
  }

  return (
    <>
      <Title>Your cart total is {getCartTotal(shop.cart)}.00$</Title>
      <ProductsWrapper>
        {shop.cart.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};
