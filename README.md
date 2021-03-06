<a href="https://www.mailersend.com"><img src="https://www.mailersend.com/images/logo.svg" width="200px"/></a>

# Typescript MailerSend library for NodeJS

![GitHub top language](https://img.shields.io/github/languages/top/IARKI/mailer-send-ts) ![NPM](https://img.shields.io/npm/l/mailer-send-ts) ![npm](https://img.shields.io/npm/v/mailer-send-ts)

### For official javascript library please visit <a href="https://github.com/mailersend/mailersend-nodejs">HERE</a>

### For response Body, Headers and Status Codes please visit <a href="https://developers.mailersend.com/">Official API Docs</a>

### Supported APIs

### Activity

- [X] Get a list of activities

### Analytics

- [ ] Analytics by date
- [ ] Opens by country
- [ ] Opens by user-agent name
- [ ] Opens by reading environment

### Domains

- [X] Get a list of domains
- [X] Get a single domain
- [X] Add domain
- [X] Delete a domain
- [X] Get recipients for a domain
- [X] Update domain settings
- [X] Get DNS Records
- [X] Verify Domain

### Email

- [X] Send an email

### Messages

- [X] Get a list of messages
- [X] Get info for a single message

### Recipients

- [X] Get recipients
- [X] Get a single recipient
- [X] Delete a recipient
- [X] Get recipients from a suppression list
- [X] Add recipients to a suppression list
- [X] Delete recipients from a suppression list
- [X] Hard Bounces
- [X] Spam Complaints
- [X] Unsubscribes

### Templates
 - [ ] Get templates
 - [ ] Get a single template
 - [ ] Delete a template

### Tokens

- [X] Create a token
- [X] Update a token
- [X] Delete a token

### Webhooks

- [ ] Webhooks overview
- [ ] List webhooks
- [ ] Get a webhook
- [ ] Create a webhook
- [ ] Update a webhook
- [ ] Delete a webhook

# Installation

## Setup

```bash
npm install mailer-send-ts --S
```

# Usage

## Init api key

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });
```

## Email

<a href="https://developers.mailersend.com/api/v1/email.html">API Documentation</a>

### Send an email

```typescript
import { MailerSend, EmailParams, Sender, Recipient } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const sentFrom = new Sender("your@domain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];


const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setSubject("Your subject")
  .setText("Hello world!")
  .setHtml("<b>Hello world!</b>");

const response = await mailerSend.email.send(emailParams);
```

### Add CC, BCC recipients

```typescript
import { MailerSend, EmailParams, Sender, Recipient } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const sentFrom = new Sender("your@domain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];
const recipientsCC = [
  new Recipient("your_cc@client.com", "Your CC Client")
];
const recipientsBcc = [
  new Recipient("your_bcc@client.com", "Your BCC Client")
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setCc(recipientsCC)
  .setBcc(recipientsBcc)
  .setSubject("Your subject")
  .setText("Hello world!")
  .setHtml("<b>Hello world!</b>");

const response = await mailerSend.email.send(emailParams);
```

### Send a template-based email

```typescript
import { MailerSend, EmailParams, Sender, Recipient } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const sentFrom = new Sender("your@domain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setSubject("Your subject")
  .setTemplateId("your_template_id");

const response = await mailerSend.email.send(emailParams);
```

### Advanced personalization

```typescript
import { MailerSend, EmailParams, Sender, Recipient } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const sentFrom = new Sender("your@domain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const personalization = [
  {
    email: "your@client.com",
    data: {
      test: 'Test Value'
    },
  }
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setSubject("Subject, {{ test }}")
  .setText("This is the text content, {{ test }}")
  .setHtml("This is the HTML content, {{ test }}");

const response = await mailerSend.email.send(emailParams);
```

### Simple personalization

```typescript
import { MailerSend, EmailParams, Sender, Recipient } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const sentFrom = new Sender("your@domain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const variables = [
  {
    email: "your@client.com",
    substitutions: [
      {
        var: 'test',
        value: 'Test Value'
      }
    ],
  }
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setSubject("Subject, {$test}")
  .setHtml("This is the HTML content, {$test}")
  .setText("This is the text content, {$test}");

const response = await mailerSend.email.send(emailParams);
```

### Send email with attachment

```typescript
const fs = require('fs');
import { MailerSend, EmailParams, Sender, Recipient, Attachment } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const sentFrom = new Sender("your@domain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const attachments = [
  new Attachment(fs.readFileSync('/path/to/file.pdf', { encoding: 'base64' }), 'file.pdf')
]

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setSubject("Subject")
  .setHtml("This is the HTML content")
  .setText("This is the text content")
  .setAttachments(attachments);

mailerSend.email.send(emailParams);
```

## Activity

<a href="https://developers.mailersend.com/api/v1/activity.html">API Documentation</a>

### Get a list of activities

```typescript
import { ActivityEventType, ActivityQueryParams, MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const queryParams: ActivityQueryParams = {
  limit: 10, // Default 25.Min 10, Max 50
  page: 2,
  date_from: 1443651141, // Format: 1443651141
  date_to: 1443651141, // Format: 1443651141
  event: [ActivityEventType.SENT, ActivityEventType.SOFT_BOUNCED, ...]
}

// Query params are not required
const activities = await mailerSend.activity.domain("your_domain_id", queryParams);
```

## Messages

<a href="https://developers.mailersend.com/api/v1/messages.html">API Documentation</a>

### Get a list of messages

```typescript
import { MailerSend, MessageQueryParams } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const queryParams: MessageQueryParams = {
  limit: 10, // Default 25.Min 10, Max 50
  page: 2
}

// Query params are not required
const messages = await mailerSend.message.list(queryParams);
```

### Get single message

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const message = await mailerSend.message.single("your_message_id");
```

## Domains

<a href="https://developers.mailersend.com/api/v1/domains.html">API Documentation</a>

### Create domain

```typescript
import { MailerSend, Domain } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const domain = new Domain("mydomain.com", "rp_subdomain", "ct_subdomain", "ir_subdomain");

const response = await mailerSend.domain.create(domain);
```

### Get a list of domains

```typescript
import { MailerSend, DomainQueryParams } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const queryParams: DomainQueryParams = {
  limit: 10, // Default 25.Min 10, Max 50
  page: 2,
  verified: true // Not required
}
// Query params are not required
const domains = await mailerSend.domain.list(queryParams);
```

### Get a single domain

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const domain = await mailerSend.domain.single("your_domain_id");
```

### Get recipients for a domain

```typescript
import { MailerSend, DomainRecipientsQueryParams } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const queryParams: DomainRecipientsQueryParams = {
  limit: 10, // Default 25.Min 10, Max 50
  page: 2
}

// Query params are not required
const recipients = await mailerSend.domain.recipients("your_domain_id", queryParams);
```

### Delete a domain

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const response = await mailerSend.domain.delete("your_domain_id");
```

### Update domain settings

```typescript
import { MailerSend, DomainSettings } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const domainUpdates: DomainSettings = {
  send_paused: true,
  track_clicks: true,
  track_opens: true,
  track_unsubscribe: true,
  track_unsubscribe_html: "<p>Click here to <a href=\"{$unsubscribe}\">unsubscribe<\/a><\/p>",
  track_unsubscribe_plain: "Click here to unsubscribe: {$unsubscribe}",
  track_content: true,
  custom_tracking_enabled: true,
  custom_tracking_subdomain: "email"
}

const response = await mailerSend.domain.updateSettings("your_domain_id", domainUpdates);
```
### Get DNS Records

```typescript
import { MailerSend, DomainSettings } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const dns = await mailerSend.domain.dns("your_domain_id");
```

### Verify a domain

```typescript
import { MailerSend, DomainSettings } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const dns = await mailerSend.domain.dns("your_domain_id");
```

## Recipients

<a href="https://developers.mailersend.com/api/v1/recipients.html">API Documentation</a>

### Get recipients

```typescript
import { MailerSend, RecipientsQueryParams } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const queryParams: RecipientsQueryParams = {
  limit: 10, // Default 25.Min 10, Max 50
  page: 2,
  domain_id: "your_domain_id" // not required
}

// Query params are not required
const recipients = await mailerSend.recipient.list(queryParams);
```

### Get a single recipient

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const recipient = await mailerSend.recipient.single("your_recipient_id");
```

### Delete a recipient

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const response = await mailerSend.recipient.delete("your_recipient_id");
```

### Get recipients from a suppression list

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const queryParams: RecipientsQueryParams = {
  limit: 10, // Default 25.Min 10, Max 50
  page: 2,
  domain_id: "your_domain_id" // not required
}
// Query params are not required
const blockList = await mailerSend.recipient.blockList(queryParams);
```

### Add recipients to a suppression list

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const recipient: BlockListRecipient = {
  domain_id: "83gwk2j7zqz1nxyd", // not required
  recipients: ["test@example.com"], // If patterns is not defined, this property is required.
  patterns: [".*@example.com"] // If recipients is not defined, this property is required.
};

const blocked = await mailerSend.recipient.blockRecipient(recipient);
```

### Delete recipients from a suppression list

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

// To delete specific entries
const ids = ["60f198790542d97fb66dfe52", "60f198790542d97fb66dfe53"]
const removed = await mailerSend.recipient.delBlockListRecipients(ids);
```

### Delete all recipients from a suppression list

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const removed = await mailerSend.recipient.delAllBlockListRecipients();
```

### Get hard bounced recipients

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const queryParams: RecipientsQueryParams = {
  limit: 10, // Default 25.Min 10, Max 50
  page: 2,
  domain_id: "your_domain_id" // not required
};
// Query params are not required
const hardBounceList = await mailerSend.recipient.hardBounceList(queryParams);
```

### Get recipients who have spam complained

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const queryParams: RecipientsQueryParams = {
  limit: 10, // Default 25.Min 10, Max 50
  page: 2,
  domain_id: "your_domain_id" // not required
};

// Query params are not required
const spamComplaintsList = await mailerSend.recipient.spamComplaintsList(queryParams);
```

## Tokens
<a href="https://developers.mailersend.com/api/v1/tokens.html">API Documentation</a>


### Create a token

```typescript
import { MailerSend, Token, TokenScopeType } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const token = new Token("token_name", "domain_id", [TokenScopeType.EMAIL_FULL, TokenScopeType.WEBHOOKS_FULL, ...scopes])

const response = await mailerSend.token.create(token);
```

### Update a token

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const response = await mailerSend.token.updateSettings("your_token_id", {status: "pause"});
```


### Delete a token

```typescript
import { MailerSend } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const response = await mailerSend.token.delete("your_token_id");
```
