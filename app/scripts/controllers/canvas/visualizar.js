/**
 * Controller de visualização de um canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

angular.module( 'kzbmcMobileApp' ).controller( 'CanvasVisualizarCtrl', [ '$scope', '$routeParams', '$location', 'projetoCanvasService',
	function( $scope, $routeParams, $location, projetoCanvasService ) {
	  
	/**
	 * Carrega um projeto canvas para visualização do canvas.
	 * @method CanvasVisualizarCtrl::carregarProjeto
	 */
	$scope.carregarProjeto = function() {
		$scope.index = parseInt( $routeParams.index, 10 );
		$scope.projeto = projetoCanvasService.obterProjetoJson( $scope.index );
		if( $scope.projeto === false ) {
			$location.path( '/' );
		}	
	};

	/**
	 * Objeto utilizado para a atualização da ordem dos itens de uma área do canvas quando ordenado.
	 */
	$scope.sortableOptions = {
        stop : function() {
                projetoCanvasService.atualizar( $scope.projeto, $scope.index );
              },
        axis : 'y',
      };

	$scope.carregarProjeto();
	  
}]);