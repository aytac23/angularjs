var app = angular.module('myApp', []);
app.controller('monTableau',function ($scope) {

    $scope.xs=[
        {id:'1',
        course:'kean',
        marche:'km',
        velo:'km',
        autre:'kmx'}
    ];

$scope.ajouter =function () {
    $scope.xs.push({

        course:$scope.Aajouter

    })
};

    $scope.xs.course="";
});
