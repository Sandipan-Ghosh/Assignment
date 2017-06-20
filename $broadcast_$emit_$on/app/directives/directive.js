// module.directive('bold', function() {
// var directive = {};
// directive.restrict = 'A';
                      
// directive.compile = function(element, attributes) {
//     element.css("border", "1px solid #cccccc");
               
//     var linkFunction = function($scope, element, attributes) {
//         element[0].setAttribute("style","font-weight:bold");
//         element.css("background-color", "#ff00ff");
//     }
//     return linkFunction;
// }        
//     return directive;
// });
// module.directive('vanish',function(){
//     var directive = {};
//     directive.restrict = 'A';
//     directive.replace = true;

    
//     directive.compile = function(element,attributes){
//         var linkFunction = function($scope, element, attributes){
//             $scope.switched = false;
//         //hover handler
//         $scope.hoverItem = function(hovered){
//             if (hovered) {
//                 element.addClass('hover');
//                 element[0].setAttribute("style", "opacity:0.5");
//             }
//             else{
//                 element.removeClass('hover');
//                  element[0].setAttribute("style", "opacity:1");
//             }
//         };
//     }
//         return linkFunction;
//     }
//         return directive;
// });