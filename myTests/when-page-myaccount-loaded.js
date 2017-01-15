/**
 * Created by Олег Шиловский on 15.01.2017.
 */
'use strict';


describe('when click on 3d menu item', function () {

    it('should display my account page after click on Личный кабинет', function () {
        browser.get('/');

        let myAccountMenu = element(by.cssContainingText('a', 'Личный кабинет'));
        myAccountMenu.click();
        browser.driver.sleep(1);
        browser.waitForAngular();
        let myAccounttitle = browser.getLocationAbsUrl();
        expect(myAccounttitle).toMatch('/myaccount');
    });

});

describe('when open page /myaccount', function () {
    it('should display page /myaccount', function () {
        browser.get('#!/myaccount');
        let myAccounttitle = browser.getLocationAbsUrl();
        expect(myAccounttitle).toMatch('/myaccount');
    });

});