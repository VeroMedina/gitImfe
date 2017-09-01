/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lab.persistence.mapper;

import com.lab.persistence.model.ItemModel;
import java.util.List;

/**
 *
 * @author Lenovo
 */
public interface ItemMapper 
{
    public List<ItemModel> searchMapper (ItemModel obj) throws Exception;
    public List<ItemModel> searchAllMapper (ItemModel obj) throws Exception;
}
