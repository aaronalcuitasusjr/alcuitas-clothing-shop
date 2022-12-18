import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../contexts";
import { ProductsWrapper, Title, TitleContainer } from "./Cart.styled";
import { ProductCard } from "../ProductCard";
import { QuantityField } from "../QuantityField";

export const Cart = () => {
  const shop = useContext(ShopContext);
  const [total, setTotal] = useState(getCartTotal);

  useEffect(() => {
    var cartTotal = 0;
    shop.cart.forEach(
      (product) => (cartTotal += product.price * product.quantity)
    );
    setTotal(cartTotal);
  }, [shop.cart]);

  function getCartTotal() {
    var cartTotal = 0;
    shop.cart.forEach(
      (product) => (cartTotal += product.price * product.quantity)
    );
    return cartTotal;
  }

  return (
    <>
      <TitleContainer>
        <Title>Your cart total is {total}.00$</Title>
        {shop.cart && shop.cart.length ? <QuantityField /> : null}
      </TitleContainer>
      <ProductsWrapper>
        {shop.cart.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};
