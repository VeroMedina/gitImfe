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
  public List<ItemModel> searchService(ItemModel obj) throws Exception
  {
      List<ItemModel> y = iMapper.searchMapper(obj);
      
      return y;
  }
  
  @Override
  public List<ItemModel> searchAllService(ItemModel obj) throws Exception
  {
      List<ItemModel> y = iMapper.searchAllMapper(obj);
      
      return y;
  }
}
