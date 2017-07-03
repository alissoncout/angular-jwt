(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller(AuthenticationService, $location) {
        var vm = this;

        vm.logout = logout;

        initController();

        function initController() {
        }

        function logout() {
            AuthenticationService.Logout();
            $location.path('/login');
        };
    }

})();