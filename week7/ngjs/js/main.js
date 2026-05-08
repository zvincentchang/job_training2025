
function fetchProducts($scope, $http){
    //Initialize page with default data which is blank in this example
    $scope.products = [];
    $scope.form = {
      id : -1,
      category : "",
      description : "",
      price : "",
      images:"",
      price:"",
      title:"",
      rating:{}
    };
 
    //Now load the data from server
    _refreshPageData();
 
    //HTTP POST/PUT methods for add/edit product
    $scope.submitProduct = function() {
 
      var method = "";
      var url = "";
      if ($scope.form.id == -1) {
        //Id is absent so add product - POST operation
        method = "POST";
        url = 'https://fakestoreapi.com/products';
      } else {
        //If Id is present, it's edit operation - PUT operation
        method = "PUT";
        url = 'https://fakestoreapi.com/products/' + $scope.form.id;
      }
 
      $http({
        method : method,
        url : url,
        data :  angular.toJson($scope.form)  ,
         headers : {
          'Content-Type' : 'application/json'
        }          
      }).then( _success, _error );
    };
 
    //HTTP DELETE- delete employee by Id
    $scope.removeProduct = function(product) {
      $http({
        method : 'DELETE',
        url : 'https://fakestoreapi.com/products/' + product.id
      }).then(_success, _error);
    };

    //In case of edit employee, populate form with employee data
    $scope.editProduct = function(product) {
      $scope.form.category = product.category;
      $scope.form.title = product.title;
      $scope.form.description = product.description;
      $scope.form.price = product.price;
      $scope.form.rating = product.rating;
      $scope.form.image = product.image;
      $scope.form.id = product.id;
    };
 
    /* Private Methods */
    //HTTP GET- get all employees collection
    function _refreshPageData() {
      $http({
        method : 'GET',
        url : 'https://fakestoreapi.com/products'
      }).then(function successCallback(response) {
        $scope.products = response.data;
      }, function errorCallback(response) {
        console.log(response.statusText);
      });
    }
 
    function _success(response) {
      _refreshPageData();
      _clearForm();
    }
 
    function _error(response) {
      console.log(response.statusText);
       
    }
 
    //Clear the form
    function _clearForm() {
      $scope.form.category = "";
      $scope.form.title = "";
      $scope.form.description = "";
      $scope.form.price = "";
      $scope.form.rating = "";
      $scope.form.image = "";
      $scope.form.id = -1;
    };
}

var app = angular.module("ProductManagement", []);
//Controller Part
app.controller("ProductManagementController", fetchProducts);


 
