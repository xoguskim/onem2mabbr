// public/core.js
var onem2mAbbr = angular.module('onem2mAbbr', []);
onem2mAbbr.controller('mainController', mainController);

var apiPrefix = '/onem2mdoc';
// var apiPrefix = '';
function mainController($scope, $http) {
  $scope.formData = {};

  // when landing on the page, get all todos and show them
  $http.get(apiPrefix + '/api/abbr')
    .success(function(data) {
      $scope.abbrList = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  // when submitting the add form, send the text to the node API
  $scope.putWord = function() {
    $http.put(apiPrefix + '/api/abbr', $scope.formData)
      .success(function(data) {
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.abbrList = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // delete a todo after checking it
  $scope.deleteAbbr = function(word) {
    $http.delete(apiPrefix + '/api/abbr/' + word)
      .success(function(data) {
        $scope.abbrList = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}