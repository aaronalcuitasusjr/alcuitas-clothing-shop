import { ShopAction, ShopActionType } from "./actions";

import { ShopState } from "./state";

export const shopReducer = (state: typeof ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.CART_ADD:
    case ShopActionType.CART_REMOVE:
    case ShopActionType.CART_UPDATE:
      return {
        ...state,
        cart: action.payload,
      };

    case ShopActionType.WISH_ADD:
    case ShopActionType.WISH_REMOVE:
      return {
        ...state,
        wishlist: action.payload,
      };

    default:
      return state;
  }
};
