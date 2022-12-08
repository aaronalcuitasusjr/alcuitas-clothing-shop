import { useState, useContext, FC } from "react";
import { add, remove } from "../../reducers/cart";

import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from "./ProductCard.styled";

import { CartContext, CartDispatchContext } from "../../contexts";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  currIsInCart: boolean;
}

export const ProductCard: FC<ProductCardProps> = (props): JSX.Element => {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const [isInCart, setIsInCart] = useState(props.currIsInCart);

  return (
    <Wrapper background={props.imageUrl}>
      <AddButton
        isInCart={isInCart}
        onClick={() => {
          isInCart
            ? dispatch(
                remove({
                  id: props.id,
                  name: props.name,
                  price: props.price,
                  imageUrl: props.imageUrl,
                })
              )
            : dispatch(
                add({
                  id: props.id,
                  name: props.name,
                  price: props.price,
                  imageUrl: props.imageUrl,
                })
              );
          setIsInCart(!isInCart);
        }}
      >
        <p>{isInCart ? "−" : "+"}</p>
      </AddButton>
      <TextContainer>
        <Title>{props.name}</Title>
        <SubTitle>{props.price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
