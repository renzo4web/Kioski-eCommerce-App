export type ProductsAction =
  | {
      type: 'ADD_TO_CART';
    }
  | {
      type: 'ADD_TO_FAVORITES';
      payload: number;
    };
