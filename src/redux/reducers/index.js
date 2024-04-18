import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

// Комбинируем все редукторы в один корневой редуктор
const rootReducer = combineReducers({
  cart: cartReducer, // Добавляем редуктор корзины под ключ "cart"
});

export default rootReducer;