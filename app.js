
var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/products.html",
            controller: "productsController"
        })
        .when("/checkout", {
            templateUrl: "partials/checkout.html",
            controller: "checkoutController"
        })
        .otherwise({ template: "<h1>Whoops</h1><a href=" / ">Click me to go home</a>" })
});

var checkoutController = function ($scope) {
    $scope.message = "hello from checkout controller";
    $scope.pageClass = "slide";
}

var productsController = function ($scope, $http) {
    $http({

        method: "GET",
        url: "products.json"

    }).then(function onSuccess(response) {
        // Data is retrieved successfully
        $scope.productsData = response.data.products;
    }, function onError(response) {
        // Data not retrieved sucessfully
        // alert(response.statusText);
        $scope.myError = response.statusText;
    });
};

app.controller("productsController", productsController);
app.controller("checkoutController", checkoutController);