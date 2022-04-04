import {createStore, combineReducers} from 'redux';
import genreReducer from './reducers/genre.reducer';
import albumReducer from './reducers/album.reducer';

const rootReducer = combineReducers({
  genres: genreReducer,
  albums: albumReducer,
});

export default createStore(rootReducer);
