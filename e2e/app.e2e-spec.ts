import { FinanceWebPage } from './app.po';

describe('finance-web App', () => {
  let page: FinanceWebPage;

  beforeEach(() => {
    page = new FinanceWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
