/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from './index';

describe('<Loading />', () => {
  test('Component render', () => {
    const { getByText } = render(
      <Loading />,
    );

    expect(getByText(/cargando/i)).toBeTruthy();
  });
});
