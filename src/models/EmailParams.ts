import { Recipient } from "./Recipient";
import { Sender } from "./Sender";
import { Attachment } from "./Attachment";
import { Personalization, Variable } from "../modules/Email.module";

export class EmailParams {
  from: Sender;
  to: Recipient[];
  cc?: Recipient[];
  bcc?: Recipient[];
  reply_to?: Recipient; // tslint:disable-line
  subject: string;
  text: string;
  html: string;
  attachments?: Attachment[];
  template_id?: string; // tslint:disable-line
  tags?: string[];
  variables?: Variable[];
  personalization?: Personalization[];

  constructor(config?: any) {
    this.from = config?.from;
    this.to = config?.to;
    this.cc = config?.cc;
    this.bcc = config?.bcc;
    this.reply_to = config?.reply_to;
    this.subject = config?.subject;
    this.text = config?.text;
    this.html = config?.html;
    this.attachments = config?.attachments;
    this.template_id = config?.template_id;
    this.tags = config?.tags;
    this.variables = config?.variables;
    this.personalization = config?.personalization;
  }

  setFrom(from: Sender): EmailParams {
    this.from = from;
    return this;
  }

  setTo(to: Recipient[]): EmailParams {
    this.to = to;
    return this;
  }

  setCc(cc: Recipient[]): EmailParams {
    this.cc = cc;
    return this;
  }

  setBcc(bcc: Recipient[]): EmailParams {
    this.bcc = bcc;
    return this;
  }

  setReplyTo(replyTo: Recipient): EmailParams {
    this.reply_to = replyTo;
    return this;
  }

  setSubject(subject: string): EmailParams {
    this.subject = subject;
    return this;
  }

  setText(text: string): EmailParams {
    this.text = text;
    return this;
  }

  setHtml(html: string): EmailParams {
    this.html = html;
    return this;
  }

  setAttachments(attachments: Attachment[]): EmailParams {
    this.attachments = attachments;
    return this;
  }

  setTemplateId(id: string): EmailParams {
    this.template_id = id;
    return this;
  }

  setTags(tags: string[]): EmailParams {
    this.tags = tags;
    return this;
  }

  setVariables(variables: Variable[]): EmailParams {
    this.variables = variables;
    return this;
  }

  setPersonalization(personalization: Personalization[]): EmailParams {
    this.personalization = personalization;
    return this;
  }
}
