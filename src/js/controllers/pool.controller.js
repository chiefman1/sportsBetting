(function(){
	'use strict';
	
	angular
		.module('sportsBetting')
		.controller('poolController', poolController);
		
	poolController.$inject = ['$scope', 'getData', '$route', '$stateParams'];
	
	function poolController($scope, getData, $route, $stateParams){
		var vm = this;
		vm.poolDetail = [];
		vm.selected = {};
		vm.checked = '';
		vm.lines = 0;
		vm.selectedStake = 0;
		vm.bet = {};
		vm.stakeValues = null;
		activate();
		function activate(){
			getPoolDetail();
		}
						
		vm.getLines = function(){
			vm.lines = 0;
			for(var key in vm.selected.legs){		 
				if(vm.lines == 0){
					vm.lines = Object.keys(vm.selected.legs[key].selections).length;
				}
				else{
					vm.lines *= Object.keys(vm.selected.legs[key].selections).length;
				}
			}
			return vm.lines;
		};

		vm.submitBet = function(){
			alert('Your Bet Submitted! Please, check console for details.');
			vm.bet.selections = [];
			vm.bet.lines = vm.lines;
			vm.bet.stake = vm.selectedStake;
			for(var key in vm.selected.legs){
				for(var selection in vm.selected.legs[key].selections){
					vm.bet.selections.push(selection);
				}
			}

			getData.makeBet(vm.bet)
				.then(function(response){
					console.log('Success!');
				}, function(error){
					console.log('Error submitting bet:', error);
					console.log('Saving data to local file...');
					getData.makeLocalBet(vm.bet);
				})
		};

		function getPoolDetail(){
			vm.preId = $stateParams.poolId;
			var id = Number(vm.preId.replace(/\D+/g,""));
			getData.poolDetail(id)
				.then(function(response){
					vm.poolDetail = response.data;
					vm.stakeValues = vm.poolDetail.pool_stake.stakes;
				}, function (error) {
					console.log('error getting pool detail', error);
				});
		}
	}
	
})();