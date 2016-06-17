package com.travel.resources;

import com.codahale.metrics.annotation.Timed;
import com.travel.TravelConfiguration;
import com.travel.client.HttpClient;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.Map;

@Path("/list")
@Produces(MediaType.APPLICATION_JSON)
public class TravelResourceList {

    private TravelConfiguration configuration;

    public TravelResourceList(TravelConfiguration configuration) {
        this.configuration = configuration;
    }

    @GET
    @Timed
    public String methodGET(@QueryParam("city") String city,
                            @QueryParam("arrivalDate") String arrivalDate,
                            @QueryParam("departureDate") String departureDate,
                            @QueryParam("room1") String room1,
                            @QueryParam("callback") String callback
    ) {

        /*
        A $http.jsonp('http://example.com/example.json?callback=JSON_CALLBACK') call in AngularJS changes the actual call to http://example.com/example.json?callback=angular.callbacks._0.
        A hardcoded JSONP Prefix to JSON_CALLBACK wouldn't work in this case and an javascript error Uncaught ReferenceError: JSON_CALLBACK is not defined is thrown.
         */
        Map<String, String> mapParam = new HashMap<>();
        mapParam.put("city", city);
        mapParam.put("arrivalDate", arrivalDate);
        mapParam.put("departureDate", departureDate);
        mapParam.put("room1", room1);
        mapParam.put("callback", callback);

        return HttpClient.getHttpReguest(configuration.getRestConfig().getEndpoint(),
                configuration.getRestConfig().getListPath(), configuration.getRestConfig().getCID(),
                configuration.getRestConfig().getMinorRev(), configuration.getRestConfig().getApiKey(), mapParam);
    }
}

