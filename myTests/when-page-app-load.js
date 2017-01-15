'use strict';

describe('when my angular application loaded', function () {
    beforeEach(function () {
        browser.get('index.html');
    });

    it('should automatically redirect to root', function () {
        //browser.get('index.html');
        let url = browser.getLocationAbsUrl();
        expect(url).toMatch("");
    });

    it('should have title My 1st AngularJS Application', function () {
        //browser.get('index.html');
        let title = browser.getTitle();
        expect(title).toMatch("My 1st AngularJS Application");
    });

    it('shoult have main menu block', function () {
        //browser.get('index.html');
        let EC = protractor.ExpectedConditions;
        let menuComponent = element(by.tagName('menu-component'));
        browser.wait(EC.presenceOf(menuComponent), 5000);
    });

    it('shoult have 3 menu items', function () {
        //browser.get('index.html');
        let menuComponentCnt = element.all(by.xpath('.//div[@class="btn-group ng-scope"]')).count();
        expect(menuComponentCnt).toBe(3);
    });

    it('3d menu item should have name - Личный кабинет', function () {
        //browser.get('index.html');
        let myAccountMenu = element(by.cssContainingText('div', 'Личный кабинет'));
        expect(myAccountMenu.isDisplayed()).toBe(true);
    });
});

