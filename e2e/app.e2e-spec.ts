import { SimpleRoutePage } from './app.po';

describe('simple-route App', () => {
  let page: SimpleRoutePage;

  beforeEach(() => {
    page = new SimpleRoutePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
