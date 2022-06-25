import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { HiBookmark } from 'react-icons/hi';
import { AiOutlineUserAdd } from 'react-icons/ai';

import FavoritesList from '../FavoritesList';
import { removeFavorite, createCharacters } from '../../redux/actions';
import AddCharacterModal from '../../components/AddCharacterModal';
import './styles.scss';

const Menu = ({ favorites, removeFavorite, createCharacters }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const handleRemoveFavorite = (character) => {
    removeFavorite(favorites, character);
  };

  const handleAddCharacter = (data) => {
    const image = data.image[0]?.name || '';
    const id = uuid();
    createCharacters({
      ...data,
      id,
      image,
    });
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
        onSubmit={handleAddCharacter}
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
  createCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
