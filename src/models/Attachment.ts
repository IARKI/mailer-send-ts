export class Attachment {
  content: string;
  fileName: string;
  // id?: string;

  constructor(content: string, fileName: string) {
    this.content = content;
    this.fileName = fileName;
    // this.id = id;
  }
}
