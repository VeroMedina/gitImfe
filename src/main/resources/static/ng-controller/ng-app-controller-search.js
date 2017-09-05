app.controller('ng-app-controller-search', 
['$scope', '$http','$timeout', function ($scope,$http,$timeout)
  {     
        
            /**************************************************************************
         * 
         * CONFIG
         * 
         **************************************************************************//**
         
         * * Json para obtener la id contador y definir uso de clase notfound
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
        
         var timer=null;
        
          /**************************************************************************
         * 
         * INICIO
         * 
         **************************************************************************/
         
        /**
         * Funcion para que se muestre todos los items por defecto
         * @param {type} e -> no recibe ningun parametro
         * @return {undefined} devuelve todos los items con sus atributos
         */
        (function() 
        {
            $http.post('/searchAll',{}) //nombre del controlador
            .then(function (response)
            {
                var data=response.data;
                               
                $scope.bbdd=data; //Envio datos al html
                contador(data); //Ejecuto funcion para numero de items en la lupa

            });       

        })();
        
          /**************************************************************************
         * 
         * PRIVATE FUNCTION
         * 
         **************************************************************************/
        
        //
      /**
       * Funcion para mostrar items segun busqueda ya sea una busqueda mediante cadena o numero
       * @param {type} e -> recibe el parametro del input del formulario
       * @return {undefined} -> devuelve todos los items con sus atributos
       */

       $scope.search=function(e) 
       {
           var val=e.target.value;

           $timeout.cancel(timer);

           timer=$timeout (function()
           {
                $http.post(isNaN(val)?"/searchCadena" : "/searchNumero",//si el valor pasado es numero devuelve false sino true
                  {
                     nombre: val, //Envio la propiedad nombre del obj al controlador java /search
                     descripcion:val, //Envio la propiedad descripcion del obj al controlador java /search
                     peso:val //Envio la propiedad descripcion del obj al controlador java /searchNumero o /searchCadena

                  })
                  .then(function (response)
                  {
                      var data = response.data;
                                           
                      $scope.bbdd=data; //Envio datos al html
                      
                      contador(data); //Ejecuto funcion para numero de items en la lupa
                  
                  });
            },2000);
        };
        
        /**
         * Función para contar los items y que aparezca el numero en la lupa del buscador, si el numero es cero se cambia la clase del elemento y se pone en rojo
         * @param {type} data
         * @return {undefined}
         */
       function contador (data)
       {
           
           var cont = data.length;
           
           if (cont === 0)
                {
                    items.elemento.classList.add(items.style.classNotFound); //añadimos clase al elemento
                           
                }
                else if(items.elemento.classList.contains(items.style.classNotFound)) //Si el elemento contiene esa clase
                {
                    items.elemento.classList.remove(items.style.classNotFound); //la quitamos
                }  
                    
            $scope.contador = cont;
       };
       
       
       
       
        
        
  }]);
  

