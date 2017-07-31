import { ArticlesWebsitePage } from './app.po';

describe('articles-website App', () => {
  let page: ArticlesWebsitePage;

  beforeEach(() => {
    page = new ArticlesWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
