import React from 'react';
import { AnimeServiceConsumer } from '../contexts';

const AnimeServiceWrap = () => (Wrapped) => {
  return (props) => {
    return (
      <AnimeServiceConsumer>
        {(animeService) => {
          return <Wrapped {...props} animeService={animeService} />;
        }}
      </AnimeServiceConsumer>
    );
  };
};

export default AnimeServiceWrap;
