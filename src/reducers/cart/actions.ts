import { Product } from "../../models";

export enum CartActionType {
  ADD = "add",
  REMOVE = "remove",
}

export type CartAction = {
  type: CartActionType;
  payload: Product;
};

export const add = (product: Product): CartAction => ({
  type: CartActionType.ADD,
  payload: product,
});

export const remove = (product: Product): CartAction => ({
  type: CartActionType.REMOVE,
  payload: product,
});
