(function(){
	'use strict';
	
	angular
		.module('sportsBetting')
		.controller('poolsController', poolsController);
		
	poolsController.$inject = ['$scope', 'getData', '$state'];
		
	function poolsController($scope, getData, $state){
		var vm = this;
		vm.pools = [];
		vm.poolId = null;

		vm.goPool = function(data) {
			$state.go('pool', {poolId: data});
		};

		activate();
		
		function activate(){
			getPools();
		}

		function getPools(){
			getData.getPools()
				.then(function(response){
					vm.pools = response.data;
				}, function(error) {
					console.log('error retrieving pool list', error);
				});
		}
	}
	
})();