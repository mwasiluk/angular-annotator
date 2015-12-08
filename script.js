angular.module('app', ['mwAnnotator'])
    .controller("AnnotatorController", function($scope){
        $scope.filterOptions = {
            filters: [
                {
                    label: 'Quote',
                    property: 'quote'
                }
            ]
        }
    });