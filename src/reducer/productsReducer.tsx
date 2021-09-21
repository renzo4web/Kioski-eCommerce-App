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

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(el =>
          el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el,
        ),
      };

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(el =>
          el.id === action.payload
            ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
            : el,
        ),
      };

    case 'CHECKOUT':
      const order = { orderId: new Date().getTime(), items: [...state.cart] };

      return {
        ...state,
        orders: [...state.orders, order],
      };

    default:
      return state;
  }
};
