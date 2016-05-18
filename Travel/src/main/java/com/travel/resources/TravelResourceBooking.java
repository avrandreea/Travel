package com.travel.resources;

import com.codahale.metrics.annotation.Timed;
import com.travel.TravelConfiguration;
import com.travel.client.HttpClient;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by andreea.avram on 05.11.2015.
 */

@Path("/res")
@Produces(MediaType.APPLICATION_JSON)
public class TravelResourceBooking {
    private TravelConfiguration configuration;

    public TravelResourceBooking(TravelConfiguration configuration) {
        this.configuration = configuration;
    }

    @POST
    @Timed
    public String methodPOST(@QueryParam("hotelId") String hotelId,
                             @QueryParam("arrivalDate") String arrivalDate,
                             @QueryParam("departureDate") String departureDate,
                             @QueryParam("supplierType") String supplierType,
                             @QueryParam("rateKey") String rateKey,
                             @QueryParam("roomTypeCode") String roomTypeCode,
                             @QueryParam("rateCode") String rateCode,
                             @QueryParam("chargeableRate") String chargeableRate,
                             @QueryParam("room1") String room1,
                             @QueryParam("room1FirstName") String room1FirstName,
                             @QueryParam("room1LastName") String room1LastName,
                             @QueryParam("room1BedTypeId") String room1BedTypeId,
                             @QueryParam("room1SmokingPreference") String room1SmokingPreference,
                             @QueryParam("email") String email,
                             @QueryParam("firstName") String firstName,
                             @QueryParam("lastName") String lastName,
                             @QueryParam("homePhone") String homePhone,
                             @QueryParam("workPhone") String workPhone,
                             @QueryParam("creditCardType") String creditCardType,
                             @QueryParam("creditCardNumber") String creditCardNumber,
                             @QueryParam("creditCardIdentifier") String creditCardIdentifier,
                             @QueryParam("creditCardExpirationMonth") String creditCardExpirationMonth,
                             @QueryParam("creditCardExpirationYear") String creditCardExpirationYear,
                             @QueryParam("address1") String address1,
                             @QueryParam("city") String city,
                             @QueryParam("stateProvinceCode") String stateProvinceCode,
                             @QueryParam("countryCode") String countryCode,
                             @QueryParam("postalCode") String postalCode,
                             @QueryParam("callback") String callback


    ) {

        Map<String, String> mapParam = new HashMap<>();
        mapParam.put("hotelId", hotelId);
        mapParam.put("arrivalDate", arrivalDate);
        mapParam.put("departureDate", departureDate);
        mapParam.put("supplierType", supplierType);
        mapParam.put("rateKey", rateKey);
        mapParam.put("roomTypeCode", roomTypeCode);
        mapParam.put("rateCode", rateCode);
        mapParam.put("chargeableRate", chargeableRate);
        mapParam.put("room1", room1);
        mapParam.put("room1FirstName", room1FirstName);
        mapParam.put("room1LastName", room1LastName);
        mapParam.put("room1BedTypeId", room1BedTypeId);
        mapParam.put("room1SmokingPreference", room1SmokingPreference);
        mapParam.put("email", email);
        mapParam.put("firstName", firstName);
        mapParam.put("lastName", lastName);
        mapParam.put("homePhone", homePhone);
        mapParam.put("workPhone", workPhone);
        mapParam.put("creditCardType", creditCardType);
        mapParam.put("creditCardNumber", creditCardNumber);
        mapParam.put("creditCardIdentifier", creditCardIdentifier);
        mapParam.put("creditCardExpirationMonth", creditCardExpirationMonth);
        mapParam.put("creditCardExpirationYear", creditCardExpirationYear);
        mapParam.put("address1", address1);
        mapParam.put("city", city);
        mapParam.put("stateProvinceCode", stateProvinceCode);
        mapParam.put("countryCode", countryCode);
        mapParam.put("postalCode", postalCode);
        mapParam.put("callback", callback);

        return HttpClient.postHttpReguest(configuration.getRestConfig().getEndpointhttps(),
                configuration.getRestConfig().getBookingPath(), configuration.getRestConfig().getCID(),
                configuration.getRestConfig().getMinorRev(), configuration.getRestConfig().getApiKey(), mapParam);
    }
}
