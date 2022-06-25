import React from 'react';
import FavoriteCard from '../../components/FavoriteCard';
import './styles.scss';

const FavoritesList = ({ favorites, removeFavorite }) => {

  if (!favorites || favorites.length === 0) {
    return (
      <div className='FavoritesList'>
        <div className='FavoritesList__empty'>
          <p>No tienes favoritos</p>
        </div>
      </div>
    );
  }

  return (
    <div className='FavoritesList'>
      <div className='FavoritesList__container'>
        {favorites?.map((character) => (
          <FavoriteCard
            character={character}
            removeFavorite={() => removeFavorite(character)}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
