import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterCharacter } from '../../redux/actions';
import './styles.scss';

const Filter = ({ filterCharacter }) => {
  const [active, setActive] = useState('characters');

  const handleFilter = (type: string) => {
    if (active === type) {
      filterCharacter('characters');
      setActive('characters');
    }
    filterCharacter(type);
    setActive(type);
  };

  return (
    <div className='Filter'>
      <p><strong>Selecciona tu filtro</strong></p>
      <div className='Filter__selector'>
        <button
          type='button'
          className='btn-primary'
          onClick={() => handleFilter('students')}
        >
          Estudiantes
        </button>
        <button
          type='button'
          className='btn-primary'
          onClick={() => handleFilter('staff')}
        >
          Staff
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  filterCharacter,
};

export default connect(null, mapDispatchToProps)(Filter);
