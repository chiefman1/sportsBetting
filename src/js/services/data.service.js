(function(){
	'use strict';
	
	angular
		.module('sportsBetting')
		.factory('getData', colossusService);
		
	colossusService.$inject = ['$http'];
	
	function colossusService($http){
		
		var service = {
			'getPools' : getPools,
			'poolDetail' : poolDetail,
			'makeBet': makeBet,
			'makeLocalBet': makeLocalBet
		};
		
		return service;	
			
		function getPools(){
			/**
			* Return a list of all pools
			*/	
			return $http.get('https://colossusdevtest.herokuapp.com/api/pools.json');
		}
		
		function poolDetail(id){
			/**
			 * Return detailed information about a given pool
			 */
			 return $http.get('https://colossusdevtest.herokuapp.com/api/pools/'+id+'.json');
		}
		
		function makeBet(bet){
			/**
			 * Pushes completed bet to the server
			 */
			 return $http.post('https://colossusdevtest.herokuapp.com/api/tickets.json', bet);
		}

		function makeLocalBet(bet){
			$.ajax
			({
				async: true,
				type: "GET",
				dataType : 'json',
				url: '/bet.php',
				data: { data: bet }
			});
		}
	}
})();