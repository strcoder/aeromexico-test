import React from 'react';
import Modal from '../Modal';
import './styles.scss';

const AddCharacterModal = ({ showModal, onClose }) => {
  return (
    <Modal
      title='Modal'
      show={showModal}
      onClose={onClose}
    >
      <form className='AddingForm'>
        <label htmlFor='name' className='AddingForm__label'>
          <p>Nombre</p>
          <input className='input' type='text' id='name' name='name' />
        </label>
        <label htmlFor='birthday' className='AddingForm__label'>
          <p>Cumpleaños</p>
          <input className='input' type='date' id='birthday' name='birthday' />
        </label>
        <label htmlFor='eyeColour' className='AddingForm__label'>
          <p>Color de ojos</p>
          <input className='input' type='text' id='eyeColour' name='eyeColour' />
        </label>
        <label htmlFor='hairColour' className='AddingForm__label'>
          <p>Color de pelo</p>
          <input className='input' type='text' id='hairColour' name='hairColour' />
        </label>
        <div className='AddingForm__radio'>
          <p>Género</p>
          <label htmlFor='' className='AddingForm__radio--options'>
            <input type='radio' name='gender' checked />
            <p>Mujer</p>
          </label>
          <label htmlFor='' className='AddingForm__radio--options'>
            <input type='radio' name='gender' />
            <p>Hombre</p>
          </label>
        </div>
        <div className='AddingForm__radio'>
          <p>Posición</p>
          <label htmlFor='' className='AddingForm__radio--options'>
            <input type='radio' name='position' checked />
            <p>Estudiante</p>
          </label>
          <label htmlFor='' className='AddingForm__radio--options'>
            <input type='radio' name='position' />
            <p>Staff</p>
          </label>
        </div>
        <label htmlFor='image' className='AddingForm__file'>
          <p>Fotografía (input type file)</p>
          <input type='file' name='image' id='image' />
        </label>
        <button type='submit' className='AddingForm__button'>
          Guardar
        </button>
      </form>
    </Modal>
  );
};

export default AddCharacterModal;
