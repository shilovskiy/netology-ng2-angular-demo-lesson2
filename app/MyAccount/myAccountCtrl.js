/**
 * Created by Олег Шиловский on 05.01.2017.
 */
'use strict';

angular
    .module('myApp')
    .controller('myAccountCtrl', function(MyAccountStore) {

        var vm = this;
        vm.currentAcc = MyAccountStore.getAccount();
        console.log(vm.currentAcc);
        vm.saveCurrentAccount = function(Account) {
            console.log('Ctrl');
            console.log(Account);
            MyAccountStore.saveAccount(Account);
            vm.accountForm.$setPristine();
        };

    });