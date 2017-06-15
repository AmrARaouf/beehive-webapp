import { BeehiveWebappPage } from './app.po';

describe('beehive-webapp App', () => {
  let page: BeehiveWebappPage;

  beforeEach(() => {
    page = new BeehiveWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
