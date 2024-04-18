import { createStore } from 'redux';
import rootReducer from './reducers'; 

// Создаем store Redux, передавая корневой редуктор
const store = createStore(rootReducer);


export default store;
