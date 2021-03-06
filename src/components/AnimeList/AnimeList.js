import React, { useEffect } from 'react';
import AnimeListItem from '../AnimeListItem';
import { connect } from 'react-redux';
import * as actions from '../../actions/';

import './AnimeList.css';
import { AnimeServiceWrap, useWindowSize } from '../../hooks';

import FilterCheckbox from '../FilterCheckbox/';
import Preloader from '../Preloader';
import ErrorIndicator from '../ErrorIndicator/';

import {
  LARGE_SCREEN,
  NARROW_SCREEN,
  LARGE_SCREEN_CARDS,
  LARGE_SCREEN_CARDS_MORE,
  MEDIUM_SCREEN_CARDS,
  MEDIUM_SCREEN_CARDS_MORE,
  NARROW_SCREEN_CARDS,
  NARROW_SCREEN_CARDS_MORE,
} from '../../utils/constants';

export function AnimeList(props) {
  const size = useWindowSize();
  const {
    animeQuantity,
    animeAddCards,
    animeAddedLike,
    animeRemoveLike,
    animeRemove,
    animeFilterCollection,
    animeDelFilterCollection,
    animeCollectionRemove,
  } = props;

  function incr() {
    animeQuantity(quantity + cards);
  }

  useEffect(() => {
    function getSize() {
      if (size >= LARGE_SCREEN) {
        animeQuantity(LARGE_SCREEN_CARDS);
        animeAddCards(LARGE_SCREEN_CARDS_MORE);
      }
      if (size < LARGE_SCREEN && size > NARROW_SCREEN) {
        animeQuantity(MEDIUM_SCREEN_CARDS);
        animeAddCards(MEDIUM_SCREEN_CARDS_MORE);
      }
      if (size <= NARROW_SCREEN) {
        animeQuantity(NARROW_SCREEN_CARDS);
        animeAddCards(NARROW_SCREEN_CARDS_MORE);
      }
    }
    getSize();
  }, [size]);

  useEffect(() => {
    const { animeService, animeLoaded, animeError } = props;
    animeService
      .getAnimeList()
      .then((res) => animeLoaded(res.data))
      .catch((err) => animeError(err));
  }, []);

  const {
    animeList,
    loading,
    error,
    quantity,
    cards,
    isOnCollection,
    filterLikeAnimeList,
  } = props;

  return (
    <main className='content'>
      <div className='content__checkbox-container'>
        <FilterCheckbox
          animeFilterCollection={animeFilterCollection}
          animeDelFilterCollection={animeDelFilterCollection}
        />
      </div>
      {loading && <Preloader />}
      {error && <ErrorIndicator />}
      <ul className='anime-list'>
        {isOnCollection
          ? filterLikeAnimeList.slice(0, quantity).map((anime) => (
              <AnimeListItem
                key={anime.id}
                anime={anime}
                animeAddedLike={() => animeAddedLike(anime.id)}
                animeRemoveLike={() => {
                  animeCollectionRemove(anime.id);
                  animeRemoveLike(anime.id);
                }}
                animeRemove={() => animeRemove(anime.id)}
              />
            ))
          : animeList
              .slice(0, quantity)
              .map((anime) => (
                <AnimeListItem
                  key={anime.id}
                  anime={anime}
                  animeAddedLike={() => animeAddedLike(anime.id)}
                  animeRemoveLike={() => animeRemoveLike(anime.id)}
                  animeRemove={() => animeRemove(anime.id)}
                />
              ))}
      </ul>
      {isOnCollection ? (
        <div
          className={
            quantity >= filterLikeAnimeList.length
              ? 'anime-list__more-button-container_type_none'
              : 'anime-list__more-button-container'
          }
        >
          <button
            className='anime-list__more-button'
            aria-label='???????????????? ??????'
            onClick={incr}
          >
            ??????
          </button>
        </div>
      ) : (
        <div
          className={
            quantity >= animeList.length
              ? 'anime-list__more-button-container_type_none'
              : 'anime-list__more-button-container'
          }
        >
          <button
            className='anime-list__more-button'
            aria-label='???????????????? ??????'
            onClick={incr}
          >
            ??????
          </button>
        </div>
      )}
    </main>
  );
}

const mapStateToProps = ({
  animeList,
  loading,
  error,
  quantity,
  cards,
  isOnCollection,
  filterLikeAnimeList,
}) => {
  return {
    animeList,
    loading,
    error,
    quantity,
    cards,
    isOnCollection,
    filterLikeAnimeList,
  };
};

export default AnimeServiceWrap()(connect(mapStateToProps, actions)(AnimeList));
