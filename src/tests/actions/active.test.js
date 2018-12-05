import { setActiveEmail } from '../../actions/active';
/* eslint-env jest */

test('should set activeEmail when email passed thru', () => {
  const activeEmail = 'alan@email.com';
  const action = setActiveEmail(activeEmail);
  expect(action).toEqual({
    type: 'SET_ACTIVE_EMAIL',
    activeEmail
  });
});
