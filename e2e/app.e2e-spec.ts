import { GuildArenaClientPage } from './app.po';

describe('guild-arena-client App', () => {
  let page: GuildArenaClientPage;

  beforeEach(() => {
    page = new GuildArenaClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
