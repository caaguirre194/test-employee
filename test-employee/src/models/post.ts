export class Post {
  constructor(userId = 0, id = 0, title = '', body = '') {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }

  userId: number;
  id: number;
  title: String;
  body: String;
}
