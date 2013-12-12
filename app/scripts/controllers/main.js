'use strict';

angular.module('kzbmcMobileApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
	  
	  // http://gregpike.net/demos/angular-local-storage/demo/demo.html
	  //localStorageService.clearAll();
	  
	  // create a new canvas
	  $scope.cadastrar = function( canvas ) {
		  if($scope.form.$valid) {
			  var canvasObj = { 'nome' : canvas.nome, 'descricao' : canvas.descricao, 'itens' : { 'pc' : [], 'ac' : [], 'rc' : [], 'pv' : [], 'rcl' : [], 'ca' : [], 'sc' : [], 'ec' : [], 'fr' : [] } };
			  $scope.projetos.push( angular.toJson( canvasObj ) );
			  localStorageService.add( 'projetos', $scope.projetos );
			  $scope.parseProjetos();
		  }
	  };
	  
	  // loads modal canvas data
	  $scope.modalLoadData = function( index ) {
		  $scope.index = index;
		  var itemObj = $scope.projetos[ index ];
	    $scope.canvasEditar = { 'nome' : itemObj.nome, 'descricao' : itemObj.descricao };
	  };
	  
    // update a canvas
    $scope.atualizar = function( canvas ) {
          var index = $scope.index;
          $scope.projetos[ index ].nome = canvas.nome;
          $scope.projetos[ index ].descricao = canvas.descricao;
          var listaProjetos = localStorageService.get( 'projetos' ) || [];
          listaProjetos[ index ] = angular.toJson( $scope.projetos[ index ] );
          localStorageService.add( 'projetos', listaProjetos );
        };
      
    // remove a canvas
    $scope.remover = function() {
        $scope.projetos.splice( $scope.index, 1 );
        var listaProjetos = localStorageService.get( 'projetos' ) || [];
        listaProjetos.splice( $scope.index, 1 );
        localStorageService.add( 'projetos', listaProjetos );
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