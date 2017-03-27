'use strict';
var app=angular.module('myApp.view2', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]);
app.controller('View2Ctrl', function($scope,$http,$rootScope) {
	
	$scope.allData;
	$rootScope.allData=[];
	$scope.values;
	$rootScope.values=[];
	$http({

						method:'POST',
						url:'http://127.0.0.1:2000/slotforday',
						data:{"BookingDate":$rootScope.event_data}
						

			})
			            .then(function successCallback(response) {
			            			$scope.groundFlag2 = true;
									$scope.allData= response.data;
									
									
									var arr=$scope.allData.slot.slot;
									var Num_Array=arr.split(",").map(Number);
									$scope.allData=Num_Array;
									$rootScope.allData =$scope.allData ;
									console.log(JSON.stringify($scope.allData));

									if (Num_Array.length>24) {
								var dis_array=['0.00-0.30','0.30-1.00','1.00-1.30','1.30-2.00','2.00-2.30','2.30-3.00','3.00-3.30','3.30-4.00','4.00-4.30','4.30-5.00','5.00-5.30','5.30-6.00','6.00-6.30','6.30-7.00','7.00-7.30','7.30-8.00','8.00-8.30','8.30-9.00','9.00-9.30','9.30-10.00','10.00-10.30','10.30-11.00','11.00-11.30','11.30-12.00','12.00-12.30','12.30-13.00','13.00-13.30','13.30-14.00','14.00-14.30','14.30-15.00','15.00-15.30','15.30-16.00','16.00-16.30','16.30-17.00','17.00-17.30','17.30-18.00','18.00-18.30','18.30-19.00','19.00-19.30','19.30-20.00','20.00-20.30','20.30-21.00','21.00-21.30','21.30-22.00','22.00-22.30','22.30-23.00','23.00-23.30','23.30-24.00'];
								
								
								console.log($scope.allData.values);
								
								}
								else
								{
								var dis_array=['0.00-1.00','1.00-2.00','2.00-3.00','3.00-4.00','4.00-5.00','5.00-6.00','6.00-7.00','7.00-8.00','8.00-9.00','9.00-10.00','10.00-11.00','11.00-12.00','12.00-13.00','13.00-14.00','14.00-15.00','15.00-16.00','16.00-17.00','17.00-18.00','18.00-19.00','19.00-20.00','20.00-21.00','21.00-22.00','22.00-23.00','23.00-24.00'];
								
								console.log(dis_array);

								
								}
								$scope.repeatData = Num_Array.map(function(value, index) {
							    return {
							        data: value,
							        value: dis_array[index]
							    }
								});
								}, function errorCallback(response) {
    							console.log("fail");
						});
	});
    

				      		  


