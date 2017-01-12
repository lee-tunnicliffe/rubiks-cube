import { RubiksCubePage } from './app.po';

describe('rubiks-cube App', function() {
  let page: RubiksCubePage;

  beforeEach(() => {
    page = new RubiksCubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
