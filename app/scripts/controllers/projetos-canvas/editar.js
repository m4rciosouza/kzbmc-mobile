/**
 * Controller de edição de um projeto canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

angular.module( 'kzbmcMobileApp' ).controller('ProjetosCanvasEditarCtrl', [ '$scope', '$location', '$routeParams', 'projetoCanvasService', 
		function( $scope, $location, $routeParams, projetoCanvasService ) {
	  
	/**
	 * Carrega um projeto canvas para edição.
	 * @method carregarProjeto
	 */
	$scope.carregarProjeto = function() {
		$scope.index = parseInt( $routeParams.index, 10 );
		$scope.canvasEditar = projetoCanvasService.obterProjetoJson( $scope.index );
		if( $scope.canvasEditar === false ) {
			$location.path( '/' );
		}	
	};	 
	  
    /**
	 * Atualiza os dados de um projeto canvas.
	 * @method atualizar
	 * @param {object} canvas
	 */
    $scope.atualizar = function( canvas ) {
		  if( $scope.form.$valid ) {
			  var canvasObj = { 'nome' : canvas.nome, 'descricao' : canvas.descricao };
			  projetoCanvasService.atualizar( canvasObj, $scope.index );
			  $location.path( '/' );
		  }
	  };
	  
	  $scope.carregarProjeto();
  }]);