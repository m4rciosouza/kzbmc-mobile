/**
 * Controller de listagem de projetos canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

angular.module( 'kzbmcMobileApp' ).controller( 'ProjetosCanvasListarCtrl', [ '$scope', 'projetoCanvasService', 
	function( $scope, projetoCanvasService ) {
	  
	  	/**
		 * Carrega uma lista de projetos canvas.
		 * @method carregarProjetos
		 */
	    $scope.carregarProjetos = function() {
	    	$scope.projetos = projetoCanvasService.obterProjetosJson();
	    };
		  
		$scope.carregarProjetos();
}]);