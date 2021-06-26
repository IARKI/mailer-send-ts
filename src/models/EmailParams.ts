import { Recipient } from "./Recipient";
import { Sender } from "./Sender";
import { Attachment } from "./Attachment";

export class EmailParams {
  from: Sender;
  to: Array<Recipient>;
  cc?: Array<Recipient>;
  bcc?: Array<Recipient>;
  replyTo?: Recipient;
  subject: string;
  text: string;
  html: string;
  attachments?: Array<Attachment>;
  templateId?: string;
  tags?: Array<string>;
  variables?: Array<Variable>;
  personalization?: Array<Personalization>;

  constructor(config?: any) {
    this.from = config?.from;
    this.to = config?.to;
    this.cc = config?.cc;
    this.bcc = config?.bcc;
    this.replyTo = config?.replyTo;
    this.subject = config?.subject;
    this.text = config?.text;
    this.html = config?.html;
    this.attachments = config?.attachments;
    this.templateId = config?.templateId;
    this.tags = config?.tags;
    this.variables = config?.variables;
    this.personalization = config?.personalization;
  }
}


export interface Variable {
  email: string;
  substitutions: Array<VariableSubstitution>;
}

export interface VariableSubstitution {
  var: string;
  value: string;
}

export interface Personalization {
  email: string;
  data: {
    [key: string]: string;
  }
}
