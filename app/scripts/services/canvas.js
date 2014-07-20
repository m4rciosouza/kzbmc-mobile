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
   * @method CanvasService::cadastrar
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
   * @method CanvasService::atualizar
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
   * @method CanvasService::remover
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
   * @method CanvasService::obterNomeItemPorTipo
   * @param {string} tipo
   */
  canvas.obterNomeItemPorTipo = function( tipo ) {
    var tipos = { 
      'pc' : 'PARCEIROS_CHAVE', 
      'ac' : 'ATIVIDADES_CHAVE', 
      'rc' : 'RECURSOS_CHAVE', 
      'pv' : 'PROPOSTAS_VALOR', 
      'rcl' : 'RELACIONAMENTO_CLIENTES', 
      'ca' : 'CANAIS', 
      'sc' : 'SEGMENTOS_CLIENTES', 
      'ec' : 'ESTRUTURA_CUSTO', 
      'fr' : 'FLUXO_RECEITA' 
    };
    return tipos[ tipo ];
  };

  return canvas;
}]);