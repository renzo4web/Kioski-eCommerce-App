import { ProductsAction } from '../actions/products';
import { ProductState } from '../context/ProductsContext/ProductsContext';

export const productReducer = (
  state: ProductState,
  action: ProductsAction,
): ProductState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state };

    case 'ADD_TO_FAVORITES':
      let favorites: number[] = state.favorites || [];
      return {
        ...state,
        favorites: [...favorites, action.payload],
      };

    default:
      return state;
  }
};
