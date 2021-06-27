import { EmailParams } from '../../models';

describe('EmailParams', () => {
  test('Constructor', () => {
    const params = new EmailParams({
      from: { email: 'from@email.com', name: 'FromSender' },
      to: [{ email: 'to@email.com', name: 'ToRecipient' }],
      cc: [{ email: 'cc@email.com', name: 'CCRecipient' }],
      bcc: [{ email: 'bcc@email.com', name: 'BCCRecipient' }],
      reply_to: { email: 'reply@email.com', name: 'ReplyRecipient' },
      subject: 'Some subject',
      text: 'Some text',
      html: '<b>Some html</b>',
      attachments: [{ content: 'base64', fileName: 'name', id: 'some_id' }],
      template_id: 'some_template_id',
      tags: ['tag1', 'tag2'],
      variables: [{ email: 'to@email.com', substitutions: [{ var: 'var_1', value: 'value_1' }] }],
      personalization: [{ email: 'cc@email.com', data: { key1: 'value_1' } }],
    });
    expect(params?.from?.email).toBe('from@email.com');
    expect(params?.from?.name).toBe('FromSender');
    expect(Array.isArray(params.to)).toBe(true);
    expect(params?.to.length).toBe(1);
    expect(Array.isArray(params?.cc)).toBe(true);
    expect(params?.cc?.length).toBe(1);
    expect(Array.isArray(params?.bcc)).toBe(true);
    expect(params?.bcc?.length).toBe(1);
    expect(params?.reply_to?.email).toBe('reply@email.com');
    expect(params?.reply_to?.name).toBe('ReplyRecipient');
    expect(params?.subject).toBe('Some subject');
    expect(params?.html).toBe('<b>Some html</b>');
    expect(params?.template_id).toBe('some_template_id');
    expect(Array.isArray(params?.attachments)).toBe(true);
    expect(params?.attachments?.length).toBe(1);
    expect(Array.isArray(params?.tags)).toBe(true);
    expect(params?.tags?.length).toBe(2);
    expect(Array.isArray(params?.variables)).toBe(true);
    expect(params?.variables?.length).toBe(1);
    expect(Array.isArray(params?.personalization)).toBe(true);
    expect(params?.personalization?.length).toBe(1);
  });
  test('Setters', () => {
    const params = new EmailParams()
      .setFrom({ email: 'from@email.com', name: 'FromSender' })
      .setTo([{ email: 'to@email.com', name: 'ToRecipient' }])
      .setCc([{ email: 'cc@email.com', name: 'CCRecipient' }])
      .setBcc([{ email: 'bcc@email.com', name: 'BCCRecipient' }])
      .setReplyTo({ email: 'reply@email.com', name: 'ReplyRecipient' })
      .setSubject('Some subject')
      .setText('Some text')
      .setHtml('<b>Some html</b>')
      .setAttachments([{ content: 'base64', fileName: 'name' }])
      .setTemplateId('some_template_id')
      .setTags(['tag1', 'tag2'])
      .setVariables([{ email: 'to@email.com', substitutions: [{ var: 'var_1', value: 'value_1' }] }])
      .setPersonalization([{ email: 'cc@email.com', data: { key1: 'value_1' } }]);
    expect(params?.from?.email).toBe('from@email.com');
    expect(params?.from?.name).toBe('FromSender');
    expect(Array.isArray(params.to)).toBe(true);
    expect(params?.to.length).toBe(1);
    expect(Array.isArray(params?.cc)).toBe(true);
    expect(params?.cc?.length).toBe(1);
    expect(Array.isArray(params?.bcc)).toBe(true);
    expect(params?.bcc?.length).toBe(1);
    expect(params?.reply_to?.email).toBe('reply@email.com');
    expect(params?.reply_to?.name).toBe('ReplyRecipient');
    expect(params?.subject).toBe('Some subject');
    expect(params?.html).toBe('<b>Some html</b>');
    expect(params?.template_id).toBe('some_template_id');
    expect(Array.isArray(params?.attachments)).toBe(true);
    expect(params?.attachments?.length).toBe(1);
    expect(Array.isArray(params?.tags)).toBe(true);
    expect(params?.tags?.length).toBe(2);
    expect(Array.isArray(params?.variables)).toBe(true);
    expect(params?.variables?.length).toBe(1);
    expect(Array.isArray(params?.personalization)).toBe(true);
    expect(params?.personalization?.length).toBe(1);
  });
});
