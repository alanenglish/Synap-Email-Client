/* eslint-env jest */

export default [{
  id: '1',
  from: 'email@gmail.com',
  to: 'synap@email.com',
  cc: ['test@email.com', 'sender@gmail.com'],
  subject: 'First Email',
  body: 'This is the body of the first email.',
  tags: []
}, {
  id: '2',
  from: 'test@email.com',
  to: 'alan@gmail.com',
  cc: ['from@email.com', 'to@gmail.com'],
  subject: 'Second Email',
  body: 'This is the body of the second email.',
  tags: []
}, {
  id: '3',
  from: 'woohoo@gmail.com',
  to: 'likewhoa@test.com',
  cc: ['rando@email.com', 'morerando@email.com'],
  subject: 'Third Email',
  body: 'This is the body of the third email.',
  tags: []
}];
