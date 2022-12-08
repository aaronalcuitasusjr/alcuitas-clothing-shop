import { useContext } from "react";
import { CartContext } from "../../contexts";
import { ProductsWrapper, Title } from "./Products.styled";
import { ProductCard } from "../ProductCard";
import { shopData } from "../../data";
import { Product } from "../../models";

export const Products = () => {
  const cart = useContext(CartContext);

  function getIsInCart(id: number, cart: Product[]) {
    var isFound = false;
    cart.map((product) => {
      if (product.id == id) {
        isFound = true;
        return;
      }
    });
    return isFound;
  }

  return (
    <>
      <Title>Welcome to the Clothing Shop</Title>
      <ProductsWrapper>
        {shopData.map((data, index) => (
          <ProductCard
            key={index}
            id={data.id}
            name={data.name}
            price={data.price}
            imageUrl={data.imageUrl}
            currIsInCart={getIsInCart(data.id, cart)}
          />
        ))}
      </ProductsWrapper>
    </>
  );
};
