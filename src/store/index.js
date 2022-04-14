import {createStore, combineReducers, applyMiddleware} from 'redux';
import genreReducer from './reducers/genre.reducer';
import albumReducer from './reducers/album.reducer';
import cartReducer from './reducers/cart.reducer';
import authReducer from './reducers/auth.reducer';
import thunk from 'redux-thunk';
import orderReducer from './reducers/order.reducer';

const rootReducer = combineReducers({
  genres: genreReducer,
  albums: albumReducer,
  cart: cartReducer,
  auth: authReducer,
  order: orderReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
