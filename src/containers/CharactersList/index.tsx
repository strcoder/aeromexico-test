import React from 'react';
import { connect } from 'react-redux';

import Menu from '../Menu';
import Loading from '../../components/Loading';
import { getCharacters, addFavorite, removeFavorite } from '../../redux/actions';
import CharacterCard from '../../components/CharacterCard';
import './styles.scss';

type PropsTypes = {
  characters: any[];
  favorites: any[];
  getCharacters: (arg0?: any) => void;
  addFavorite: (arg0?: any, arg1?: any) => void;
  removeFavorite: (arg0?: any, arg1?: any) => void;
};

class CharacterList extends React.Component<PropsTypes, PropsTypes> {

  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      characters: props.characters,
      favorites: props.favorites,
      getCharacters: props.getCharacters,
      addFavorite: props.addFavorite,
      removeFavorite: props.removeFavorite,
    };
  }

  handleAddFavorite = (character) => {
    const { addFavorite, favorites } = this.state as PropsTypes;
    addFavorite(favorites, character);
  };

  handleRemoveFavorite = (character) => {
    const { removeFavorite, favorites } = this.state;
    removeFavorite(favorites, character);
  };

  isFavorite = (character) => {
    const { favorites } = this.state;
    const element = favorites?.find((element) => element.name === character.name);
    return !!element;
  };

  componentDidMount() {
    const { characters, getCharacters } = this.state;
    if (!characters || characters.length === 0) {
      getCharacters();
    }
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(newProps) {
    this.setState(newProps);
  }

  render() {
    const { characters } = this.state;
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
            isFavorite={this.isFavorite(character)}
            addFavorite={() => this.handleAddFavorite(character)}
            removeFavorite={() => this.handleRemoveFavorite(character)}
          />
        ))}
        <Menu />
      </section>
    );
  };
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
