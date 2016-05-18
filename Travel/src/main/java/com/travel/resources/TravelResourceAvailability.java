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

/**
 * Created by andreea.avram on 02.11.2015.
 */

@Path("/avail")
@Produces(MediaType.APPLICATION_JSON)
public class TravelResourceAvailability {

    private TravelConfiguration configuration;

    public TravelResourceAvailability(TravelConfiguration configuration) {
        this.configuration = configuration;
    }

    @GET
    @Timed
    public String methodGET(@QueryParam("city") String city,
                            @QueryParam("hotelId") String hotelId,
                            @QueryParam("arrivalDate") String arrivalDate,
                            @QueryParam("departureDate") String departureDate,
                            @QueryParam("includeDetails") String includeDetails,
                            @QueryParam("includeRoomImages") String includeRoomImages,
                            @QueryParam("callback") String callback
    ) {

        Map<String, String> mapParam = new HashMap<>();
        mapParam.put("city", city);
        mapParam.put("hotelId", hotelId);
        mapParam.put("arrivalDate", arrivalDate);
        mapParam.put("departureDate", departureDate);
        mapParam.put("includeDetails", includeDetails);
        mapParam.put("includeRoomImages", includeRoomImages);
        mapParam.put("callback", callback);

        return HttpClient.getHttpReguest(configuration.getRestConfig().getEndpoint(),
                configuration.getRestConfig().getAvailPath(), configuration.getRestConfig().getCID(),
                configuration.getRestConfig().getMinorRev(), configuration.getRestConfig().getApiKey(), mapParam);
    }
}
