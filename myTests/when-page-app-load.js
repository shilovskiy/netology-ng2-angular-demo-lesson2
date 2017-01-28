'use strict';

var appPageClass = require('./Pages/AppPage');


describe('when my angular application loaded', function () {
    var appPage = new appPageClass('index.html');

    beforeEach(function () {
        appPage.get();
        //browser.get('index.html');

    });

    it('should automatically redirect to root', function () {

        expect(appPage.getLocationAbsUrl).toMatch("");

    });

    it('should have title My 1st AngularJS Application', function () {
        var title = 'My 1st AngularJS Application';
        expect(appPage.getPageTitle()).toMatch(title);
    });

    it('3d menu item should have name - Личный кабинет', function () {
        expect(appPage.myAccountMenu.isDisplayed()).toBe(true);
    });


    it('shoult have main menu block', function () {

        let EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(appPage.menuComponent), 5000);
    });

    it('shoult have 3 menu items', function () {
        expect(appPage.menuComponentCnt).toBe(3);
    });


});

