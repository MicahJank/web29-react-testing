import React from 'react';
import { render } from '@testing-library/react';
import AnimalForm from './AnimalForm';

test('Current Animals Test Species header is appearing', () => {
  // arrange - render the component
  const { getByText } = render(<AnimalForm />);

  // act - no action to take

  // assert - get the text from the DOM and expect it to be in the document
  const headerText = getByText(/current ANIMALS test SPECIES/i);
  expect(headerText).toBeVisible();
});

test('inputs are visible', () => {
  //ARRANGE - set up the testing environment
  const { getByLabelText } = render(<AnimalForm />);

  const result = render(<AnimalForm />);
  console.log(result);

  // ACT
  // NONE. Tapped out.

  // ASSERT
  getByLabelText(/species/i); // getByLabelText throws an exception when it fails -- so you can just use it to check that the input is in the DOM rather than having to say `expect().toBeInDocument()`! 🆒
  getByLabelText(/age/i);
  getByLabelText(/notes/i);
});

test('form submit adds new animals to the list', () => {});
