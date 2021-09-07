export class Token {
  name: string;
  domain_id: string;
  scopes: TokenScopeType[];

  constructor(name: string, domainId: string, scopes: TokenScopeType[]) {
    this.name = name;
    this.domain_id = domainId;
    this.scopes = scopes;
  }
}

export enum TokenScopeType {
  EMAIL_FULL = "email_full",
  DOMAINS_FULL = "domains_full",
  ACTIVITY_READ = "activity_read",
  ACTIVITY_FULL = "activity_full",
  ANALYTICS_READ = "analytics_read",
  ANALYTICS_FULL = "analytics_full",
  TOKENS_FULL = "tokens_full",
  WEBHOOKS_FULL = "webhooks_full",
  TEMPLATES_FULL = "templates_full"
}
