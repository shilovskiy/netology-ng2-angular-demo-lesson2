'use strict';

describe('when my angular application loaded', function() {


  it('should automatically redirect to root', function() {
    browser.get('index.html');
    let url = browser.getLocationAbsUrl();
    expect(url).toMatch("");
  });

    it('should have title My 1st AngularJS Application', function() {
        browser.get('index.html');
        let title = browser.getTitle();
        expect(title).toMatch("My 1st AngularJS Application");
    });

    it('shoult have main menu block', function () {
      browser.get('index.html');
      var EC = protractor.ExpectedConditions;
      var menuComponent = element(by.tagName('menu-component'));
      browser.wait(EC.presenceOf(menuComponent), 5000);
    });

    it('shoult have 3 menu items', function () {
        browser.get('index.html');
        var menuComponentCnt = element.all(by.xpath('.//div[@class="btn-group ng-scope"]')).count();
        expect(menuComponentCnt).toBe(3);
    });

});


describe('when click on 3d menu item', function () {
    it('should have name - Личный кабинет', function () {
        browser.get('index.html');
        var myAccountMenu = element(by.cssContainingText('div','Личный кабинет'));
        expect(myAccountMenu.isDisplayed()).toBe(true);
    });

    it('should display my account page after click on Личный кабинет', function () {
        browser.get('/');

         var myAccountMenu = element(by.cssContainingText('a','Личный кабинет'));
         myAccountMenu.click();
         browser.driver.sleep(1);
         browser.waitForAngular();
        var myAccounttitle= browser.getLocationAbsUrl();
        expect(myAccounttitle).toMatch('/myaccount');
    });


    it('should display page /myaccount', function () {
        browser.get('#!/myaccount');

        var myAccounttitle= browser.getLocationAbsUrl();
        expect(myAccounttitle).toMatch('/myaccount');
    });
});
