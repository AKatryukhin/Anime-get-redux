import React from 'react';
import './AnimeListItem.css';

const AnimeListItem = ({
  anime,
  animeAddedLike,
  animeRemoveLike,
  animeRemove,
}) => {
  const { attributes } = anime;
  return (
    <li className='card'>
      <div className='card__info-container'>
        <div className='card__header-container'>
          <div className='card__info'>
            <h3 className='card__name'>{attributes.canonicalTitle}</h3>
          </div>
          <div className='card__buttons-container'>
            <button
              className={
                anime.isLiked
                  ? 'card__like-button card__like-button_active'
                  : 'card__like-button'
              }
              type='button'
              aria-label='Кнопка для лайков'
              onClick={
                anime.isLiked
                  ? () => animeRemoveLike(anime.id)
                  : () => animeAddedLike(anime.id)
              }
            ></button>
            {!anime.isLiked && (
              <button
                className='card__remove-button'
                type='button'
                aria-label='Кнопка для Удаления'
                onClick={() => animeRemove(anime.id)}
              />
            )}
          </div>
        </div>
        <img
          className='card__image'
          src={attributes.posterImage.medium}
          alt='Картинка'
        />
      </div>
    </li>
  );
};

export default AnimeListItem;
