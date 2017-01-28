/**
 * Created by Олег Шиловский on 26.01.2017.
 */

class AppPage {
    constructor(url) {
        this.url = url;
        this.myAccountMenu = element(by.cssContainingText('div', 'Личный кабинет'));
        this.menuComponent = element(by.tagName('menu-component'));
        this.menuComponentCnt = element.all(by.xpath('.//div[@class="btn-group ng-scope"]')).count();
    }

    get() {
        browser.get(this.url);
    }

    getLocationAbsUrl() {
        return browser.getLocationAbsUrl();

    }

    getPageTitle() {
        return browser.getTitle();
    }

}


module.exports = AppPage;