export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART', // Добавить в корзину
    payload: item // Элемент
  };
};

export const toggleCart = () => {
  return {
    type: 'TOGGLE_CART' // Изменить открытие корзины
  };
};
