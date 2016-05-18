package com.travel;

import com.travel.dao.AutocompleteDao;
import com.travel.model.AutocompleteEntity;
import com.travel.resources.TestResource;
import com.travel.resources.TravelResourceAvailability;
import com.travel.resources.TravelResourceBooking;
import com.travel.resources.TravelResourceList;
import io.dropwizard.Application;
import io.dropwizard.db.DataSourceFactory;
import io.dropwizard.hibernate.HibernateBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.eclipse.jetty.servlets.CrossOriginFilter;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.util.EnumSet;

/**
 * Created by andreea.avram on 29.10.2015.
 */
public class TravelApplication extends Application<TravelConfiguration> {

    public static void main(String[] args) throws Exception {
        new TravelApplication().run(args);
    }

    private final HibernateBundle<TravelConfiguration> hibernate = new HibernateBundle<TravelConfiguration>(AutocompleteEntity.class) {
        @Override
        public DataSourceFactory getDataSourceFactory(TravelConfiguration configuration) {
            return configuration.getDataSourceFactory();
        }
    };

    @Override
    public void initialize(Bootstrap<TravelConfiguration> bootstrap) {
        bootstrap.addBundle(hibernate);
    }

    @Override
    public void run(TravelConfiguration configuration,
                    Environment environment) {

        final AutocompleteDao dao = new AutocompleteDao(hibernate.getSessionFactory());
        environment.jersey().register(new TestResource(dao));

        final TravelResourceList resourceList = new TravelResourceList(configuration);
        final TravelResourceAvailability resourceAvailability = new TravelResourceAvailability(configuration);
        final TravelResourceBooking resourceBooking = new TravelResourceBooking(configuration);


        environment.jersey().register(resourceList);
        environment.jersey().register(resourceAvailability);
        environment.jersey().register(resourceBooking);



        // Enable CORS headers
        final FilterRegistration.Dynamic cors =
                environment.servlets().addFilter("CORS", CrossOriginFilter.class);

        // Configure CORS parameters
        cors.setInitParameter("allowedOrigins", "*");
        cors.setInitParameter("allowedHeaders", "X-Requested-With,Content-Type,Accept,Origin");
        cors.setInitParameter("allowedMethods", "OPTIONS,GET,PUT,POST,DELETE,HEAD");

        // Add URL mapping
        cors.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");
    }

}
