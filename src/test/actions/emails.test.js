import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setEmails, startSetEmails } from '../../actions/emails';
import emails from '../fixtures/emails';
/* eslint-env jest */

const createMockStore = configureMockStore([thunk]);

test('should setup setEmailsaction object with data', () => {
  const action = setEmails(emails);
  expect(action).toEqual({
    type: 'SET_EMAILS',
    emails
  });
});

test('should fetch the expenses from endpoint', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetEmails()).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toEqual('SET_EMAILS');
    done();
  });
});
