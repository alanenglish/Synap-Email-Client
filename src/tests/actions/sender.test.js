import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setFocusedSender, startSetFocusedSender } from '../../actions/sender';
import emails from '../fixtures/emails';
/* eslint-env jest */

const createMockStore = configureMockStore([thunk]);

test('should setup setFocusedSender object with data', () => {
  const sender = emails[0].from;
  const action = setFocusedSender(sender);
  expect(action).toEqual({
    type: 'SET_FOCUSED_SENDER',
    sender
  });
});

test('should fetch the sender data from endpoint', (done) => {
  const store = createMockStore({});
  const sender = {
    name: 'Presley Grant',
    company: {
      name: 'Klocko and Sons',
      logo: 'http://www.biz-logo.com/examples/048.gif',
      description: 'Re-contextualized disintermediate open architecture to streamline frictionless markets'
    },
    email: 'grant_presley@breitenberg.info',
    avatar: 'http://robohash.org/providentaspernaturdoloribus.png?size=300x300'
  };

  store.dispatch(startSetFocusedSender(sender.email)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_FOCUSED_SENDER',
      sender
    });
    done();
  });
});
