'use strict';

angular.module( 'LocalStorageModule' ).value( 'prefix', 'kzbmc' );
var kzbmcMobileApp = angular.module('kzbmcMobileApp', [
      'ngRoute',
      'LocalStorageModule',
      'ui.sortable',
      'pascalprecht.translate'
    ]);

kzbmcMobileApp.config( function( $routeProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/projetos-canvas/listar.html',
        controller: 'ProjetosCanvasListarCtrl'
      })
      .when('/cadastrar-canvas', {
        templateUrl: 'views/projetos-canvas/cadastrar.html',
        controller: 'ProjetosCanvasCadastrarCtrl'
      })
      .when('/editar-canvas/:index', {
        templateUrl: 'views/projetos-canvas/editar.html',
        controller: 'ProjetosCanvasEditarCtrl'
      })
      .when('/remover-canvas/:index', {
        templateUrl: 'views/projetos-canvas/remover.html',
        controller: 'ProjetosCanvasRemoverCtrl'
      })
      .when('/canvas/:index', {
        templateUrl: 'views/canvas/visualizar.html',
        controller: 'CanvasVisualizarCtrl'
      })
      .when('/cadastrar-item-canvas/:projetoId/:tipo', {
        templateUrl: 'views/canvas/cadastrar.html',
        controller: 'CanvasCadastrarCtrl'
      })
      .when('/editar-remover-item-canvas/:projetoId/:tipo/:itemId', {
        templateUrl: 'views/canvas/editar-remover.html',
        controller: 'CanvasEditarRemoverCtrl'
      })
      .when('/ajuda', {
        templateUrl: 'views/ajuda/index.html'
      })
      .when('/ajuda/segmentos-clientes', {
        templateUrl: 'views/ajuda/segmentos-clientes.html'
      })
      .when('/ajuda/propostas-valor', {
        templateUrl: 'views/ajuda/propostas-valor.html'
      })
      .when('/ajuda/canais', {
        templateUrl: 'views/ajuda/canais.html'
      })
      .when('/ajuda/relacionamento-clientes', {
        templateUrl: 'views/ajuda/relacionamento-clientes.html'
      })
      .when('/ajuda/recursos-chave', {
        templateUrl: 'views/ajuda/recursos-chave.html'
      })
      .when('/ajuda/atividades-chave', {
        templateUrl: 'views/ajuda/atividades-chave.html'
      })
      .when('/ajuda/parceiros-chave', {
        templateUrl: 'views/ajuda/parceiros-chave.html'
      })
      .when('/ajuda/estrutura-custo', {
        templateUrl: 'views/ajuda/estrutura-custo.html'
      })
      .when('/ajuda/fluxo-receita', {
        templateUrl: 'views/ajuda/fluxo-receita.html'
      })
      .when('/enviar-por-email', {
        templateUrl: 'views/enviar-por-email.html',
        controller: 'EnviarPorEmailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

kzbmcMobileApp.config( function( $translateProvider ) {
  $translateProvider.translations( 'pt', {
    CANVAS_MODELO_NEGOCIOS : 'Canvas de Modelo de Neg\u00f3cios',
    CRIAR_NOVO_CANVAS : 'Criar Novo Canvas'
  })
  .translations( 'en', {
    CANVAS_MODELO_NEGOCIOS : 'Business Model Canvas',
    CRIAR_NOVO_CANVAS : 'Create New Canvas'
  })
  .translations( 'es', {
    CANVAS_MODELO_NEGOCIOS : 'Modelo de Negocio Canvas',
    CRIAR_NOVO_CANVAS : 'Crear Nuevo Canvas'
  });
  $translateProvider.preferredLanguage( 'pt' );
});

kzbmcMobileApp.run( function( $rootScope, localStorageService, $translate ) {
  $rootScope.liteVersion = false;
  $translate.use( localStorageService.get( 'lingua' ) || 'pt' );
});