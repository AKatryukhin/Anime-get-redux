
const animeLoaded = (newAnime) => {
  return {
    type: 'FETCH_ANIME_SUCCESS',
    payload: newAnime
  };
};

const animeError = (error) => {
  return {
    type: 'FETCH_ANIME_FAILURE',
    payload: error
  };
};

const animeQuantity = (count) => {
  return {
    type: 'ANIME_ADD_QUANTITY',
    payload: count
  };
};

const animeAddCards = (count) => {
  return {
    type: 'ANIME_ADD_CARDS',
    payload: count
  };
};

const animeAddedLike = (animeId, like) => {
  return {
    type: 'ANIME_ADD_LIKE',
    payload: { animeId, like }
  };
};

const animeRemoveLike = (animeId) => {
  return {
    type: 'ANIME_REMOVE_LIKE',
    payload: animeId
  };
};

const animeRemove = (animeId) => {
  return {
    type: 'ANIME_REMOVE',
    payload: animeId
  };
};

const animeCollectionRemove = (animeId) => {
  return {
    type: 'ANIME_REMOVE_FROM_COLLECTION',
    payload: animeId
  };
};

const animeFilterCollection = () => {
  return {
    type: 'ANIME_FILTER_COLLECTION',
  };
};

const animeDelFilterCollection = () => {
  return {
    type: 'ANIME_DEL_FILTER_COLLECTION',
  };
};

export {
  animeLoaded,
  animeError,
  animeQuantity,
  animeAddCards,
  animeAddedLike,
  animeRemoveLike,
  animeRemove,
  animeFilterCollection,
  animeDelFilterCollection,
  animeCollectionRemove
};
