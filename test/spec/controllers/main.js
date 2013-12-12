'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('kzbmcMobileApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope 
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  
  beforeEach(function() {
	  scope.projetos = [];
	  scope.projetos.push( { 'nome' : 'projeto 1', 'descricao' : 'desc projeto 1' } );
	  scope.projetos.push( { 'nome' : 'projeto 2', 'descricao' : 'desc projeto 2' } );
  });

  it( 'should attach the first project to the scope', function () {
	  scope.modalLoadData( 0 );
    expect( scope.canvasEditar.nome ).toBe( 'projeto 1' );
  });
  
  it( 'should attach the second project to the scope', function () {
	  scope.modalLoadData( 1 );
    expect( scope.canvasEditar.nome ).toBe( 'projeto 2' );
  });
  
  it( 'should create a new project', function() {
	  scope.form = { '$valid' : true };
	  scope.cadastrar( { 'nome' : 'projeto 3', 'descricao' : 'desc projeto 3' } );
	  expect( scope.projetos.length ).toBe( 3 );
	  expect( scope.projetos[ 2 ].nome ).toBe( 'projeto 3' );
  });
  
  it( 'should update a project name', function(){
	  scope.index = 0;
	  scope.atualizar( { 'nome' : 'projeto 1 mod', 'descricao' : 'desc projeto 1 mod' } );
	  expect( scope.projetos.length ).toBe( 2 );
	  expect( scope.projetos[ 0 ].nome ).toBe( 'projeto 1 mod' );
  });
  
  it( 'should remove a project', function(){
	  scope.index = 0;
	  scope.remover();
	  expect( scope.projetos.length ).toBe( 1 );
    expect( scope.projetos[ 0 ].nome ).toBe( 'projeto 2' );
  });
});
