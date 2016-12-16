import { AngularPerformanceTestPage } from './app.po';

describe('angular-performance-test App', function() {
  let page: AngularPerformanceTestPage;

  beforeEach(() => {
    page = new AngularPerformanceTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
