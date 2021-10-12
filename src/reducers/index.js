const initialState = {
  animeList: [],
  filterLikeAnimeList: [],
  loading: true,
  error: null,
  quantity: null,
  cards: null,
  isOnCollection: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ANIME_SUCCESS':
      return {
        ...state,
        animeList: action.payload,
        loading: false,
      };

    case 'FETCH_ANIME_FAILURE':
      return {
        ...state,
        animeList: [],
        loading: false,
        error: action.payload,
      };

    case 'ANIME_ADD_QUANTITY':
      return {
        ...state,
        quantity: action.payload,
      };

    case 'ANIME_ADD_CARDS':
      return {
        ...state,
        cards: action.payload,
      };

    case 'ANIME_ADD_LIKE':
      const { animeId } = action.payload;
      const animeLiked = state.animeList.find((i) => i.id === animeId);
      animeLiked.isLiked = true;
      return {
        ...state,
        animeList: [...state.animeList],
      };

    case 'ANIME_REMOVE_LIKE':
      const id = action.payload;
      const anime = state.animeList.find((i) => i.id === id);
      anime.isLiked = false;
      return {
        ...state,
        animeList: [...state.animeList],
      };

    case 'ANIME_REMOVE':
      const itemId = action.payload;
      const newAnimeList = state.animeList.filter((i) => i.id !== itemId);
      return {
        ...state,
        animeList: [...newAnimeList],
      };

    case 'ANIME_REMOVE_FROM_COLLECTION':
      const _id = action.payload;
      const newfilterLikeAnimeList = state.filterLikeAnimeList.filter(
        (i) => i.id !== _id
      );
      return {
        ...state,
        filterLikeAnimeList: [...newfilterLikeAnimeList],
      };

    case 'ANIME_FILTER_COLLECTION':
      const filterAnimeList = state.animeList.filter((i) => i.isLiked);
      return {
        ...state,
        filterLikeAnimeList: [...filterAnimeList],
        isOnCollection: true,
      };

    case 'ANIME_DEL_FILTER_COLLECTION':
      return {
        ...state,
        isOnCollection: false,
      };

    default:
      return state;
  }
};

export default reducer;
