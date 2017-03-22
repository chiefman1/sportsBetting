(function(){
	'use strict';
	
	angular
		.module('sportsBetting')
		.config(config);
		
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function config($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/");

		$stateProvider
				.state('pools', {
					url: "/",
					controller: 'poolsController',
					controllerAs: 'vm',
					templateUrl: "/templates/pools.html"
				})

				.state('pool', {
					url: "/pool/:poolId",
					controller: 'poolController',
					templateUrl: "/templates/pool.html",
					controllerAs: 'vm'
				})
	}
})();