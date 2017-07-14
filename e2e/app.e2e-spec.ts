import { EmailsappPage } from './app.po';

describe('emailsapp App', () => {
  let page: EmailsappPage;

  beforeEach(() => {
    page = new EmailsappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
