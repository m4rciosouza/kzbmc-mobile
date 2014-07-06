'use strict';

describe('Controller: EnviarPorEmailCtrl', function () {

  // load the controller's module
  beforeEach( module( 'kzbmcMobileApp' ) );

  var EnviarPorEmailCtrl,
    scope,
    httpBackend,
    postUrl = 'http://kazale.com/kzbmcmail/email.php',
    _projetoCanvasService;

  beforeEach( inject( function( $controller, $rootScope, $httpBackend, projetoCanvasService ) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    _projetoCanvasService = projetoCanvasService;
    // initialize the controller
    EnviarPorEmailCtrl = $controller( 'EnviarPorEmailCtrl', {
    	$scope : scope
    });
    // set some default data
    scope.email = 'marcio@kazale.com';
	 _projetoCanvasService.definirProjetos( '' );
	 _projetoCanvasService.cadastrar( { 'nome' : 'Nome', 'descricao' : 'Descrição' } );
  }));

  it( 'should reset the interface buttons configurations', function() {
  	scope.reset( false, false );
	expect( scope.processando ).toBe( false );
	expect( scope.btnDesabilitado ).toBe( false );
	expect( scope.exibirMsgOk ).toBe( false );
	expect( scope.exibirMsgErro ).toBe( false );
  });

  it( 'should store and load a new email', function() {
	scope.email = '';
	expect( scope.carregarEmail() ).toBe( '' );
	scope.email = 'marcio@kazale.com';
	scope.gravarEmail();
	expect( scope.carregarEmail() ).toBe( 'marcio@kazale.com' ); 
  });

  it( 'should show the error message because there is no project, invalid canvas id passed', function() {
	scope.enviarEmail( 1 );
	expect( scope.exibirMsgOk ).toBe( false );
	expect( scope.exibirMsgErro ).toBe( true );
  });

  it( 'should show the error message because there is no email', function() {
	scope.email = '';
	scope.enviarEmail( 0 );
	expect( scope.exibirMsgOk ).toBe( false );
	expect( scope.exibirMsgErro ).toBe( true );
  });

  it( 'should send a success email', function() {
	httpBackend.expectPOST( postUrl ).respond( 200, 'OK' );
	scope.enviarEmail( 0 );
	httpBackend.flush();
	expect( scope.exibirMsgOk ).toBe( true );
	expect( scope.exibirMsgErro ).toBe( false );
  });

  it( 'should send an error email with 200 code response', function() {
	httpBackend.expectPOST( postUrl ).respond( 200, '' );
	scope.enviarEmail( 0 );
	httpBackend.flush();
	expect( scope.exibirMsgOk ).toBe( false );
	expect( scope.exibirMsgErro ).toBe( true );
  });

  it( 'should send an error email with 400 code response', function() {
	httpBackend.expectPOST( postUrl ).respond( 400, '' );
	scope.enviarEmail( 0 );
	httpBackend.flush();
	expect( scope.exibirMsgOk ).toBe( false );
	expect( scope.exibirMsgErro ).toBe( true );
  });
});