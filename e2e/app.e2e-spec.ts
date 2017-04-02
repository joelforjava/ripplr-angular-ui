import { RipplrAngularUiPage } from './app.po';

describe('ripplr-angular-ui App', () => {
  let page: RipplrAngularUiPage;

  beforeEach(() => {
    page = new RipplrAngularUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
