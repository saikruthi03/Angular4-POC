import { RbarUiPage } from './app.po';

describe('rbar-ui App', () => {
  let page: RbarUiPage;

  beforeEach(() => {
    page = new RbarUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
