import { Product } from "../../models";

export enum ShopActionType {
  CART_ADD = "cart_add",
  CART_REMOVE = "cart_remove",
  CART_UPDATE = "cart_update",
  WISH_ADD = "wish_add",
  WISH_REMOVE = "wish_remove",
}

export type ShopAction = {
  type: ShopActionType;
  payload: Product[];
};

export const cartAdd = (cart: Product[]): ShopAction => ({
  type: ShopActionType.CART_ADD,
  payload: cart,
});

export const cartRemove = (cart: Product[]): ShopAction => ({
  type: ShopActionType.CART_REMOVE,
  payload: cart,
});

export const cartUpdate = (cart: Product[]): ShopAction => ({
  type: ShopActionType.CART_UPDATE,
  payload: cart,
});

export const wishAdd = (wishlist: Product[]): ShopAction => ({
  type: ShopActionType.WISH_ADD,
  payload: wishlist,
});

export const wishRemove = (wishlist: Product[]): ShopAction => ({
  type: ShopActionType.WISH_REMOVE,
  payload: wishlist,
});
