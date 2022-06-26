/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AddCharacterModal from './index';

describe('<AddCharacterModal />', () => {
  test('Component render', () => {
    const { getByText } = render(
      <AddCharacterModal
        showModal={true}
        onClose={() => {}}
        onSubmit={() => {}}
      />,
    );

    expect(getByText(/nombre/i)).toBeTruthy();
    expect(getByText(/cumpleaños/i)).toBeTruthy();
  });
});
