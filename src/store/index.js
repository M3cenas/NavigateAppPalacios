import {createStore, combineReducers} from 'redux';
import genreReducer from './reducers/genre.reducer';
import albumReducer from './reducers/album.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  genres: genreReducer,
  albums: albumReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
