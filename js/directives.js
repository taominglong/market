angular.module("ionicApp.directives", [])

/**价格指令**/
.directive("price", function($templateCache) {
    return {
        restrict: 'AECM',
        templateUrl: "templates/market/price.html",
        replace: true,
        link : function(scope,element,attrs){
        	/**绑定减少事件**/
        	$(element.children()[0]).bind("click", function(){
                var input = $(element.children()[1]);
                if(""==input.val()){
                    return;
                }else{
                    var value = parseInt(input.val()) > 0 ? (parseInt(input.val()) -1) : 0;
                    input.val(value == "" ? 0 : value);
                    scope.$apply("calculatePrice("+ attrs.goodId +","+ value +")");
                }
            });
            /**重新计算价格与数量**/
            $(element.children()[1]).bind("change", function(goodid){
                var input = $(element.children()[1]);
                var value = 0;
                if(input.val() == ""){
                    input.val(0);
                }else{
                    try{
                        value = parseInt(input.val());
                    }catch(Error){
                        input.val(0);
                        value = 0;
                    }
                   
                }
                scope.$apply("calculatePrice("+ attrs.goodId +","+ value +")");
            });

            /**绑定新增事件**/
            $(element.children()[2]).bind("click", function(){
               var input = $(element.children()[1]);
               if(""==input.val()){
                    return;
                }else{
                    var value = parseInt(input.val()) + 1
                    input.val(value);                   
                    scope.$apply("calculatePrice("+ attrs.goodId +","+ value +")");
                }
            });
            
        }
    }
});