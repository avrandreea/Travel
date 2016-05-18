package com.travel.client;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.Map;

/**
 * Created by Andreea on 11/3/2015.
 */
public class HttpClient {

    private static String constructParams(Map<String, String> params){
        String allParams = "";
        for (Map.Entry<String, String> entry : params.entrySet()) {
            if (entry.getValue() != null) {
                allParams += "&" + entry.getKey() + "=" + entry.getValue();
            }
        }
        return allParams;

    }

    public static String getHttpReguest(String endpoint, String path, String cid, String minorRev, String apiKey, Map<String, String> params) {

        String result = "";
        URL url;
        try {
            //"?cid=55505&minorRev=99&apiKey=custom"
            url = new URL(endpoint + path +"?"+ cid + "&" + minorRev + "&" + apiKey + constructParams(params));

            //make connection
            URLConnection urlc = url.openConnection();

            //get result
            BufferedReader br = new BufferedReader(new InputStreamReader(urlc.getInputStream()));
            String l = null;
            while ((l = br.readLine()) != null) {
                result += l;
            }
            br.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return result;
    }

    public static String postHttpReguest(String endpoint, String path, String cid, String minorRev, String apiKey, Map<String, String> params) {

        String result = "";
        URL url;
        try {
            url = new URL(endpoint + path);

//            This is a valid link to make a book
//            url = new URL("https://book.api.ean.com/ean-services/rs/hotel/v3/res?cid=55505&minorRev=99&apiKey=custom&hotelId=164122&arrivalDate=12/6/2015&departureDate=12/7/2015&supplierType=E&rateKey=7d5aeae1-de7a-43f9-9a46-2bee6f6daa26&roomTypeCode=200759980&rateCode=203779424&chargeableRate=237.40&room1=2&room1FirstName=test&room1LastName=tester&room1BedTypeId=23&room1SmokingPreference=NS&email=andreea.avram@xoomworks.com&firstName=test&lastName=tester&homePhone=2145370159&workPhone=2145370159&creditCardType=CA&creditCardNumber=5401999999999999&creditCardIdentifier=123&creditCardExpirationMonth=12&creditCardExpirationYear=2017&address1=travelnow&city=Cluj&stateProvinceCode=CJ&countryCode=RO&postalCode=123456");

            byte[] data = (cid + "&" + minorRev + "&" + apiKey+constructParams(params)).getBytes("UTF-8");

            //make connection
            HttpsURLConnection urlc = (HttpsURLConnection) url.openConnection();
            urlc.setRequestMethod("POST");

            // Send data
            urlc.setRequestProperty("Content-type", "application/x-www-form-urlencoded");
            urlc.setRequestProperty("Content-length", "" + data.length);
            urlc.setDoOutput(true);
            urlc.setUseCaches(false);

            OutputStream out = urlc.getOutputStream();
            out.write(data);
            out.flush();

            //get result
            BufferedReader br = new BufferedReader(new InputStreamReader(urlc.getInputStream()));
            String l = null;
            while ((l = br.readLine()) != null) {
                result += l;
            }
            br.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return result;
    }
}
