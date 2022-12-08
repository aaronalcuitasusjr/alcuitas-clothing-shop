import { createContext, type Dispatch } from "react";
import { CartAction } from "../reducers/cart";
import { Product } from "../models";

export const initialCart: Product[] = [];
export const initialDispatch: Dispatch<CartAction> = () => {};

export const CartContext = createContext(initialCart);
export const CartDispatchContext = createContext(initialDispatch);
