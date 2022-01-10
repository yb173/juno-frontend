import React from 'react';
import renderer from 'react-test-renderer';
import { Spinner } from './Spinner';

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Spinner />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
