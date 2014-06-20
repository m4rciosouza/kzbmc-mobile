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
	 * @param {object} item
	 */
    $scope.atualizar = function( item ) {
		canvasService.atualizar( item, $scope.itemId, $scope.tipo, $scope.projetoId ) 
		$location.path( '/canvas/' + $scope.projetoId );
	};

	/**
	 * Remove um item canvas.
	 * @method remover
	 */
    $scope.remover = function() {
		canvasService.remover( $scope.itemId, $scope.tipo, $scope.projetoId );
		$location.path( '/canvas/' + $scope.projetoId );
	};

	  /**
	 * Carrega um projeto canvas para cadastro de um novo item de canvas.
	 * @method carregarProjeto
	 */
	$scope.carregarProjeto = function() {
		$scope.projetoId = parseInt( $routeParams.projetoId, 10 );
		$scope.itemId = parseInt( $routeParams.itemId, 10 );
		$scope.tipo = $routeParams.tipo;
		$scope.projeto = projetoCanvasService.obterProjetoJson( $scope.projetoId );
		this.validarParametros();
		$scope.item = $scope.projeto.itens[ $scope.tipo ][ $scope.itemId ];
	};

	/**
	 * Valida os parâmetros de entrada de uma requisição de edição/remoção de um item.
	 * @method validarParametros
	 */
	$scope.validarParametros = function() {
		var tipos = [ 'pc', 'ac', 'rc', 'pv', 'rcl', 'ca', 'sc', 'ec', 'fr' ];
		if( $scope.projeto === false || ! this.ehItemIdValido() || 
			tipos.indexOf( $scope.tipo ) === -1 ) {
			$location.path( '/' );
		}
	};

	/**
	 * Valida o valor do item de uma requisição de edição/remoção de um item.
	 * @method ehItemIdValido
	 * @return boolean
	 */
	$scope.ehItemIdValido = function() {
		if( isNaN( $scope.itemId ) || $scope.itemId < 0 || 
			$scope.itemId >= $scope.projeto.itens[ $scope.tipo ].length ) {
			return false;
		}
		return true;
	};

	/**
	  * Retorna o nome completo de um tipo de item canvas dado sua abreviação.
	  * @method obterNomeItemPorTipo
	  */
	$scope.obterNomeItemPorTipo = function() {
		return canvasService.obterNomeItemPorTipo( $scope.tipo );
	};

	$scope.carregarProjeto();
  }]);