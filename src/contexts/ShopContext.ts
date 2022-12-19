import { createContext, type Dispatch } from "react";
import { ShopAction } from "../reducers/shop";
import { Product } from "../models";

type Shop = {
  cart: Product[];
  wishlist: Product[];
};

export const initialShop: Shop = {
  cart: [],
  wishlist: [],
};
export const initialDispatch: Dispatch<ShopAction> = () => {};

export const ShopContext = createContext(initialShop);
export const ShopDispatchContext = createContext(initialDispatch);
