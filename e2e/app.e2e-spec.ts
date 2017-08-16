import { UmichIeeePage } from './app.po';

describe('umich-ieee App', () => {
  let page: UmichIeeePage;

  beforeEach(() => {
    page = new UmichIeeePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
