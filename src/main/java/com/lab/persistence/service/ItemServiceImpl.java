/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lab.persistence.service;

import com.lab.persistence.mapper.ItemMapper;
import com.lab.persistence.model.ItemModel;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.regex.Pattern;

/**
 *
 * @author Lenovo
 */
@Service
public class ItemServiceImpl implements ItemService
{
     @Autowired
    ItemMapper iMapper;
     
  @Override
  public List<ItemModel> searchAllService(ItemModel obj) throws Exception
  {
      List<ItemModel> y = iMapper.searchAllMapper(obj);
      
      return y;
  }   
     
  @Override
  public List<ItemModel> searchCadenaService(ItemModel obj) throws Exception
  {
      List<ItemModel> y = iMapper.searchCadenaMapper(obj);
 
      List<ItemModel> lista = this.replace(obj,y); //Ejecutamos metodos y le pasamos lo requerido por el metodo
      
      return lista;
      
      
  }
  
  
    @Override
    public List<ItemModel> searchNumeroService(ItemModel obj) throws Exception 
    {
        List<ItemModel> y = iMapper.searchNumeroMapper(obj);
      
      return y;
    }
    
    /**
     * Metodo que recibe el objeto buscado y la lista de los objetos buscados
     * @param obj -> nombre buscado
     * @param y -> lista de objetos buscados con todos sus propiedades
     * @return  -> devuelve la lista de los objetos buscados pero con su estilo cambiado
     */
    public List<ItemModel> replace (ItemModel obj, List<ItemModel>y)
    {
         for (int i = 0, max = y.size(); i < max; i++) 
        {
            //Reemplazamos el nombre buscado
            y.get(i).setNombre(
                    this.pattern(obj.getNombre())
                            .matcher(y.get(i).getNombre())
                            .replaceAll(this.patternReplace(obj.getNombre()))
            );
            y.get(i).setDescripcion(
                    this.pattern(obj.getDescripcion())
                            .matcher(y.get(i).getDescripcion())
                            .replaceAll(this.patternReplace(obj.getDescripcion()))
            );
        }
      
         return y;
    }
    
        private Pattern pattern(String x)
        {
          return Pattern.compile("(?i)" + x);
        }

        private String patternReplace(String x)
        {
          return "<strong class=\"searchSubrayado\">" + x + "</strong>";
        }

}
    
    

