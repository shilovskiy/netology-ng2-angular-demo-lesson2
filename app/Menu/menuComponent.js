/**
 * Created by Олег Шиловский on 05.01.2017.
 */
'use strict';

angular
    .module('myApp')
    // .controller('menuCtrl',($scope, $state, $stateParams, MenuService)=>{
    //     var vm = this;
    //
    //     MenuService.getAllMenuItems().then(menudata=>{
    //        vm.menuItems = menudata.data;
    //         console.log(vm.menuItems);
    //     });
    // })
    .component('menuComponent',{
        templateUrl: 'Menu/menu.html',
        controller: function($scope, $state, $stateParams, MenuService) {
            $scope.menuItems = MenuService.getAllMenuItems();
        }
    });
