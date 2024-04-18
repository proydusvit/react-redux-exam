const initialState = {
  cartItems: [], // Начальное состояние, содержащее пустой массив для элементов корзины
  isCartOpen: false // Начальное состояние открытости корзины установлено в false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload] // Добавляем элемент в корзину
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        isCartOpen: !state.isCartOpen // Изменяем состояние открытости корзины на противоположное
      };
    default:
      return state; // Возвращаем текущее состояние, если действие неизвестно
  }
};

export default cartReducer;
