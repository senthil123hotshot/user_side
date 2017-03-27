'use strict';
var app=angular.module('myApp.view1', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);
app.controller('View1Ctrl', function($scope,$http,$rootScope,$location) {
	$scope.allData;
	$rootScope.allData=[];
	$http({

						method:'GET',
						url:'http://127.0.0.1:2000/values',
			})
			            .then(function successCallback(response) {
			            			$scope.groundFlag = true;
									$scope.allData = response.data;
									$rootScope.allData =$scope.allData ;
										var date=new Date(response.data.values.event_data);
										var temp=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
										console.log(temp);
										$scope.allData.values.event_data=temp;
									//console.log(JSON.stringify(response.data.values));
								}, function errorCallback(response) {
    							console.log("ffff");
						});

$scope.slot=function(x){
	$rootScope.event_data=x;
	$location.path('/view2');
 	    	//console.log(x);
 	    	
 	    }
 	      		  
	});
    

		

