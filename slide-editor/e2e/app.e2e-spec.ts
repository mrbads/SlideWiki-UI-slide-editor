import { SlideEditorPage } from './app.po';

describe('slide-editor App', () => {
  let page: SlideEditorPage;

  beforeEach(() => {
    page = new SlideEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
