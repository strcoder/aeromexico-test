/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Modal from './index';

describe('<Modal />', () => {
  test('Modal shows the title and the children and a close button', () => {
    const handleClose = jest.fn();

    const { getByText } = render(
      <Modal
        show={true}
        title='Titulo'
        onClose={handleClose}
      >
        <p>Prueba</p>
      </Modal>,
    );

    expect(getByText('Titulo')).toBeTruthy();
    expect(getByText('Prueba')).toBeTruthy();

    fireEvent.click(getByText(/cerrar/i));
    fireEvent.click(screen.getByTitle(/cerrar ventana/i));

    expect(handleClose).toHaveBeenCalledTimes(2);
  });
});
