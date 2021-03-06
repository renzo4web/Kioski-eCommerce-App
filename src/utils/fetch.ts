export const fetchProducts = async (endpoint: string = '') => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${endpoint}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
