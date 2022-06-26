/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import FavoriteCard from './index';

const character = {
  name: 'Harry Potter',
  species: 'human',
  gender: 'male',
  house: 'Gryffindor',
  dateOfBirth: '31-07-1980',
  yearOfBirth: 1980,
  ancestry: 'half-blood',
  eyeColour: 'green',
  hairColour: 'black',
  wand: {
    wood: 'holly',
    core: 'phoenix feather',
    length: 11,
  },
  patronus: 'stag',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Daniel Radcliffe',
  alive: true,
  image: 'http://hp-api.herokuapp.com/images/harry.jpg',
};

describe('<FavoriteCard />', () => {
  test('Component render', () => {
    const { getByText, getByTitle } = render(
      <FavoriteCard
        character={character}
        removeFavorite={() => {}}
      />,
    );

    expect(getByText(/harry potter/i)).toBeTruthy();
    expect(getByTitle(/eliminar de favoritos/i)).toBeTruthy();
  });
});
