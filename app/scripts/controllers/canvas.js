'use strict';

angular.module( 'kzbmcMobileApp' )
  .controller( 'CanvasCtrl', [ '$scope', '$routeParams', 'localStorageService', function( $scope, $routeParams, localStorageService ) {
    
    $scope.listaProjetos = localStorageService.get( 'projetos' ) || [];
    $scope.id = parseInt( $routeParams.id, 10 );
    $scope.projeto = angular.fromJson( $scope.listaProjetos[ $scope.id ] );
    
    // load info to the add modal form
    $scope.modalAdd = function( tipo, descricao ) {
        $scope.tipo = tipo;
        $scope.descricao = descricao;
        $scope.item = { 'titulo' : '', 'descricao' : '', 'cor' : '' };
      };
      
    // add a new item to the project
    $scope.cadastrar = function( item ) {
        var novoItem = { 'titulo' : item.titulo, 'descricao' : item.descricao, 'cor' : item.cor };
        var itemObj = $scope.obterItemObj( $scope.tipo );
        itemObj.push( novoItem );
        $scope.listaProjetos[ $scope.id ] = angular.toJson( $scope.projeto );
        localStorageService.add( 'projetos', $scope.listaProjetos );
      };
     
    // load info to the edit/remove modal form
    $scope.modalEdit = function( tipo, descricao, index ) {
        $scope.index = index;
        $scope.tipo = tipo;
        $scope.descricao = descricao;
        var itemObj = $scope.obterItemObj( tipo );
        itemObj = itemObj[ index ];
        $scope.itemEdit = { 'titulo' : itemObj.titulo, 'descricao' : itemObj.descricao,
                            'cor' : itemObj.cor };
      };
      
    // updates a project item
    $scope.atualizar = function( item ) {
          var novoItem = { 'titulo' : item.titulo, 'descricao' : item.descricao, 'cor' : item.cor };
          var itemObj = $scope.obterItemObj( $scope.tipo );
          itemObj[ $scope.index ] = novoItem;
          $scope.listaProjetos[ $scope.id ] = angular.toJson( $scope.projeto );
          localStorageService.add( 'projetos', $scope.listaProjetos );
        };
        
    // removes a project item
    $scope.remover = function() {
          var itemObj = $scope.obterItemObj( $scope.tipo );
          itemObj.splice( $scope.index, 1 );
          $scope.listaProjetos[ $scope.id ] = angular.toJson( $scope.projeto );
          localStorageService.add( 'projetos', $scope.listaProjetos );
        };
        
    // load an object array based on your kind
    $scope.obterItemObj = function( tipo ) {
          var itemObj = '';
          switch( tipo ) {
	        case 'pc':
	          itemObj = $scope.projeto.itens.pc;
	          break;
	        case 'ac':
	          itemObj = $scope.projeto.itens.ac;
	          break;
	        case 'rc':
	          itemObj = $scope.projeto.itens.rc;
	          break;
	        case 'pv':
	          itemObj = $scope.projeto.itens.pv;
	          break;
	        case 'rcl':
	          itemObj = $scope.projeto.itens.rcl;
	          break;
	        case 'ca':
	          itemObj = $scope.projeto.itens.ca;
	          break;
	        case 'sc':
	          itemObj = $scope.projeto.itens.sc;
	          break;
	        case 'ec':
	          itemObj = $scope.projeto.itens.ec;
	          break;
	        case 'fr':
	          itemObj = $scope.projeto.itens.fr;
	          break;
          }
          return itemObj;
        };
     
    $scope.sortableOptions = {
        stop : function() {
                $scope.listaProjetos[ $scope.id ] = angular.toJson( $scope.projeto );
                localStorageService.add( 'projetos', $scope.listaProjetos );
              },
        axis : 'y',
      };
  }]);