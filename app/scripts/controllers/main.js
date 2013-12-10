'use strict';

angular.module('kzbmcMobileApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
	  
	  // http://gregpike.net/demos/angular-local-storage/demo/demo.html
	  //localStorageService.clearAll();
	  
	  $scope.cadastrar = function( canvas ) {
		  if($scope.form.$valid) {
			  var canvasObj = { 'nome' : canvas.nome, 'descricao' : canvas.descricao };
			  $scope.projetos.push( angular.toJson( canvasObj ) );
			  localStorageService.add( 'projetos', $scope.projetos );
			  $scope.parseProjetos();
		  }
	  };
	  
	  $scope.reset = function( canvas ) {
		  canvas.nome = '';
		  canvas.descricao = '';
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