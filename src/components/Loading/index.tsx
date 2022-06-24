import React from 'react';
import { VscLoading } from 'react-icons/vsc';
import './styles.scss';

const Loading = () => {
  return (
    <section className='Loading'>
      <span><VscLoading /></span>
      <p><strong>Cargando ...</strong></p>
    </section>
  );
};

export default Loading;
