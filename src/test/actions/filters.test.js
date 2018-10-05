import { setTextFilter } from '../../actions/filters';
/* eslint-env jest */

test('should generate setTextFilter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate setTextFilter action object with provided text', () => {
  const text = 'Williamson';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});
