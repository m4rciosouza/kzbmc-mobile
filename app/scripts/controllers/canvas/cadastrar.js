/**
 * Controller de cadastro de um item de canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

kzbmcMobileApp.controller( 'CanvasCadastrarCtrl', [ '$scope', '$location', 'canvasService', 
		function( $scope, $location, canvasService ) {
	  
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
  }]);