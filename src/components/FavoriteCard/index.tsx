import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import './styles.scss';

type FavoriteCardProps = {
  character: {
    name?: string;
    species?: string;
    gender?: string;
    house?: string;
    dateOfBirth?: string;
    yearOfBirth?: number;
    ancestry?: string;
    eyeColour?: string;
    hairColour?: string;
    wand?: {
      wood: string;
      core: string;
      length: number
    };
    patronus?: string;
    hogwartsStudent?: boolean;
    hogwartsStaff?: boolean;
    actor?: string;
    alive?: boolean;
    image?: string;
  };
  removeFavorite?: () => void;
};

const FavoriteCard = ({ character, removeFavorite }: FavoriteCardProps) => {
  return (
    <div className='FavoriteCard'>
      <figure className='FavoriteCard__image'>
        <img src={character.image} alt={character.name} />
      </figure>
      <p>{character.name}</p>
      <button
        type='button'
        onClick={removeFavorite}
        className='btn-link-white'
        title='Eliminar de favoritos'
      >
        <FiTrash2 />
      </button>
    </div>
  );
};

export default FavoriteCard;
