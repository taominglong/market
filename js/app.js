angular.module('ionicApp', ['ionic','ionicApp.controllers','ionicApp.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.platform.ios.tabs.style('standard'); 
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

  $ionicConfigProvider.platform.ios.views.transition('ios'); 
  $ionicConfigProvider.platform.android.views.transition('android');
  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    /** 主页 **/
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home/home.html",
          controller: 'HomeTabController'
        }
      }
    })
    /** 商城 **/
    .state('tabs.market', {
      url: "/market",
      views: {
        'market-tab': {
          templateUrl: "templates/market/market.html",
          controller: 'MarketTabController'
        }
      }
    })
    /** 品牌导航栏 **/
    .state('tabs.brand', {
      url: "/market/:id",
      views: {
        'market-tab': {
          templateUrl: "templates/market/market.html",
          controller: 'MarketTabController'
        }
      }
    })
    /** 商品详情页 **/
    .state('tabs.good', {
      url: "/good/{id}",
      views: {
        'market-tab': {
          templateUrl: "templates/market/market.html",
          controller: 'MarketProductController'
        }
      }
    })
    /** 购物车 **/
    .state('tabs.cart', {
      url: "/cart",
      views: {
        'cart-tab': {
          templateUrl: "templates/cart/cart.html",
          controller: 'CartTabController'
        }
      }
    })
    /** 我的 **/
    .state('tabs.my', {
      url: "/my",
      views: {
        'my-tab': {
          templateUrl: "templates/my/my.html",
          controller: 'MyTabController'
        }
      }
    });

   /** 默认进图主页 **/
   $urlRouterProvider.otherwise("/tab/home");

});
