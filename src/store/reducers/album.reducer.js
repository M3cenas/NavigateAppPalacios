import {ALBUMS} from '../../constants/albums';
import {albumTypes} from '../types/album.types';
const {SELECT_ALBUM, FILTERED_ALBUMS} = albumTypes;

const initialState = {
  albums: ALBUMS,
  filteredAlbums: [],
  selectedAlbum: null,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ALBUM:
      return {
        ...state,
        selectedAlbum: state.albums.find(album => album.Id === action.albumId),
      };
    case FILTERED_ALBUMS:
      return {
        ...state,
        filteredAlbums: state.albums.filter(
          album => album.genre === action.genreId,
        ),
      };
    default:
      return state;
  }
};

export default albumReducer;
