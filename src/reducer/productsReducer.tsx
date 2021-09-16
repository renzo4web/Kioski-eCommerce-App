import { ProductsAction } from '../actions/products';
import { ProductState } from '../context/ProductsContext/ProductsContext';

export const productReducer = (
  state: ProductState,
  action: ProductsAction,
): ProductState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.id),
      };

    case 'ADD_TO_FAVORITES':
      let favorites: number[] = state.favorites || [];
      return {
        ...state,
        cart: state.cart.map(el =>
          el.id === action.payload ? { ...el, isFavorite: true } : el,
        ),
        favorites: [...favorites, action.payload],
      };

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        cart: state.cart.map(el =>
          el.id === action.payload ? { ...el, isFavorite: false } : el,
        ),
        favorites: state.favorites.filter(fav => fav !== action.payload),
      };

    default:
      return state;
  }
};
