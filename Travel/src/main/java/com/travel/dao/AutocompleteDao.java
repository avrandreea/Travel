package com.travel.dao;

import com.travel.model.AutocompleteEntity;
import io.dropwizard.hibernate.AbstractDAO;
import org.hibernate.SessionFactory;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by andreea.avram on 13.11.2015.
 */
public class AutocompleteDao extends AbstractDAO<AutocompleteEntity> {
    public AutocompleteDao(SessionFactory factory) {
        super(factory);
    }

    public long create(AutocompleteEntity autocomplete) {
        return persist(autocomplete).getId();
    }

    public AutocompleteEntity getEntity(String id) {
        return get(id);
    }

    public List<AutocompleteEntity> findAll(){
        return list(namedQuery("AutocompleteEntity.findAllDest"));
    }

}
