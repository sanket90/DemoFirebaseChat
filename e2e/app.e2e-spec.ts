import { DemoFirebaseChatPage } from './app.po';

describe('demo-firebase-chat App', () => {
  let page: DemoFirebaseChatPage;

  beforeEach(() => {
    page = new DemoFirebaseChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
