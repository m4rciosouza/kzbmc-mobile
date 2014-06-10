/**
 * Controller de cadastro de um item de canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

kzbmcMobileApp.controller( 'CanvasCadastrarCtrl', [ '$scope', '$routeParams', '$location', 'canvasService', 'projetoCanvasService', 
		function( $scope, $routeParams, $location, canvasService, projetoCanvasService ) {
	  
	/**
	 * Cadastra um novo item no canvas.
	 * @method cadastrar
	 * @param {object} item
	 */
	$scope.cadastrar = function( item ) {
		//TODO
		console.log( item );
		$location.path( '/' );
	};

	/**
	 * Carrega um projeto canvas para cadastro de um novo item de canvas.
	 * @method carregarProjeto
	 */
	$scope.carregarProjeto = function() {
		$scope.index = parseInt( $routeParams.index, 10 );
		$scope.tipo = $routeParams.tipo;
		$scope.projeto = projetoCanvasService.obterProjetoJson( $scope.index );
		if( $scope.projeto === false ) {
			$location.path( '/' );
		}
	};

	$scope.carregarProjeto();
  }]);