import { CartAction, CartActionType } from "./actions";

import { CartState } from "./state";

import { Product } from "../../models";

export const cartReducer = (state: Product[], action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD:
      return [...state, action.payload];

    case CartActionType.REMOVE:
      return state.filter((product) => product.id != action.payload.id);

    default:
      return state;
  }
};
