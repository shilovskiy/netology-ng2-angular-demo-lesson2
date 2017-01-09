/**
 * Created by Олег Шиловский on 05.01.2017.
 */
angular
    .module('myApp')
    .factory('MenuService', function($http) {
            return {
                getAllMenuItems: function() {
                return [{
                    "menu_id":1,
                    "menu_name":"Список",
                    "menu_sref":"list"
                }
                    ,
                    {
                        "menu_id":2,
                        "menu_name":"Добавить нового",
                        "menu_sref":"createNewPokemon"
                    }
                    ,
                    {
                        "menu_id":3,
                        "menu_name":"Личный кабинет",
                        "menu_sref":"myaccount"
                    }

                ];
                    // var ct = this;
                    // $http.get('data/menu.json').then((menuData)=>{
                    //
                    //     ct.menudata =menuData.data;
                    //
                    //
                    // });
                    // console.log(ct);
                    // return ct ;
                }
            }
        }

    );
