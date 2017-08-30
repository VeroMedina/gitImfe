app.controller('ng-app-controller-test', ['$scope', '$http', function ($scope,
  $http)
  {
    console.log('1');
    $scope.mensaje = 'Texto cargado desde el controlador "controller test" ';
    
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
  
  