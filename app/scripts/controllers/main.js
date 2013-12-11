'use strict';

angular.module('kzbmcMobileApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
	  
	  // http://gregpike.net/demos/angular-local-storage/demo/demo.html
	  //localStorageService.clearAll();
	  
	  $scope.cadastrar = function( canvas ) {
		  if($scope.form.$valid) {
			  var canvasObj = { 'nome' : canvas.nome, 'descricao' : canvas.descricao, 'itens' : { 'pc' : [ { 'titulo' : 't1', 'descricao' : 'd1', 'cor' : 'success' }, { 'titulo' : 'título 1', 'descricao' : 'descrição 2', 'cor' : 'warning' } ], 'ac' : [], 'rc' : [], 'pv' : [], 'rcl' : [], 'ca' : [], 'sc' : [], 'ec' : [], 'fr' : [] } };
			  $scope.projetos.push( angular.toJson( canvasObj ) );
			  localStorageService.add( 'projetos', $scope.projetos );
			  $scope.parseProjetos();
		  }
	  };
	  
	  $scope.reset = function( canvas ) {
		  if( typeof canvas !== 'undefined' ) {
		    canvas.nome = '';
		    canvas.descricao = '';
		  }
	  };
	  
	  $scope.parseProjetos = function() {
		  $scope.projetos = [];
		  var listaProjetos = localStorageService.get( 'projetos' ) || [];
		  for( var i = 0; i < listaProjetos.length; i ++ ) {
			  $scope.projetos.push( angular.fromJson( listaProjetos[ i ] ) );
		  }
	  };
	  
	  $scope.parseProjetos();
  });