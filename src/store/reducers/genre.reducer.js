import {GENRES} from '../../constants/genres';
import {genreTypes} from '../types/genre.types';

const {SELECT_GENRE} = genreTypes;

const initialState = {
  genres: GENRES,
  selectedGenre: null,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      const indexGenre = state.genres.findIndex(
        genre => genre.Id === action.genreId,
      );
      if (indexGenre === -1) return state;
      return {
        ...state,
        selectedGenre: state.genres[indexGenre],
      };
    default:
      return state;
  }
};

export default genreReducer;
