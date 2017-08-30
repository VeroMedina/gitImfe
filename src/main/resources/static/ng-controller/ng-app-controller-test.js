app.controller('ng-app-controller-test', 
['$scope', '$http','$timeout', function ($scope,$http,$timeout)
  {
    $scope.testOk=false;
    
    $scope.test=function()
    {
        $http.post('/test', //nombre del controlador
        {
           table: 'propiedad del objeto'

        })
        .then(function (response)
        {
            var data=response.data;
            
            $scope.testOk=true;
            $scope.bbdd=data;
            
            $timeout(function()
            {
                $scope.testOk=false;
                
            },5000);
            

        });
    };
  }]);
  
  