angular.module('ionicApp.controllers', [])

.controller('NavController', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.brands = [
    {'id':1,'name':'联想','icon':'ion-email'},
    {'id':2,'name':'苹果','icon':'ion-email'},
    {'id':3,'name':'三星','icon':'ion-email'},
    {'id':4,'name':'索尼','icon':'ion-email'},
    {'id':5,'name':'华为','icon':'ion-email'}
  ];
})
/**主页**/
.controller('HomeTabController', function($scope) {
  $scope.css = {listType : "item item-image",icon: "ion-android-apps"};
  //列表数据
  $scope.topics = [
    {'id':1,'name':'倩女幽魂','position':'《倩女幽魂》翻拍自1960年邵氏出品的同名影片，由徐克监制、程小东导演，张国荣、王祖贤、午马等主演。','img':'img/2.jpg','praise':106,'ispraise':true,'store':true},
    {'id':2,'name':'春光乍泄','position':'《春光乍泄》是由王家卫执导,张国荣 、梁朝伟、 张震主演的文艺片。','img':'img/22.jpg','praise':98,'ispraise':false,'store':false},
    {'id':3,'name':'东邪西毒','position':'《东邪西毒》是一部1994年出品的香港武侠电影,改编自金庸小说《射雕英雄传》,由王家卫执导,张国荣、林青霞、梁家辉、张曼玉等主演。','img':'img/33.jpg','praise':20,'ispraise':true,'store':true},
    {'id':4,'name':'纵横四海','position':'《纵横四海》是吴宇森执导的一部枪战片,由周润发、张国荣、钟楚红主演。','img':'img/44.jpg','praise':98,'ispraise':false,'store':false},
    {'id':5,'name':'霸王别姬','position':'《霸王别姬》是汤臣电影有限公司出品的文艺片，该片改编自李碧华的同名小说，由陈凯歌执导，李碧华、芦苇编剧；张国荣、巩俐、张丰毅领衔主演。','img':'img/55.jpg','praise':45,'ispraise':false,'store':true},
    {'id':6,'name':'AAAAA','position':'','img':'img/66.jpg','praise':18,'ispraise':false,'store':false},
    {'id':7,'name':'BBBBB','position':'','img':'img/11.jpg','praise':39,'ispraise':true,'store':false}
  ];
  //切换展示样式
  $scope.changeCss = function(){
    if("square" == $scope.css.listType){
      $scope.css = {listType : "item item-image",icon: "ion-android-apps"};
    }else{
      $scope.css = { listType : "square",icon: "ion-social-buffer-outline"};
    }  
  };
  //点赞||取消点赞
  $scope.praise = function(id){
    var topics = $scope.topics;
    for(var i=0;i<topics.length;i++){
      if(topics[i].id == id){
        $scope.topics[i].ispraise = !$scope.topics[i].ispraise;
        if( $scope.topics[i].ispraise){
          $scope.topics[i].praise += 1;
        }else{
          $scope.topics[i].praise -= 1;
        }
        break;
      }
    }
  };
  //收藏||取消收藏
  $scope.strore = function(id){
    var topics = $scope.topics;
    for(var i=0;i<topics.length;i++){
      if(topics[i].id == id){
        $scope.topics[i].store = !$scope.topics[i].store;
        break;
      }
    }
  };
})
/**商城**/
.controller('MarketTabController', function($scope, $ionicModal, $stateParams) {
  console.dir($stateParams);
  $scope.goods = [
    {'id':1,'model':'苹果6S PLUS-A1699（64G灰）','price':6175,'img':'img/1.jpg','quantity':0},
    {'id':2,'model':'苹果6S PLUS-A1699（64G灰）','price':6175,'img':'img/2.jpg','quantity':0},
    {'id':3,'model':'苹果6S PLUS-A1699（64G灰）','price':6175,'img':'img/3.jpg','quantity':0},
    {'id':4,'model':'苹果6S PLUS-A1699（64G灰）','price':6175,'img':'img/4.jpg','quantity':0},
	  {'id':5,'model':'苹果6S PLUS-A1699（64G灰）','price':6175,'img':'img/logo1.jpg','quantity':0},
    {'id':6,'model':'苹果6S PLUS-A1699（64G灰）','price':6175,'img':'img/logo1.jpg','quantity':0},
    {'id':7,'model':'苹果6S PLUS-A1699（64G灰）','price':6175,'img':'img/logo1.jpg','quantity':0}
  ];

  $scope.calculatePrice = function(goodid,quality){
    var q = 0, p = 0;
    angular.forEach($scope.goods, function(s){
      if(goodid == s.id){
        s.quantity = quality;
      }
      q += s.quantity;
      p += s.quantity * s.price;
    })
    $scope.summary = { quantity:q, totalprice:p };
  };

  $ionicModal.fromTemplateUrl('templates/market/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
     console.log("modal.destroy");
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
    console.log("modal.hidden");
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
     console.log("modal.removed");
  });
})
/**商品详情**/
.controller('MarketProductController', function($scope, $stateParams,$ionicModal) {
  
})
/**购物车**/
.controller('CartTabController', function($scope) {
   $scope.products = [
    {id: 1,name: '洗衣机', quantity: 1, price: 200, picture: 'img/logo.jpg',checked:false},
    {id: 2,name: '电视机', quantity: 5, price: 2518, picture: 'img/logo1.jpg',checked:false},
    {id: 3,name: '电冰箱', quantity: 2, price: 6184, picture: 'img/ionic.png',checked:false}
  ];
  /**初始数据**/
  $scope.statistics={"allChecked" : false,"totalprice" : 0};
  /**详情**/
  $scope.showDetail = function(id){

  };
  /**全选**/
  $scope.checkALl = function(){
    var allChecked = $scope.statistics.allChecked;
    if(allChecked){
      angular.forEach($scope.products,function(s){
        s.checked = true;
        $scope.statistics.totalprice += s.quantity * s.price;
      });
    }else{
      angular.forEach($scope.products,function(s){s.checked = false;});
      $scope.statistics.totalprice = 0;
    }
  };
  /**单选**/
  $scope.checkItem = function(){
    var ac = true, q = 0;
    angular.forEach($scope.products,function(s){
        if(s.checked){
        q += s.quantity * s.price;
      }else{
        ac = false;
      }
    });
    $scope.statistics={"allChecked" : ac,"totalprice" : q};
  }
  /**删除**/
  $scope.remove = function(product) {
    $scope.products.splice($scope.products.indexOf(product), 1);
    var ac = true, q = 0;
    angular.forEach($scope.products,function(s){
        if(s.checked){
        q += s.quantity * s.price;
      }else{
        ac = false;
      }
    });
    $scope.statistics={"allChecked" : $scope.products.length == 0 ? false : ac,"totalprice" :  q};
  };

})

/**我的**/
.controller('MyTabController', function($scope) {
  
}); 