import { ProductCart } from '../context/ProductsContext/ProductsContext';
import { Product } from '../types/types';

export type ProductsAction =
  | {
      type: 'ADD_TO_CART';
      payload: ProductCart;
    }
  | {
      type: 'REMOVE_FROM_CART';
      payload: ProductCart;
    }
  | {
      type: 'ADD_TO_FAVORITES';
      payload: Product;
    }
  | { type: 'REMOVE_FROM_FAVORITES'; payload: Product };
