import {ALBUMS} from '../constants/albums';

const initialState = {
  products: ALBUMS,
  filteredAlbums: [],
  selectAlbums: null,
};

const albumReducer = (state = initialState, action) => {
  return state;
};

export default albumReducer;
