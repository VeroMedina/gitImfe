app.controller('ng-app-controller-search', 
['$scope', '$http','$timeout', function ($scope,$http,$timeout)
  {
        (function() //funcion para que se muestre todos los dulces sin buscar nada
        {
            $http.post('/searchAll', //nombre del controlador
            {


            })
            .then(function (response)
            {
                var data=response.data;

                $scope.bbdd=data;
                
                //Envio la cuenta de los items
                var cont=response.data.length;
                $scope.contador=cont;

            })       

        })();

       var timer=null;

       $scope.search=function(e) //funcion para mostrar dulces segun busqueda
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
                      
                       //Envio la cuenta de los items
                      var cont=response.data.length;
                      $scope.contador=cont;
                      

                  });
            },2000);
        };
  }]);
  

