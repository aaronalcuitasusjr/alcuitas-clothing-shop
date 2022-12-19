import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../contexts";
import { ProductsWrapper, Title, TitleContainer } from "./Cart.styled";
import { ProductCard } from "../ProductCard";
import { QuantityField } from "../QuantityField";

export const Cart = () => {
  const shop = useContext(ShopContext);
  const [total, setTotal] = useState(getCartTotal());

  useEffect(() => {
    setTotal(getCartTotal());
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
        <Title>
          {shop.cart && shop.cart.length
            ? `Your cart total is ${total}.00$`
            : "There are no products in your cart"}
        </Title>
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
