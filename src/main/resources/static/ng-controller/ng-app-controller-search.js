app.controller('ng-app-controller-search', 
['$scope', '$http','$timeout', function ($scope,$http,$timeout)
  {     
        /**
         * Json para obtener la id contador y definir uso de clase notfound
         * @type type
         */
        var items=
                {
                    elemento: document.querySelector ('#contador'),
                    style:
                            {
                                classNotFound: 'notFound'
                            }
                };
                
                
        //funcion para que se muestre todos los dulces sin buscar nada
        (function() 
        {
            $http.post('/searchAll',{}) //nombre del controlador
            .then(function (response)
            {
                var data=response.data;

                $scope.bbdd=data;
                
                //Envio la cuenta de los items
                var cont=data.length;
                $scope.contador=cont;

            });       

        })();
        
        //funcion para mostrar dulces segun busqueda
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
                      var data = response.data;
                      var cont = data.length;   //Envio la cuenta de los items
                      
                      $scope.bbdd     = data;
                      $scope.contador = cont;
                      
                      console.log("antes"+cont);
                      
                      
                      
                      if (cont === 0)
                      {
                         items.elemento.classList.add(items.style.classNotFound);
                           console.log("dentro if"+cont); 
                      }
                      else if(items.elemento.classList.contains(items.style.classNotFound))
                      {
                         items.elemento.classList.remove(items.style.classNotFound);
                      }  
                    
                        
                         console.log("fuera if"+cont); console.log(items.elemento);
                         
                    
                      

                  });
            },2000);
        };
        
       
        
        
  }]);
  

