/**
 * Controller i18n para seleção da língua utilizada.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.2
 * @since 0.2.2
 */
'use strict';

angular.module( 'kzbmcMobileApp' ).controller( 'I18nCtrl', [ '$scope', '$translate', 'localStorageService', 
	function( $scope, $translate, localStorageService ) {

	/**
	 * Define a língua a ser utilizada na aplicação.
	 * @method I18nCtrl::selecionarLingua
	 * @param {string} lingua código da língua a ser definida ( pt, en ou es )
	 */
	$scope.selecionarLingua = function( lingua ) {
		localStorageService.add( 'lingua', lingua );
    	$translate.use( lingua );
  	};
}]);