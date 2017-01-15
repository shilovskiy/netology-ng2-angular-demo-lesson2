/**
 * Created by Олег Шиловский on 05.01.2017.
 */
'use strict';

angular
    .module('myApp')
    .factory('MyAccountStore', function() {

        var account ={
        };

        return {
            getAccount()  {
                console.log('current acc');
                console.log(account);

                return account;
            },
            saveAccount(item) {
                account = {
                    "Name": item.accountName,
                    "Email": item.Email,
                    "PhoneNumber": item.PhoneNumber
                };
                console.log(account);
            }
        };

    });
