app.controller('ng-app-controller-search', 
['$scope', '$http','$timeout', function ($scope,$http,$timeout)
  {
   var timer=null;
   
   $scope.search=function(e)
   {
       var val=e.target.value;
       
       $timeout.cancel(timer);
       
       timer=$timeout (function()
       {
            $http.post('/search', //nombre del controlador
              {
                 nombre: val //Envio la propiedad nombre del obj al controlador java /search

              })
              .then(function (response)
              {
                  var data=response.data;
                  $scope.bbdd=data;

              });
          },2000);
    };
  }]);
  

