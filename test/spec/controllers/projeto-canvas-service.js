'use strict';

describe('Service: projetoCanvas', function () {

  var projetoCanvasService;

  beforeEach( function() {

    module( 'kzbmcMobileApp' );

    inject( function( _projetoCanvasService_ ) {
      projetoCanvasService = _projetoCanvasService_;
    });

    projetoCanvasService.removerTodosProjetos();

  });

  it( 'should create a new project', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } ); 
    var projeto = projetoCanvasService.obterProjetoJson( 0 );
    expect( projetoCanvasService.obterProjetos().length ).toBe( 1 );
    expect( projeto.nome ).toBe( 'nome' );
    expect( projeto.descricao ).toBe( 'descricao' );
  });

  it( 'should update an existing project', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } ); 
    var projeto = projetoCanvasService.obterProjetoJson( 0 );
    projeto.nome = 'nome editado';
    projeto.descricao = 'descricao editada';
    projetoCanvasService.atualizar( projeto, 0 );
    projeto = projetoCanvasService.obterProjetoJson( 0 );
    expect( projeto.nome ).toBe( 'nome editado' );
    expect( projeto.descricao ).toBe( 'descricao editada' );
  });

  it( 'should remove an existing project', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } );
    projetoCanvasService.remover( 0 );
    expect( projetoCanvasService.obterProjetos().length ).toBe( 0 );
  });

  it( 'should remove all existing projects', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } );
    projetoCanvasService.cadastrar( { 'nome' : 'nome2', 'descricao' : 'descricao2' } );
    projetoCanvasService.removerTodosProjetos();
    expect( projetoCanvasService.obterProjetos().length ).toBe( 0 );
  });

  it( 'should load an existing project', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } );
    var projeto = projetoCanvasService.obterProjeto( 0 );
    expect( projeto ).not.toBe( false );
  });

  it( 'should load an existing project in json format', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } );
    var projeto = projetoCanvasService.obterProjetoJson( 0 );
    expect( projeto.length ).not.toBe( false );
    expect( projeto.nome ).toBe( 'nome' );
  });

  it( 'should load all an existing projects', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } );
    projetoCanvasService.cadastrar( { 'nome' : 'nome2', 'descricao' : 'descricao2' } );
    var projetos = projetoCanvasService.obterProjetos();
    expect( projetos.length ).toBe( 2 );
  });

  it( 'should load all an existing projects in json format', function() {
    projetoCanvasService.cadastrar( { 'nome' : 'nome', 'descricao' : 'descricao' } );
    projetoCanvasService.cadastrar( { 'nome' : 'nome2', 'descricao' : 'descricao2' } );
    var projetos = projetoCanvasService.obterProjetosJson();
    expect( projetos.length ).toBe( 2 );
    expect( projetos[ 1 ].nome ).toBe( 'nome2' );
  });

});