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
              onClick={anime.isLiked ? animeRemoveLike : animeAddedLike}
            ></button>
            {!anime.isLiked && (
              <button
                className='card__remove-button'
                type='button'
                aria-label='Кнопка для Удаления'
                onClick={animeRemove}
              />
            )}
          </div>
        </div>
        <div className='card__character-wrapper'>
          <img
            className='card__character-image'
            src={attributes.posterImage.medium}
            alt='Картинка'
          />
        </div>
      </div>
    </li>
  );
};

export default AnimeListItem;
