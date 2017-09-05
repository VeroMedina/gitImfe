package com.lab.controllers;


import com.lab.persistence.model.ItemModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.lab.persistence.service.ItemService;
import java.util.List;

@Controller
public class Item
{
    @Autowired
    ItemService iService;
    
    @ResponseBody
    @RequestMapping(value = "/searchCadena",
                  method = RequestMethod.POST,
                  produces = MediaType.APPLICATION_JSON_VALUE) //vamos a usar Json
  public List<ItemModel> searchCadena(@RequestBody ItemModel obj) throws Exception
  {
        
      List<ItemModel> y = iService.searchCadenaService(obj);

      return y;
    
  }
  
  @ResponseBody
    @RequestMapping(value = "/searchAll",
                  method = RequestMethod.POST,
                  produces = MediaType.APPLICATION_JSON_VALUE) //vamos a usar Json
  public List<ItemModel> searchAll(@RequestBody ItemModel obj) throws Exception
  {
        
      List<ItemModel> y = iService.searchAllService(obj);

      return y;
    
  }
  
  @ResponseBody
    @RequestMapping(value = "/searchNumero",
                  method = RequestMethod.POST,
                  produces = MediaType.APPLICATION_JSON_VALUE) //vamos a usar Json
  public List<ItemModel> searchNumero(@RequestBody ItemModel obj) throws Exception
  {
        
      List<ItemModel> y = iService.searchNumeroService(obj);

      return y;
    
  }
    
    
    
    
    
}

