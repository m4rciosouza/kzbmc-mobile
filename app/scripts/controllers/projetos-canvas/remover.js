/**
 * Controller de remoção de um projeto canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

kzbmcMobileApp.controller('ProjetosCanvasRemoverCtrl', [ '$scope', '$location', '$routeParams', 'projetoCanvasService', 
		function( $scope, $location, $routeParams, projetoCanvasService ) {
	  
	/**
	 * Carrega um projeto canvas para remoção.
	 * @method carregarProjeto
	 */
	$scope.carregarProjeto = function() {
		$scope.index = parseInt( $routeParams.index, 10 );
		$scope.canvasRemover = projetoCanvasService.obterProjetoJson( $scope.index );
		if( $scope.canvasRemover === false ) {
			$location.path( '/' );
		}	
	};	
      
    /**
	 * Remove um projeto canvas.
	 * @method remover
	 * @param {object} canvas
	 */
    $scope.remover = function() {
        projetoCanvasService.remover( $scope.index );
        $location.path( '/' );
    };
	  
	$scope.carregarProjeto();
}]);