import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setFocusedRecipient, startSetFocusedRecipient } from '../../actions/recipient';
import emails from '../fixtures/emails';
/* eslint-env jest */

const createMockStore = configureMockStore([thunk]);

test('should setup setFocusedRecipient object with data', () => {
  const recipient = emails[0].from;
  const action = setFocusedRecipient(recipient);
  expect(action).toEqual({
    type: 'SET_FOCUSED_RECIPIENT',
    recipient
  });
});

test('should fetch the recipient data from endpoint', (done) => {
  const store = createMockStore({});
  const recipient = {
    name: 'Jerrell Schroeder',
    company: null,
    email: 'schroeder_jerrell@wolf.name',
    avatar: 'http://robohash.org/dolorumetiure.png?size=300x300'
  };

  store.dispatch(startSetFocusedRecipient(recipient.email)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_FOCUSED_RECIPIENT',
      recipient
    });
    done();
  });
});
