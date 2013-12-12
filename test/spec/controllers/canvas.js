'use strict';

describe('Controller: CanvasCtrl', function () {

  // load the controller's module
  beforeEach(module('kzbmcMobileApp'));

  var CanvasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CanvasCtrl = $controller('CanvasCtrl', {
      $scope: scope
    });
  }));

  beforeEach(function() {
	  scope.listaProjetos = [];
	  scope.listaProjetos.push( angular.toJson( { 'nome' : 'projeto 1', 'descricao' : 'desc projeto 1', 'itens' : { 'pc' : [ { 'titulo' : 't1', 'descricao' : 'd1', 'cor' : 'success' } ] } } ) );
	  scope.id = 0;
	  scope.projeto = angular.fromJson( scope.listaProjetos[ scope.id ] );
  });
  
  it('should load an object array based on your kind', function () {
	  var itemObj = scope.obterItemObj( 'pc' );
	  expect( itemObj[ 0 ].titulo ).toBe( 't1' );
  });
  
  it('should load info to the add modal form to the scope', function () {
	  scope.modalAdd( 'pc', 'Adicionar item de Parceiros Chave' );
	  expect( scope.tipo ).toBe( 'pc' );
	  expect( scope.descricao ).toBe( 'Adicionar item de Parceiros Chave' );
	  expect( scope.item.titulo ).toBe( '' );
	  expect( scope.item.descricao ).toBe( '' );
	  expect( scope.item.cor ).toBe( '' );
  });
  
  it('should load info to the edit/remove modal form to the scope', function () {
	  scope.modalEdit( 'pc', 'Editar item de Parceiros Chave', 0 );
	  expect( scope.tipo ).toBe( 'pc' );
	  expect( scope.descricao ).toBe( 'Editar item de Parceiros Chave' );
	  expect( scope.index ).toBe( 0 );
	  expect( scope.itemEdit.titulo ).toBe( 't1' );
	  expect( scope.itemEdit.descricao ).toBe( 'd1' );
	  expect( scope.itemEdit.cor ).toBe( 'success' );
  });
  
  it('should create a new project item', function () {
	  scope.tipo = 'pc';
	  scope.cadastrar( { 'titulo' : 't2', 'descricao' : 'd2', 'cor' : 'warning' } );
	  expect( scope.projeto.itens.pc.length ).toBe( 2 );
	  expect( scope.projeto.itens.pc[ 1 ].titulo ).toBe( 't2' );
	  expect( scope.projeto.itens.pc[ 1 ].descricao ).toBe( 'd2' );
	  expect( scope.projeto.itens.pc[ 1 ].cor ).toBe( 'warning' );
  });
  
  it('should update a project item', function () {
	  scope.tipo = 'pc';
	  scope.index = 0;
	  expect( scope.projeto.itens.pc.length ).toBe( 1 );
	  expect( scope.projeto.itens.pc[ 0 ].titulo ).toBe( 't1' );
	  expect( scope.projeto.itens.pc[ 0 ].descricao ).toBe( 'd1' );
	  expect( scope.projeto.itens.pc[ 0 ].cor ).toBe( 'success' );
	  scope.atualizar( { 'titulo' : 't2', 'descricao' : 'd2', 'cor' : 'warning' } );
	  expect( scope.projeto.itens.pc.length ).toBe( 1 );
	  expect( scope.projeto.itens.pc[ 0 ].titulo ).toBe( 't2' );
	  expect( scope.projeto.itens.pc[ 0 ].descricao ).toBe( 'd2' );
	  expect( scope.projeto.itens.pc[ 0 ].cor ).toBe( 'warning' );
	  
  });
  
  it('should remove a project item', function () {
	  scope.tipo = 'pc';
	  scope.index = 0;
	  scope.remover();
	  expect( scope.projeto.itens.pc.length ).toBe( 0 );
  });
});
