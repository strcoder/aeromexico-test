import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loading from '../../components/Loading';
import { getCharacters } from '../../redux/actions';
import CharacterCard from '../../components/CharacterCard';
import './styles.scss';

const CharacterList = ({ characters, getCharacters }) => {

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
        />
      ))}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

const mapDispatchToProps = {
  getCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
