import {GENRES} from '../../constants/genres';

const initialState = {
  genres: GENRES,
  selectedGenre: null,
};

// lo de arriba va a settear el estado inicial de los valores globales de genres

const genreReducer = (state = initialState, action) => {
  return state;
};

// y esto solamente va a retornar el estado actual del reductor

export default genreReducer;
