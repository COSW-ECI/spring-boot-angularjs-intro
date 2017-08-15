import { CoswAngularSeedPage } from './app.po';

describe('cosw-angular-seed App', () => {
  let page: CoswAngularSeedPage;

  beforeEach(() => {
    page = new CoswAngularSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
