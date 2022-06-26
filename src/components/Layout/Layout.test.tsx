/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './index';

describe('<Layout />', () => {
  test('Component render', () => {
    const { getByText } = render(
      <Layout>
        <div>Children</div>
      </Layout>,
    );

    expect(getByText(/children/i)).toBeTruthy();
  });
});
