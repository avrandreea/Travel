package com.travel.resources;

import com.codahale.metrics.annotation.Timed;
import com.travel.dao.AutocompleteDao;
import com.travel.model.AutocompleteEntity;
import io.dropwizard.hibernate.UnitOfWork;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

//import org.hibernate.Query;

/**
 * Created by andreea.avram on 13.11.2015.
 */
@Path("/dest")
@Produces(MediaType.APPLICATION_JSON)
public class TestResource {

    AutocompleteDao dao;

    public TestResource(AutocompleteDao dao) {
        this.dao = dao;
    }

    @GET
    @Timed
    @UnitOfWork
    public List<AutocompleteEntity> findAllDest() {
      return dao.findAll();
    }

}

