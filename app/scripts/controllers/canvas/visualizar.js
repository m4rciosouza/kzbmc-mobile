/**
 * Controller de visualização de um canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

kzbmcMobileApp.controller( 'CanvasVisualizarCtrl', [ '$scope', '$routeParams', '$location', 'canvasService', 'projetoCanvasService',
	function( $scope, $routeParams, $location, canvasService, projetoCanvasService ) {
	  
	/**
	 * Carrega um projeto canvas para visualização do canvas.
	 * @method carregarProjeto
	 */
	$scope.carregarProjeto = function() {
		$scope.index = parseInt( $routeParams.index, 10 );
		$scope.projeto = projetoCanvasService.obterProjetoJson( $scope.index );
		if( $scope.projeto === false ) {
			$location.path( '/' );
		}	
	};

	$scope.carregarProjeto();
	  
}]);