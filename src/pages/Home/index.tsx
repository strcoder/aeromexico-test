import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CharacterCard from '../../components/CharacterCard';
import { getCharacters } from '../../redux/actions';

const Home = ({ getCharacters, characters }) => {

  useEffect(() => {
    if (!characters || characters.length === 0) {
      getCharacters();
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {characters && characters.length !== 0 && (
        <>
          {characters.map((character) => (
            <CharacterCard
              character={character}
            />
          ))}
        </>
      )}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
