var app = angular.module("ProductManagement", []);

//Controller Part
app.controller("ProductManagementController", function ($scope, $http) {

    //Initialize page with default data which is blank in this example
    $scope.products = [];
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.form = {
        id: -1,
        category: "",
        description: "",
        price: "",
        image: "",
        title: "",
        rating: {}
    };

    //Now load the data from server
    _refreshPageData();

    $scope.pagedProducts = function () {
        var start = $scope.currentPage * $scope.pageSize;
        return $scope.products.slice(start, start + $scope.pageSize);
    };

    $scope.numberOfPages = function () {
        return Math.ceil($scope.products.length / $scope.pageSize);
    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.numberOfPages() - 1) {
            $scope.currentPage++;
        }
    };


    //HTTP POST/PUT methods for add/edit employee
    $scope.submitProduct = function () {
        var method = "";
        var url = "";

        if ($scope.form.id == -1) {
            method = "POST"; // 新增
            url = 'https://fakestoreapi.com/products';
        } else {
            method = "PUT"; // 修改
            url = 'https://fakestoreapi.com/products/' + $scope.form.id;
        }

        $http({
            method: method,
            url: url,
            data: angular.toJson($scope.form),
            headers: { 'Content-Type': 'application/json' }
        }).then(_success, _error);
    };



    $scope.removeProduct = function (product) {
        $http({
            method: 'DELETE',
            url: 'https://fakestoreapi.com/products/' + product.id
        }).then(_success, _error);
    };


    $scope.editProduct = function (product) {
        $scope.form.category = product.category;
        $scope.form.title = product.title;
        $scope.form.description = product.description;
        $scope.form.price = product.price;
        $scope.form.rating = product.rating;
        $scope.form.image = product.image;
        $scope.form.id = product.id;
    };


    /* Private Methods */
    function _refreshPageData() {
        $http({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        }).then(function successCallback(response) {
            $scope.products = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }


    function _success(response) {
        _refreshPageData(); // 重新讀取資料
        _clearForm();       // 清除表單
    }

    function _error(response) {
        console.log(response.statusText);
    }

    function _clearForm() {
        $scope.form = {
            id: -1,
            category: "",
            title: "",
            description: "",
            price: "",
            rating: "",
            image: ""
        };
    }

}

);



