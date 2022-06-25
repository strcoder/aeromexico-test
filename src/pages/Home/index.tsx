import React from 'react';
import CharactersList from '../../containers/CharactersList';
import Filter from '../../containers/Filter';
import './styles.scss';

const Home = () => {
  return (
    <main className='Home'>
      <div className='Home__title'>
        <figure className='Home__title--image'>
          <img src='/assets/Harry_Potter.png' alt='Harry Potter' />
        </figure>
      </div>
      <Filter />
      <CharactersList />
    </main>
  );
};

export default Home;
