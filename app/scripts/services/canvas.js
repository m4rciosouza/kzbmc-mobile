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
   * Retorna o nome completo de um tipo de item canvas dado sua abreviação.
   * @method obterNomeItemPorTipo
   * @param {string} tipo
   */
  canvas.obterNomeItemPorTipo = function( tipo ) {
    var tipos = { 
      'pc' : 'Parceiros Chave', 
      'ac' : 'Atividades Chave', 
      'rc' : 'Recursos Chave', 
      'pv' : 'Propostas de Valor', 
      'rcl' : 'Relacionamento com os Clientes', 
      'ca' : 'Canais', 
      'sc' : 'Segmentos de Clientes', 
      'ec' : 'Estrutura de Custo', 
      'fr' : 'Fluxo de Receita' 
    };
    return tipos[ tipo ];
  };

  return canvas;
}]);