/**
 * Serviço de cadastro e manutenção de um projeto canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

angular.module( 'kzbmcMobileApp' ).factory( 'projetoCanvasService', [ 'localStorageService', function( localStorageService ) {

  var canvas = {};

  /**
   * Cadastra um novo projeto canvas.
   * @method cadastrar
   * @param {object} obj
   */
  canvas.cadastrar = function( obj ) {
		var canvasObj = { 'nome' : obj.nome, 'descricao' : obj.descricao, 'itens' : { 'pc' : [], 'ac' : [], 
				'rc' : [], 'pv' : [], 'rcl' : [], 'ca' : [], 'sc' : [], 'ec' : [], 'fr' : [] } };
    var projetos = this.obterProjetos();
		projetos.push( angular.toJson( canvasObj ) );
		this.definirProjetos( projetos );
  };

  /**
   * Atualiza os dados de um projeto canvas.
   * @method atualizar
   * @param {object} obj
   * @param {integer} index
   */
  canvas.atualizar = function( obj, index ) {
    var projeto = this.obterProjetoJson( index );
    if( projeto !== false ) {
      projeto.nome = obj.nome;
      projeto.descricao = obj.descricao;
      var projetos = this.obterProjetos();
      projetos[ index ] = angular.toJson( projeto );
      this.definirProjetos( projetos );
    }
  };

  /**
   * Remove um projeto canvas.
   * @method remover
   * @param {integer} index
   */
  canvas.remover = function( index ) {
    var projetos = this.obterProjetos();
    projetos.splice( index, 1 );
    this.definirProjetos( projetos );
  };

  /**
   * Remove todos os projetos canvas cadastrados.
   * @method removerTodosProjetos
   */
  canvas.removerTodosProjetos = function() {
      localStorageService.add( 'projetos', [] );
  };

  /**
   * Retorna um projeto com base no índice indicado.
   * @method obterProjeto
   * @param {integer} index
   * @return Literal
   */
  canvas.obterProjeto = function( index ) {
      var projetos = this.obterProjetos();
      if( index < projetos.length ) {
        return projetos[ index ];
      }
      return false;
  };

  /**
   * Retorna um projeto com base no índice indicado no formato json.
   * @method obterProjetoJson
   * @param {integer} index
   * @return object
   */
  canvas.obterProjetoJson = function( index ) {
      var projeto = this.obterProjeto( index );
      if( projeto !== false ) {
        return angular.fromJson( projeto );
      }
      return false;
  };

  /**
   * Retorna todos os projetos canvas cadastrados.
   * @method obterProjetos
   * @return Array
   */
  canvas.obterProjetos = function() {
  		return localStorageService.get( 'projetos' ) || [];
  };

  /**
   * Retorna todos os projetos canvas cadastrados no formato json.
   * @method obterProjetosJson
   * @return Array de objetos json
   */
  canvas.obterProjetosJson = function() {
    var projetosJson = [];
    var projetos = this.obterProjetos();
    if( projetos !== false ) {
      for( var i = 0; i < projetos.length; i ++ ) {
        projetosJson.push( angular.fromJson( projetos[ i ] ) );
      }
    }
    return projetosJson;
  };

  /**
   * Persiste os projetos canvas.
   * @method definirProjetos
   * @param {Array} projetos
   */
  canvas.definirProjetos = function( projetos ) {
    localStorageService.add( 'projetos', projetos );
  };

  return canvas;
}]);