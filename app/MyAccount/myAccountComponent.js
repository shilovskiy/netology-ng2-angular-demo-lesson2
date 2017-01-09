/**
 * Created by Олег Шиловский on 05.01.2017.
 */

'use strict';

angular
    .module('myApp')
    .component('myAccountComponent', {
        templateUrl: 'MyAccount/myAccountTpl.html',
        controller: function(MyAccountStore) {
            this.Account = MyAccountStore.getAccount();
        }
    });
