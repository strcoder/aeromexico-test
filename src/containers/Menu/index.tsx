import React, { useState } from 'react';
import { connect } from 'react-redux';
import { HiBookmark } from 'react-icons/hi';
import { AiOutlineUserAdd } from 'react-icons/ai';

import FavoritesList from '../FavoritesList';
import { removeFavorite } from '../../redux/actions';
import AddCharacterModal from '../../components/AddCharacterModal';
import './styles.scss';

const Menu = ({ favorites, removeFavorite }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const handleRemoveFavorite = (character) => {
    removeFavorite(favorites, character);
  };

  return (
    <div className='Menu'>
      <div className='Menu__actions'>
        <button type='button' onClick={() => setShowFavorites(!showFavorites)}>
          <span>Favoritos</span>
          <span><HiBookmark /></span>
        </button>
        <button type='button' onClick={() => setShowModal(!showModal)}>
          <span>Agregar</span>
          <span><AiOutlineUserAdd /></span>
        </button>
      </div>
      {showFavorites && (
        <div className='Menu__container'>
          <FavoritesList
            favorites={favorites}
            removeFavorite={handleRemoveFavorite}
          />
        </div>
      )}
      <AddCharacterModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = {
  removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
