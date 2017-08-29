app.controller('ng-app-controller-template1', ['$scope', '$http', function ($scope,
  $http)
  {
    console.log('1');
    $scope.mensaje = 'Texto cargado desde el controlador Pagina1Controller';

    $http.post('/test', //nombre del controlador
    {
      propiedad: 'hello',
      table: 'vero'
    })
    .then(function (response)
    {
      console.log(response.data);
      
                    for (var i = 0, max = response.data.length; i < max; i++) 
                    {
                        console.log(response.data[i].table);
                        $scope.mensaje+=response.data[i].table;
                    }
      
    });

  }]);
  
  