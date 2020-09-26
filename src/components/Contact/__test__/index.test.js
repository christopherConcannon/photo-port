import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..'

// configure testing environment
afterEach(cleanup);

describe('ContactForm component renders', () => {
  it('renders', () => {
    render(<ContactForm />)
  })

    // snapshot test
    it('matches snapshot', () => {
      const { asFragment } = render(<ContactForm />);
      // assert value comparison
      expect(asFragment()).toMatchSnapshot();
    })
})

describe('h1 text displays', () => {
  it('inserts text into the h1', () => {
    // Arrange
    const { getByTestId } = render(<ContactForm />);
    // Assert
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    expect(getByTestId('btntag')).toHaveTextContent('Submit');
  })
})


