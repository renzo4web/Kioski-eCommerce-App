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
      return {
        ...state,
        // if product is already in the cart
        cart: state.cart.map(el =>
          el.id === action.payload.id ? { ...el, isFavorite: true } : el,
        ),
        favorites: [...state.favorites, action.payload],
      };

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        cart: state.cart.map(el =>
          el.id === action.payload.id ? { ...el, isFavorite: false } : el,
        ),
        favorites: state.favorites.filter(fav => fav.id !== action.payload.id),
      };

    default:
      return state;
  }
};
