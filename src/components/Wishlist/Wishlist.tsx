import { ProductsWrapper, Title } from "./Wishlist.styled";
import { ProductCard } from "../ProductCard";
import { useContext } from "react";
import { ShopContext } from "../../contexts";

export const Wishlist = () => {
  const shop = useContext(ShopContext);

  return (
    <>
      <Title>
        {shop.wishlist && shop.wishlist.length
          ? "Your Wishlist"
          : "There are no products in your wishlist"}
      </Title>
      <ProductsWrapper>
        {shop.wishlist.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};
