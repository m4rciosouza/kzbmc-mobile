'use strict';

describe('Service: canvas', function () {

  var canvasService, 
      projetoCanvasService;

  beforeEach( function() {

    module( 'kzbmcMobileApp' );

    inject( function( _canvasService_ ) {
      canvasService = _canvasService_;
    });

    inject( function( _projetoCanvasService_ ) {
      projetoCanvasService = _projetoCanvasService_;
    });

    projetoCanvasService.removerTodosProjetos();
  });

  it( 'should create a new canvas item', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } ); 
    var obj = { 'titulo' : 'titulo item', 'descricao' : 'descricao item', 'cor' : 'warning' };
    canvasService.cadastrar( obj, 'pc', 0 );
    var projeto = projetoCanvasService.obterProjetoJson( 0 );
    expect( projeto.itens.pc.length ).toBe( 1 );
    expect( projeto.itens.pc[ 0 ].titulo ).toBe( 'titulo item' );
    expect( projeto.itens.pc[ 0 ].descricao ).toBe( 'descricao item' );
    expect( projeto.itens.pc[ 0 ].cor ).toBe( 'warning' );
  });

  it( 'should create two new canvas itens', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } ); 
    var obj = { 'titulo' : 'titulo item', 'descricao' : 'descricao item', 'cor' : 'warning' };
    canvasService.cadastrar( obj, 'pc', 0 );
    obj = { 'titulo' : 'titulo item2', 'descricao' : 'descricao item2', 'cor' : 'info' };
    canvasService.cadastrar( obj, 'pc', 0 );
    var projeto = projetoCanvasService.obterProjetoJson( 0 );
    expect( projeto.itens.pc.length ).toBe( 2 );
    expect( projeto.itens.pc[ 0 ].titulo ).toBe( 'titulo item' );
    expect( projeto.itens.pc[ 0 ].descricao ).toBe( 'descricao item' );
    expect( projeto.itens.pc[ 0 ].cor ).toBe( 'warning' );
    expect( projeto.itens.pc[ 1 ].titulo ).toBe( 'titulo item2' );
    expect( projeto.itens.pc[ 1 ].descricao ).toBe( 'descricao item2' );
    expect( projeto.itens.pc[ 1 ].cor ).toBe( 'info' );
  });

  it( 'should update a canvas item', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } ); 
    var obj = { 'titulo' : 'titulo item', 'descricao' : 'descricao item', 'cor' : 'warning' };
    canvasService.cadastrar( obj, 'pc', 0 );
    var objEditado = { 'titulo' : 'titulo editado', 'descricao' : 'descricao editada', 'cor' : 'success' };
    canvasService.atualizar( objEditado, 0, 'pc', 0 );
    var projeto = projetoCanvasService.obterProjetoJson( 0 );
    expect( projeto.itens.pc[ 0 ].titulo ).toBe( 'titulo editado' );
    expect( projeto.itens.pc[ 0 ].descricao ).toBe( 'descricao editada' );
    expect( projeto.itens.pc[ 0 ].cor ).toBe( 'success' );
  });

  it( 'should remove one canvas item', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } ); 
    var obj = { 'titulo' : 'titulo item', 'descricao' : 'descricao item', 'cor' : 'warning' };
    canvasService.cadastrar( obj, 'pc', 0 );
    obj = { 'titulo' : 'titulo item2', 'descricao' : 'descricao item2', 'cor' : 'info' };
    canvasService.cadastrar( obj, 'pc', 0 );
    canvasService.remover( 0, 'pc', 0 );
    var projeto = projetoCanvasService.obterProjetoJson( 0 );
    expect( projeto.itens.pc.length ).toBe( 1 );
    expect( projeto.itens.pc[ 0 ].titulo ).toBe( 'titulo item2' );
    expect( projeto.itens.pc[ 0 ].descricao ).toBe( 'descricao item2' );
    expect( projeto.itens.pc[ 0 ].cor ).toBe( 'info' );
  });

});