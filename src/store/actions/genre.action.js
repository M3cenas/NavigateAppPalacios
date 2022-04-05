import {genreTypes} from '../types/genre.types';

const {SELECT_GENRE} = genreTypes;

export const selectedGenre = Id => ({
  type: SELECT_GENRE,
  genreId: Id,
});
