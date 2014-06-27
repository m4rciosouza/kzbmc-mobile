/**
 * Controller de cadastro de um projeto canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

angular.module( 'kzbmcMobileApp' ).controller( 'ProjetosCanvasCadastrarCtrl', [ '$scope', '$location', 'projetoCanvasService', 
		function( $scope, $location, projetoCanvasService ) {
	  
	$scope.liteVersion = false;
	$scope.qtdProjetos = projetoCanvasService.obterProjetos().length;

	/**
	 * Cadastra um novo projeto canvas.
	 * @method ProjetosCanvasCadastrarCtrl::cadastrar
	 * @param {object} canvas
	 */
	$scope.cadastrar = function( canvas ) {
		if( $scope.form.$valid ) {
			var canvasObj = { 'nome' : canvas.nome, 'descricao' : canvas.descricao };
			projetoCanvasService.cadastrar( canvasObj );
			$location.path( '/' );
		}
	};
}]);