/**
 * Controller de edição e/ou remoção de um item do canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

kzbmcMobileApp.controller('ProjetosCanvasEditarRemoverCtrl', [ '$scope', '$location', '$routeParams', 'canvasService', 'projetoCanvasService', 
		function( $scope, $location, $routeParams, canvasService, projetoCanvasService ) {
	   
    /**
	 * Atualiza os dados de um item canvas.
	 * @method atualizar
	 * @param {object} canvas
	 */
    $scope.atualizar = function( canvas ) {
		  console.log( canvas );
		  //TODO
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