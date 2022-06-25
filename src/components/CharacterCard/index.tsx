import React from 'react';
import { HiOutlineBookmark, HiBookmark } from 'react-icons/hi';
import './styles.scss';

type CharacterCardProps = {
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
  isFavorite?: boolean
  addFavorite?: () => void;
  removeFavorite?: () => void;
};

const CharacterCard = ({ character, isFavorite, addFavorite, removeFavorite }: CharacterCardProps) => {
  return (
    <div className='CharacterCard'>
      <div className={`CharacterCard__header ${character.house}`}>
        <figure className='CharacterCard__header--image'>
          <img src={character.image} alt={character.name} />
        </figure>
      </div>
      <div className='CharacterCard__body'>
        <div className='CharacterCard__body--status'>
          <div>
            <p>{character.alive ? 'Vivo' : 'Finado'}</p>
            <p>{character.hogwartsStudent ? 'Estudiante' : character.hogwartsStaff ? 'Staff' : ''}</p>
          </div>
          <div>
            <button
              type='button'
              className={`btn-link ${isFavorite}`}
              onClick={isFavorite ? removeFavorite : addFavorite}
            >
              {isFavorite ? <HiBookmark /> : <HiOutlineBookmark />}
            </button>
          </div>
        </div>
        <div className='CharacterCard__body--title'>
          <p><strong>{character.name}</strong></p>
        </div>
        <div className='CharacterCard__body--info'>
          <p>
            <strong>Cumpleaños:</strong>
            {' '}
            {character.dateOfBirth}
          </p>
          <p>
            <strong>Género:</strong>
            {' '}
            {character.gender}
          </p>
          <p>
            <strong>Color de ojos:</strong>
            {' '}
            {character.eyeColour}
          </p>
          <p>
            <strong>Color de pelo:</strong>
            {' '}
            {character.hairColour}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
