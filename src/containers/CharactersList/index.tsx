import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Menu from '../Menu';
import Loading from '../../components/Loading';
import { getCharacters, addFavorite, removeFavorite } from '../../redux/actions';
import CharacterCard from '../../components/CharacterCard';
import './styles.scss';

const CharacterList = ({ characters, favorites, getCharacters, addFavorite, removeFavorite }) => {

  const handleAddFavorite = (character) => {
    addFavorite(favorites, character);
  };

  const handleRemoveFavorite = (character) => {
    removeFavorite(favorites, character);
  };

  const isFavorite = (character) => {
    const element = favorites?.find((element) => element.name === character.name);
    return !!element;
  };

  useEffect(() => {
    if (!characters || characters.length === 0) {
      getCharacters();
    }
  }, []);

  if (!characters || characters.length === 0) {
    return (
      <Loading />
    );
  }

  return (
    <section className='CharacterList'>
      {characters.map((character) => (
        <CharacterCard
          character={character}
          isFavorite={isFavorite(character)}
          addFavorite={() => handleAddFavorite(character)}
          removeFavorite={() => handleRemoveFavorite(character)}
        />
      ))}
      <Menu />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    characters: state.characters,
  };
};

const mapDispatchToProps = {
  addFavorite,
  getCharacters,
  removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
