import { useState, useContext, useEffect } from "react";
import { add, remove } from "../../reducers/cart";

import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from "./ProductCard.styled";

import { CartContext, CartDispatchContext } from "../../contexts";
import { Product } from "../../models";

export const ProductCard = ({ id, name, imageUrl, price }: Product) => {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

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
    <Wrapper background={imageUrl}>
      <AddButton
        isInCart={getIsInCart(id, cart)}
        onClick={() => {
          getIsInCart(id, cart)
            ? dispatch(
                remove({
                  id: id,
                  name: name,
                  price: price,
                  imageUrl: imageUrl,
                })
              )
            : dispatch(
                add({
                  id: id,
                  name: name,
                  price: price,
                  imageUrl: imageUrl,
                })
              );
        }}
      >
        <p>{getIsInCart(id, cart) ? "−" : "+"}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
