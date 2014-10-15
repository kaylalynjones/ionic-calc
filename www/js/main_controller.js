(function(){
  'use strict';

  angular.module('kj-calculator')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.number = function(num){
      var dis = $scope.display;
      num += '';

      if(dis === '0'){
        dis = num;
      }else{
        dis += num;
      }
      $scope.display = dis;

    };

    $scope.symbol = function(symbol){
      var dis = $scope.display;

      if ($scope.display === '0'){
        if(symbol !== '-'){
          return;
        } else {
          $scope.display = symbol;
          return;
        }
      }

      if (dis[dis.length -1] === '-' ||
          dis[dis.length -1] === '+' ||
          dis[dis.length -1] === '*' ||
          dis[dis.length -1] === '/'){
            $scope.display[$scope.display.length -1] = symbol;
          } else {
            $scope.display += symbol;
          }
    };

    $scope.decimal = function(){
      if($scope.display.indexOf('.') === -1){
        $scope.display += '.';
      }
    };

    $scope.calc = function(){
      var result = eval($scope.display);
      if (typeof result === 'number'){
        $scope.display = result;
      }
    };

    $scope.clear = function(){
      $scope.display = '0';
    };

    $scope.clear();
  }]);
})();
