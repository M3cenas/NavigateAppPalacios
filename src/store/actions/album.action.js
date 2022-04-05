import {albumTypes} from '../types/album.types';

const {SELECT_ALBUM, FILTERED_ALBUMS} = albumTypes;

export const selectAlbum = albumId => ({
  type: SELECT_ALBUM,
  albumId,
});

export const filteredAlbums = Id => ({
  type: FILTERED_ALBUMS,
  genreId: Id,
});
