import { MymovieAppPage } from './app.po';

describe('mymovie-app App', () => {
  let page: MymovieAppPage;

  beforeEach(() => {
    page = new MymovieAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
