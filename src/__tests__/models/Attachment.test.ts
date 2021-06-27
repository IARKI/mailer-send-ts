import { Attachment } from '../../models';

test('Attachment', () => {
  const attachment = new Attachment('some_content_base64', 'my_file.doc');
  expect(attachment.content).toBe('some_content_base64');
  expect(attachment.fileName).toBe('my_file.doc');
});
