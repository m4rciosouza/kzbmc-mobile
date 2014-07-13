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

/*
 * Translation
 */
kzbmcMobileApp.config( function( $translateProvider ) {
  $translateProvider.translations( 'pt', {
    // index.html
    KZ_CANVAS : 'KZ-Canvas',
    INICIAL : 'Inicial',
    ENVIAR_POR_EMAIL : 'Enviar Por Email',
    AJUDA : 'Ajuda',
    PORTUGUES : 'Portugu\u00eas',
    ESPANHOL : 'Espanhol',
    INGLES : 'Ingl\u00eas',
    KAZALE : 'Kazale',
    KAZALE_COM : 'Kazale.com',
    COPYRIGHT : '2014. Todos os direitos reservados',
    // projeto-canvas/listar.html
    CANVAS_MODELO_NEGOCIOS : 'Canvas de Modelo de Neg\u00f3cios',
    CRIAR_NOVO_CANVAS : 'Criar Novo Canvas',
    MEUS_CANVAS : 'Meus Canvas de Modelo de Neg\u00f3cios',
    EDITAR_CANVAS : 'Editar Canvas',
    REMOVER_CANVAS : 'Remover Canvas',
    VISUALIZAR_CANVAS : 'Visualizar Canvas',
    NENHUM_CANVAS : 'Nenhum Canvas criado, clique no bot\u00e3o acima para criar um agora mesmo.',
    // projeto-canvas/cadastrar.html
    VERSAO_LITE_LIMITADA : 'Vers\u00e3o lite limitada a um projeto. Para criar projetos ilimitados atualize para a vers\u00e3o Enterprise.',
    ATUALIZAR_VERSAO : 'Atualizar vers\u00e3o',
    VOLTAR : 'Voltar',
    NOME_DO_PROJETO : 'Nome do Projeto',
    DIGITE_NOME_PROJETO : 'Digite o nome do projeto...',
    BREVE_DESCRICAO : 'Breve Descri\u00e7\u00e3o',
    DIGITE_BREVE_DESCRICAO_PROJETO : 'Digite uma breve descri\u00e7\u00e3o do projeto...',
    CRIAR : 'Criar',
    // projeto-canvas/editar.html
    ATUALIZAR : 'Atualizar',
    // projeto-canvas/remover.html
    REMOVER : 'Remover',
    // canvas/cadastrar.html
    ADICIONAR_EM : 'Adicionar em',
    TITULO : 'T\u00edtulo',
    DIGITE_TITULO_ITEM : 'Digite um t\u00edtulo para o item...',
    DESCRICAO : 'Descri\u00e7\u00e3o',
    DIGITE_DESCRICAO_ITEM : 'Digite uma descri\u00e7\u00e3o para o item...',
    COR : 'Cor',
    ADICIONAR : 'Adicionar',
    // canvas/editar-remover.html
    EDITAR_REMOVER_EM : 'Editar / Remover em',
    // canvas/visualizar.html
    ADICIONAR_ITEM : 'Adicionar Item',
    EDITAR_REMOVER_ITEM : 'Editar | Remover Item',
    PARCEIROS : 'Parceiros',
    CHAVE : 'Chave',
    ATIVIDADES : 'Atividades',
    PROPOSTAS : 'Propostas',
    DE_VALOR : 'de Valor',
    RELACIONAMENTO : 'Relacionamento',
    COM_CLIENTES : 'com os Clientes',
    SEGMENTOS : 'Segmentos',
    DE_CLIENTES : 'de Clientes',
    RECURSOS : 'Recursos',
    EDITAR : 'Editar',
    // topicos da ajuda
    SEGMENTOS_CLIENTES : 'Segmentos de Clientes',
    PROPOSTAS_VALOR : 'Propostas de Valor',
    CANAIS : 'Canais',
    RELACIONAMENTO_CLIENTES : 'Relacionamento com os Clientes',
    RECURSOS_CHAVE : 'Recursos Chave',
    ATIVIDADES_CHAVE : 'Atividades Chave',
    PARCEIROS_CHAVE : 'Parceiros Chave',    
    ESTRUTURA_CUSTO : 'Estrutura de Custo',
    FLUXO_RECEITA : 'Fluxo de Receita',
    // enviar-por-email.html
    ENVIAR_EMAIL_1 : 'Enviar Canvas por email',
    ENVIAR_EMAIL_2 : 'Preencha o campo email e clique no bot\u00e3o ao lado do modelo canvas para envi\u00e1-lo para o email indicado.',
    ENVIAR_EMAIL_3 : 'Vers\u00e3o lite n\u00e3o permite o envio de emails. Para enviar os projetos por email atualize para a vers\u00e3o Enterprise.',
    ENVIAR_EMAIL_4 : 'Atualizar vers\u00e3o',
    ENVIAR_EMAIL_5 : 'Email (separe por v\u00edrgula para mais de um remetente)',
    ENVIAR_EMAIL_6 : 'Digite o seu email...',
    ENVIAR_EMAIL_7 : 'Gravar',
    ENVIAR_EMAIL_8 : 'Email enviado com sucesso!',
    ENVIAR_EMAIL_9 : 'Erro enviando email. Verifique a conex\u00e3o com a Internet e tente novamente.',
    ENVIAR_EMAIL_10 : 'Enviando email',
    ENVIAR_EMAIL_11 : 'Aguarde o envio do email...',
    ENVIAR_EMAIL_12 : 'Canvas de Modelo de Neg\u00f3cios',
    // ajuda/index.html
    AJUDA_TOPICO_1 : 'Sugest\u00e3o de ordem do preenchimento do Canvas de Modelo de Neg\u00f3cios.',
    AJUDA_TOPICO_2 : 'Embora n\u00e3o exista uma ordem definida \u00e0 ser utilizada para o preenchimento de um Canvas de Modelo de Neg\u00f3cios, sugerimos a sequencia abaixo, que possui um fluxo intuitivo de racioc\u00ednio para o correto preenchimento do Canvas.',
    // ajuda/segmento-clientes.html
    SC_1 : 'Para quem estamos criando valor?',
    SC_2 : 'Quem s\u00e3o nossos clientes mais importantes?',
    SC_3 : 'Mercado de massa',
    SC_4 : 'Nicho de mercado',
    SC_5 : 'Segmentado',
    SC_6 : 'Diversificado',
    // ajuda/propostas-valor.html
    PV_1 : 'Que valores n\u00f3s entregamos ao cliente?',
    PV_2 : 'Quais problemas dos nossos clientes estamos ajudando a resolver?',
    PV_3 : 'Quais pacotes de produtos e servi\u00e7os oferecemos a cada Segmento de Cliente?',
    PV_4 : 'Quais necessidades dos clientes estamos satisfazendo?',
    PV_5 : 'CARACTER\u00cdSTICAS:',
    PV_6 : 'Novidade',
    PV_7 : 'Performance',
    PV_8 : 'Personaliza\u00e7\u00e3o',
    PV_9 : 'Realizando os Trabalhos',
    PV_10 : 'Projeto',
    PV_11 : 'Marca/Status',
    PV_12 : 'Pre\u00e7o',
    PV_13 : 'Redu\u00e7\u00e3o de Custo',
    PV_14 : 'Redu\u00e7\u00e3o de Risco',
    PV_15 : 'Acessibilidade',
    PV_16 : 'Conveni\u00eancia/Usabilidade',
    // ajuda/canais.html
    CA_1 : 'Atrav\u00e9s de quais canais de nossos Segmentos de Clientes gostar\u00edamos de atingir?',
    CA_2 : 'Como podemos alcan\u00e7\u00e1-los agora?',
    CA_3 : 'Como os nossos Canais est\u00e3o integrados?',
    CA_4 : 'Quais funcionam melhor?',
    CA_5 : 'Quais tem melhor custo-benef\u00edcio?',
    CA_6 : 'Como estamos integrando-os \u00e0s rotinas do cliente?',
    CA_7 : 'FASES DO CANAL:',
    CA_8 : '1 - Conscientiza\u00e7\u00e3o',
    CA_9 : 'Como podemos aumentar a conscientiza\u00e7\u00e3o sobre os nossos produtos e servi\u00e7os?',
    CA_10 : '2 - Avalia\u00e7\u00e3o',
    CA_11 : 'Como podemos ajudar os clientes a avaliar a Proposta de Valor da nossa organiza\u00e7\u00e3o?',
    CA_12 : '3 - Compra',
    CA_13 : 'Como podemos permitir que os clientes comprem produtos e servi\u00e7os espec\u00edficos?',
    CA_14 : '4 - Entrega',
    CA_15 : 'Como entregaremos uma Proposta de Valor para nossos clientes?',
    CA_16 : '5 - P\u00f3s-venda',
    CA_17 : 'Como podemos oferecer suporte p\u00f3s-venda aos nossos clientes?',
    // ajuda/relacionamento-clientes.html
    RCL_1 : 'Que tipo de relacionamento temos com cada um de nossos Clientes?',
    RCL_2 : 'O que os segmentos esperam que possamos estabelecer e manter com eles?',
    RCL_3 : 'Quais deles n\u00f3s temos estabelecidos?',
    RCL_4 : 'Como eles est\u00e3o integrados com o restante do nosso modelo de neg\u00f3cio?',
    RCL_5 : 'Quanto caros eles s\u00e3o?',
    RCL_6 : 'EXEMPLOS:',
    RCL_7 : 'Assist\u00eancia pessoal',
    RCL_8 : 'Assist\u00eancia Pessoal Dedicada',
    RCL_9 : 'Self-Service',
    RCL_10 : 'Servi\u00e7os Automatizados',
    RCL_11 : 'Comunidades',
    RCL_12 : 'Co-cria\u00e7\u00e3o',
    // ajuda/recursos-chave.html
    RC_1 : 'Quais Recursos Chave nossa Proposta de Valor requer?',
    RC_2 : 'Nossos canais de distribui\u00e7\u00e3o?',
    RC_3 : 'Relacionamento com os Clientes?',
    RC_4 : 'Fontes de receita?',
    RC_5 : 'TIPOS DE RECURSOS:',
    RC_6 : 'F\u00edsico',
    RC_7 : 'Intelectual (patentes de marcas, direitos autorais, dados)',
    RC_8 : 'Humano',
    RC_9 : 'Financeiro',
    // ajuda/atividades-chave.html
    AC_1 : 'Quais Atividades Chave nossa Proposta de Valor exige?',
    AC_2 : 'Nossos Canais de Distribui\u00e7\u00e3o?',
    AC_3 : 'Relacionamento com o Cliente?',
    AC_4 : 'Fontes de receita?',
    AC_5 : 'CATEGORIAS:',
    AC_6 : 'Produ\u00e7\u00e3o',
    AC_7 : 'Resolu\u00e7\u00e3o de Problemas',
    AC_8 : 'Plataforma / Rede',
    // ajuda/parceiros-chave.html
    PC_1 : 'Quem s\u00e3o os nossos Parceiros Chave?',
    PC_2 : 'Quem s\u00e3o os nossos Fornecedores Chave?',
    PC_3 : 'Quais Recursos Chave estamos adquirindo de parceiros?',
    PC_4 : 'Quais Atividades Chave os parceiros realizam?',
    PC_5 : 'MOTIVA\u00c7\u00d5ES PARA PARCERIAS:',
    PC_6 : 'Otimiza\u00e7\u00e3o e economia',
    PC_7 : 'Redu\u00e7\u00e3o de risco e incerteza',
    PC_8 : 'Aquisi\u00e7\u00e3o de recursos particulares e atividades',
    // ajuda/estrutura-custo.html
    EC_1 : 'Quais s\u00e3o os custos mais importantes inerentes ao nosso modelo de neg\u00f3cio?',
    EC_2 : 'Quais s\u00e3o os Recursos Chave mais caros?',
    EC_3 : 'Quais s\u00e3o as Atividades Chave mais caras?',
    EC_4 : 'SEU NEG\u00d3CIO \u00c9 MAIS:',
    EC_5 : 'Guiado por Custos (estrutura de custo mais enxuta, proposta de valor de baixo pre\u00e7o, m\u00e1xima automa\u00e7\u00e3o, terceiriza\u00e7\u00e3o extensiva)',
    EC_6 : 'Guiado por Valor (focada na cria\u00e7\u00e3o de valor, proposta de valor premium)',
    EC_7 : 'EXEMPLOS DE CARACTER\u00cdSTICAS:',
    EC_8 : 'Custos Fixos (sal\u00e1rios, alugu\u00e9is, servi\u00e7os p\u00fablicos)',
    EC_9 : 'Custos Vari\u00e1veis',
    EC_10 : 'Economias de escala',
    EC_11 : 'Economias de escopo',
    // ajuda/fluxo-receita.html
    FR_1 : 'Por quais valores nossos clientes est\u00e3o realmente interessados em pagar?',
    FR_2 : 'Por quais eles pagam atualmente?',
    FR_3 : 'Como eles est\u00e3o pagando atualmente?',
    FR_4 : 'Como eles gostariam de pagar?',
    FR_5 : 'Como cada fluxo de receita contribui para a receita global?',
    FR_6 : 'TIPOS:',
    FR_7 : 'Venda de ativos',
    FR_8 : 'Taxa de utiliza\u00e7\u00e3o',
    FR_9 : 'Taxas de inscri\u00e7\u00e3o',
    FR_10 : 'Empr\u00e9stimos / Aluguel / Arrendamento',
    FR_11 : 'Licenciamento',
    FR_12 : 'Taxas de corretagem',
    FR_13 : 'Publicidade',
    FR_14 : 'PRE\u00c7OS FIXOS:',
    FR_15 : 'Pre\u00e7o de tabela',
    FR_16 : 'Produtos dependentes',
    FR_17 : 'Segmentos de Clientes dependentes',
    FR_18 : 'Volumes dependentes',
    FR_19 : 'PRECIFICA\u00c7\u00c3O DIN\u00c2MICA:',
    FR_20 : 'Negocia\u00e7\u00e3o (barganha)',
    FR_21 : 'Gest\u00e3o de Rendimentos',
    FR_22 : 'Mercado em Tempo Real'
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