'use strict';

/**
 * @ngdoc directive
 * @name kleineHeldenApp.directive:cards
 * @description
 * # cards
 */
angular.module('kleineHeldenApp')
    .directive('khCards', function($timeout, $window) {
        return {
            templateUrl: 'views/cards.html',
            restrict: 'E',
            scope: {
                heroes: '='
            },
            link: function postLink(scope, element, attrs) {


                angular.element($window).bind('resize', function() {
                    scope.getHeight();
                });

                scope.getHeight = function() {

                    scope.width = 0;
                    scope.height = element.prop('offsetHeight');

                    $timeout(init, false);

                    //Initialization
                    function init() {

                        let result = element[0].getElementsByClassName('theImage');
                        for (var i = 0; i < 1; i++) {
                            scope.height = result[i].scrollHeight;
                        }

                    }


                };







                scope.$watch('heroes', () => {
                    $timeout(function() { scope.getHeight() }, 1000);

                });







            }
        };
    });
