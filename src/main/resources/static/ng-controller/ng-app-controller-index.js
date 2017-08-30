app.controller('ng-app-controller-template2', ["$scope", function ($scope)
  {
    console.log('2');
    $scope.mensaje = "Texto cargado desde el controlador Pagina2Controller";
    $scope.mensaje2= "Mensaje de prueba 2";
    $scope.mensaje3= "Mensaje de prueba 3";
    
    $scope.fnc=function(){
        return "hola";
    };
  }]);