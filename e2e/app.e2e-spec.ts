import { CookingSitePage } from './app.po';

describe('cooking-site App', function() {
  let page: CookingSitePage;

  beforeEach(() => {
    page = new CookingSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
