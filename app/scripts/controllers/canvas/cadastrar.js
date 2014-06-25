/**
 * Controller de cadastro de um item de canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

angular.module( 'kzbmcMobileApp' ).controller( 'CanvasCadastrarCtrl', [ '$scope', '$routeParams', '$location', 'canvasService', 'projetoCanvasService', 
		function( $scope, $routeParams, $location, canvasService, projetoCanvasService ) {
	  
	/**
	 * Cadastra um novo item no canvas.
	 * @method cadastrar
	 * @param {object} item
	 */
	$scope.cadastrar = function( item ) {
		canvasService.cadastrar( item, $scope.tipo, $scope.projetoId );
		$location.path( '/canvas/' + $scope.projetoId );
	};

	/**
	 * Carrega um projeto canvas para cadastro de um novo item de canvas.
	 * @method carregarProjeto
	 */
	$scope.carregarProjeto = function() {
		$scope.projetoId = parseInt( $routeParams.projetoId, 10 );
		$scope.tipo = $routeParams.tipo;
		$scope.projeto = projetoCanvasService.obterProjetoJson( $scope.projetoId );
		this.validarParametros();
	};

	/**
	  * Retorna o nome completo de um tipo de item canvas dado sua abreviação.
	  * @method obterNomeItemPorTipo
	  */
	$scope.obterNomeItemPorTipo = function() {
		return canvasService.obterNomeItemPorTipo( $scope.tipo );
	};

	/**
	 * Valida os parâmetros de entrada de uma requisição de cadastro de um novo item.
	 * @method validarParametros
	 */
	$scope.validarParametros = function() {
		var tipos = [ 'pc', 'ac', 'rc', 'pv', 'rcl', 'ca', 'sc', 'ec', 'fr' ];
		if( $scope.projeto === false || tipos.indexOf( $scope.tipo ) === -1 ) {
			$location.path( '/' );
		}
	};

	$scope.carregarProjeto();
  }]);