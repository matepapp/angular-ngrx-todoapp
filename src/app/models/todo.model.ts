export default class Todo {
  _id: string;
  title: string;
  description: string;
  date: Date;
  status: string;

  static generateMock(): Todo {
    return {
      _id: 'new',
      title: '',
      description: '',
      date: new Date(),
      status: ''
    };
  }

  constructor() {
    this._id = '';
    this.title = '';
    this.description = '';
    this.date = new Date();
    this.status = '';
  }
}
