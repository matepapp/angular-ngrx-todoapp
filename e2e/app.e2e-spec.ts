import { TodoappAngularNgrxPage } from './app.po';

describe('todoapp-angular-ngrx App', function() {
  let page: TodoappAngularNgrxPage;

  beforeEach(() => {
    page = new TodoappAngularNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
