import { useState, useContext, useEffect } from "react";
import { cartAdd, cartRemove, wishAdd, wishRemove } from "../../reducers/shop";

import {
  CartAddButton,
  WishAddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from "./ProductCard.styled";
import {
  MdOutlineAddShoppingCart,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md";

import { ShopContext, ShopDispatchContext } from "../../contexts";
import { Product } from "../../models";

import Tooltip from "@material-ui/core/Tooltip";

export const ProductCard = (product: Product) => {
  const shop = useContext(ShopContext);
  const dispatch = useContext(ShopDispatchContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false);

  useEffect(() => {
    const productIsInCart = shop.cart.find((item) => item.id === product.id);
    const productIsInWish = shop.wishlist.find(
      (item) => item.id === product.id
    );

    if (productIsInCart && productIsInWish) {
      setIsInCart(true);
      setIsInWish(true);
    } else if (productIsInCart && !productIsInWish) {
      setIsInCart(true);
      setIsInWish(false);
    } else if (!productIsInCart && productIsInWish) {
      setIsInCart(false);
      setIsInWish(true);
    } else {
      setIsInCart(false);
      setIsInWish(false);
    }
  }, [shop.cart, shop.wishlist, product.id]);

  const handleAddToCart = (product: Product) => {
    dispatch(cartAdd([...shop.cart, product]));
  };

  const handleRemoveFromCart = (product: Product) => {
    dispatch(cartRemove(shop.cart.filter((item) => item.id !== product.id)));
  };

  const handleAddToWish = (product: Product) => {
    dispatch(wishAdd([...shop.wishlist, product]));
  };

  const handleRemoveFromWish = (product: Product) => {
    dispatch(
      wishRemove(shop.wishlist.filter((item) => item.id !== product.id))
    );
  };

  return (
    <Wrapper background={product.imageUrl}>
      <Tooltip
        title={isInCart ? "Remove From Cart" : "Add To Cart"}
        placement="bottom"
        arrow
      >
        <CartAddButton
          isInCart={isInCart}
          onClick={() => {
            isInCart ? handleRemoveFromCart(product) : handleAddToCart(product);
          }}
        >
          <span>
            {isInCart ? (
              <MdOutlineRemoveShoppingCart />
            ) : (
              <MdOutlineAddShoppingCart />
            )}{" "}
          </span>
        </CartAddButton>
      </Tooltip>

      <Tooltip
        title={isInWish ? "Remove From Wishlist" : "Add To Wishlist"}
        placement="bottom"
        arrow
      >
        <WishAddButton
          id="wish-add-btn"
          isInWish={isInWish}
          onClick={() => {
            isInWish ? handleRemoveFromWish(product) : handleAddToWish(product);
          }}
        >
          <p>{isInWish ? "−" : "+"}</p>
        </WishAddButton>
      </Tooltip>

      <TextContainer>
        <Title>{product.name}</Title>
        <SubTitle>{product.price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
