var app = angular.module("StoreManagement", []);
     
//Controller Part
app.controller("StoreManagementController", function($scope, $http) {

  
  $scope.products = [];
  $scope.filterProducts=[];
  $scope.form = {
    id : -1,
    category : "",
    description : "",   
    image:"",
    price:"",
    title:"",
    rating:{}
  };

  //Now load the data from server
  _refreshPageData();

  //HTTP POST/PUT methods for add/edit employee
  $scope.submitStore = function() {
    var method = "";
    var url = "";
    if ($scope.form.id == -1) {
      //Id is absent so add employee - POST operation
      method = "POST";
      url = 'http://localhost:8080/fakestore';
    } else {
      //If Id is present, it's edit operation - PUT operation
      method = "PUT";
      url = 'http://localhost:8080/fakestore/' + $scope.form.id;
    }

    $http({
      method : method,
      url : url,
      data : angular.toJson($scope.form),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then( _success, _error );  
   
    $("#productTB").hide();
  };

  //HTTP DELETE- delete employee by Id
  $scope.removeProduct = function(product) {
    $http({
        method : 'DELETE',
        url : 'http://localhost:8080/fakestore/' + product.id
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
    $("#productTB").show();
  };
  
  $scope.myClickFilter=function(myselect){
    var selected=myselect.trim();
    var myarray=$scope.products;    
    $scope.filterProducts=myarray.filter(p=>p.category==selected);
  }
  /* Private Methods */
  //HTTP GET- get all employees collection
  function _refreshPageData() {
    $http({
      method : 'GET',
      //url : 'https://fakestoreapi.com/products'
      url : 'http://localhost:8080/fakestore'
    }).then(function successCallback(response) {
      $scope.products = response.data;
      $scope.filterProducts=response.data;
      var categoryData=[];
      response.data.forEach(c =>{
        if(categoryData.indexOf(c.category)<0)
             categoryData.push(c.category);
      });
      $scope.mycategory=categoryData;
      console.log("category:"+categoryData);
    }, function errorCallback(response) {
      console.log(response.statusText);
    });
  }

  function _success(response) {
    _refreshPageData();
    _clearForm()
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
});

