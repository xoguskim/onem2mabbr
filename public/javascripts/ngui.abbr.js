// public/core.js
var onem2mAbbr = angular.module('onem2mAbbr', []);
onem2mAbbr.controller('mainController', mainController);

function mainController($scope, $http) {
  $scope.formData = {};

  // when landing on the page, get all todos and show them
  $http.get('/onem2mdoc/api/abbr')
    .success(function(data) {
      $scope.abbrList = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  // when submitting the add form, send the text to the node API
  $scope.putWord = function() {
    $http.put('/onem2mdoc/api/abbr', $scope.formData)
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
    $http.delete('/onem2mdoc/api/abbr/' + word)
      .success(function(data) {
        $scope.abbrList = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}