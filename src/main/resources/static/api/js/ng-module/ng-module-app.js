var app = angular.module('app', ['ngRoute']); //Genero modulo

app.config(['$routeProvider', '$locationProvider', function ($routeProvider,
  $locationProvider)
  {
//    $locationProvider.html5Mode(true);


    $routeProvider.otherwise(
    {
      redirectTo: '/'
    })
    
    .when('/',
    {
      templateUrl: GBL_COFG.urlTemplate('inicio.html')
    })

    .when('/info',
    {
      templateUrl: GBL_COFG.urlTemplate('info.html'),
      
    })

    .when('/test',
    {
      templateUrl: GBL_COFG.urlTemplate('test.html'),
      controller: 'ng-app-controller-test'
    });
  }]);

app.directive('apploading', ['$http', function ($http)
  {
    var loading =
    {
      restrict: 'A',
      link: function (scope, elm, attrs)
      {
        scope.isLoading = function ()
        {
          return $http.pendingRequests.length > 0;
        };

        scope.$watch(scope.isLoading, function (v)
        {
          //console.log(JSON.stringify(elm) + ' ' + JSON.stringify(attrs))
          if (v)
          {
            elm[0].classList.add('appLoading');
          }
          else
          {
            elm[0].classList.remove('appLoading');
          }
        });
      }
    };

    return loading;
  }]);


