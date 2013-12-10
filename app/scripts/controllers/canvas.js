'use strict';

angular.module( 'kzbmcMobileApp' )
  .controller( 'CanvasCtrl', function( $scope, $routeParams, localStorageService ) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    var listaProjetos = localStorageService.get( 'projetos' ) || [];
    for( var i = 0; i <= listaProjetos.length; i ++ ) {
      if( i === parseInt( $routeParams.id, 10 ) ) {
        $scope.projeto = angular.fromJson( listaProjetos[ i ] );
      }
    }
  });