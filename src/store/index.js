import {createStore, combineReducers, applyMiddleware} from 'redux';
import genreReducer from './reducers/genre.reducer';
import albumReducer from './reducers/album.reducer';
import cartReducer from './reducers/cart.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  genres: genreReducer,
  albums: albumReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
