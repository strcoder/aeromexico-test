/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../Modal';
import './styles.scss';

const AddCharacterModal = ({ showModal, onClose, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Modal
      show={showModal}
      onClose={onClose}
      title='Agregar un personaje'
    >
      <form className='AddingForm' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name' className='AddingForm__label'>
          <p>Nombre</p>
          <input
            id='name'
            type='text'
            className='input'
            {...register('name', { required: true })}
          />
        </label>
        <label htmlFor='birthday' className='AddingForm__label'>
          <p>Cumpleaños</p>
          <input
            type='date'
            id='birthday'
            className='input'
            {...register('dateOfBirth', { required: true })}
          />
        </label>
        <label htmlFor='eyeColour' className='AddingForm__label'>
          <p>Color de ojos</p>
          <input
            type='text'
            id='eyeColour'
            className='input'
            {...register('eyeColour', { required: true })}
          />
        </label>
        <label htmlFor='hairColour' className='AddingForm__label'>
          <p>Color de pelo</p>
          <input
            type='text'
            id='hairColour'
            className='input'
            {...register('hairColour', { required: true })}
          />
        </label>
        <div className='AddingForm__radio'>
          <p>Género</p>
          <label htmlFor='' className='AddingForm__radio--options'>
            <input
              checked
              type='radio'
              value='female'
              {...register('gender', { required: true })}
            />
            <p>Mujer</p>
          </label>
          <label htmlFor='' className='AddingForm__radio--options'>
            <input
              type='radio'
              value='male'
              {...register('gender', { required: true })}
            />
            <p>Hombre</p>
          </label>
        </div>
        <div className='AddingForm__radio'>
          <p>Posición</p>
          <label htmlFor='' className='AddingForm__radio--options'>
            <input
              checked
              type='radio'
              value='student'
              {...register('position', { required: true })}
            />
            <p>Estudiante</p>
          </label>
          <label htmlFor='' className='AddingForm__radio--options'>
            <input
              type='radio'
              value='staff'
              {...register('position', { required: true })}
            />
            <p>Staff</p>
          </label>
        </div>
        <label htmlFor='image' className='AddingForm__file'>
          <p>Fotografía (input type file)</p>
          <input
            id='image'
            type='file'
            accept='.jpg, .png, .jepg'
            {...register('image')}
          />
        </label>
        <button type='submit' className='AddingForm__button btn-primary'>
          Guardar
        </button>
      </form>
    </Modal>
  );
};

export default AddCharacterModal;
