import { CursoAngula4Page } from './app.po';

describe('curso-angula4 App', () => {
  let page: CursoAngula4Page;

  beforeEach(() => {
    page = new CursoAngula4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
