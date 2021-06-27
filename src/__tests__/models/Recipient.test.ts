import { Recipient } from '../../models';

test('Recipient', () => {
  const recipient = new Recipient('test@mail.com', 'John');
  expect(recipient.email).toBe('test@mail.com');
  expect(recipient.name).toBe('John');
});
