var app = angular.module('ExchangePoint',[]);
app.controller('MainController',function($scope,$http){
	$scope.profile = {};
	$scope.master = {};
	$scope.update = function() {

		$scope.master=angular.copy($scope.profile);



		console.log($scope.master);
		$http.post('/someUrl', {msg:$scope.master}).
			then(function(response) {
    // this callback will be called asynchronously
    // when the response is available
	}, 
			function(response) {
			
  });


	}
	});

