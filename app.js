
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
        $scope.productsData = response.data.products;
    }, function onError(response) {
        $scope.myError = response.statusText;
    });
    $scope.addToCart = function (id) {
        console.log(id);
    };
};

app.controller("productsController", productsController);
app.controller("checkoutController", checkoutController);