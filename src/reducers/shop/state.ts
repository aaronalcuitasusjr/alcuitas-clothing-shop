import { Product } from "../../models";

type Shop = {
  cart: Product[];
  wishlist: Product[];
};

export const ShopState: Shop = {
  cart: [],
  wishlist: [],
};
