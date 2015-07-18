var myApp = angular.module('myApp', []);

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.searchArtists = function() {
    $http.get("https://api.spotify.com/v1/search?type=artist&query=" + $scope.artist).success(function(response){
      $scope.artists = response.artists.items;
    })
  }
});
