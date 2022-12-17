import { useState, useContext, useEffect } from "react";
import { cartAdd, cartRemove, wishAdd, wishRemove } from "../../reducers/shop";

import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from "./ProductCard.styled";

import { ShopContext, ShopDispatchContext } from "../../contexts";
import { Product } from "../../models";

export const ProductCard = (product: Product) => {
  const shop = useContext(ShopContext);
  const dispatch = useContext(ShopDispatchContext);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = shop.cart.find((item) => item.id === product.id);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [shop.cart, product.id]);

  const handleAddToCart = (product: Product) => {
    dispatch(cartAdd([...shop.cart, product]));
  };

  const handleRemoveFromCart = (product: Product) => {
    dispatch(cartRemove(shop.cart.filter((item) => item.id !== product.id)));
  };

  return (
    <Wrapper background={product.imageUrl}>
      <AddButton
        isInCart={isInCart}
        onClick={() => {
          isInCart ? handleRemoveFromCart(product) : handleAddToCart(product);
        }}
      >
        <p>{isInCart ? "−" : "+"}</p>
      </AddButton>
      <TextContainer>
        <Title>{product.name}</Title>
        <SubTitle>{product.price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
