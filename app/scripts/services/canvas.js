/**
 * Serviço de gerenciamento de um canvas.
 * @author Marcio C. de Souza <marcio@kazale.com>
 * @version 0.2.0
 * @since 0.2.0
 */
'use strict';

angular.module( 'kzbmcMobileApp' ).factory( 'canvasService', [ 'localStorageService', 'projetoCanvasService', 
  function( localStorageService, projetoCanvasService ) {

  var canvas = {};

  /**
   * Cadastra um novo item no canvas.
   * @method cadastrar
   * @param {object} obj
   * @param {string} tipo
   * @param {integer} projetoId
   */
  canvas.cadastrar = function( obj, tipo, projetoId ) {
		var novoItem = { 'titulo' : obj.titulo, 'descricao' : obj.descricao, 'cor' : obj.cor };
    var projeto = projetoCanvasService.obterProjetoJson( projetoId );
    projeto.itens[ tipo ].push( novoItem );
    projetoCanvasService.atualizar( projeto, projetoId );
  };

  /**
   * Atualiza os dados de um item do canvas.
   * @method atualizar
   * @param {object} obj
   * @param {integer} objIndex
   * @param {string} tipo
   * @param {integer} projetoId
   */
  canvas.atualizar = function( obj, objIndex, tipo, projetoId ) {
    var novoItem = { 'titulo' : obj.titulo, 'descricao' : obj.descricao, 'cor' : obj.cor };
    var projeto = projetoCanvasService.obterProjetoJson( projetoId );
    projeto.itens[ tipo ][ objIndex ] = novoItem;
    projetoCanvasService.atualizar( projeto, projetoId );
  };

  /**
   * Remove um item do canvas.
   * @method remover
   * @param {integer} objIndex
   * @param {string} tipo
   * @param {integer} projetoId
   */
  canvas.remover = function( objIndex, tipo, projetoId ) {
     var projeto = projetoCanvasService.obterProjetoJson( projetoId );
     projeto.itens[ tipo ].splice( objIndex, 1 );
     projetoCanvasService.atualizar( projeto, projetoId );
  };

  /**
   * Retorna a lista de itens de um canvas por tipo.
   * @method obterItens
   * @param {integer} tipo
   * @param {integer} projetoId
   * @return Literal
   */
  /*canvas.obterItens = function( tipo, projetoId ) {
    var itemObj = '';
    var projeto = projetoCanvasService.obterProjetoJson( projetoId );
    switch( tipo ) {
      case 'pc':
        itemObj = projeto.itens.pc;
        break;
      case 'ac':
        itemObj = projeto.itens.ac;
        break;
      case 'rc':
        itemObj = projeto.itens.rc;
        break;
      case 'pv':
        itemObj = projeto.itens.pv;
        break;
      case 'rcl':
        itemObj = projeto.itens.rcl;
        break;
      case 'ca':
        itemObj = projeto.itens.ca;
        break;
      case 'sc':
        itemObj = projeto.itens.sc;
        break;
      case 'ec':
        itemObj = projeto.itens.ec;
        break;
      case 'fr':
        itemObj = projeto.itens.fr;
        break;
      }
    return itemObj;
  };*/

  /**
   * Retorna a lista de itens de um canvas por tipo no formato json.
   * @method obterItensJson
   * @param {string} tipo
   * @return object
   */
  /*canvas.obterItensJson = function( tipo ) {
    console.log( 'TODO ' + tipo );   
  };*/

  return canvas;
}]);