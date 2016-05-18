package com.travel;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;
import io.dropwizard.db.DataSourceFactory;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

/**
 * Created by andreea.avram on 28.10.2015.
 */
public class TravelConfiguration extends Configuration {

    @Valid
    @NotNull
    @JsonProperty("database")
    private DataSourceFactory database = new DataSourceFactory();
    public DataSourceFactory getDataSourceFactory() {
        return database;
    }
    public void setDatabase(DataSourceFactory database) {
        this.database = database;
    }

    public RestConfig getRestConfig() {
        return restConfig;
    }

    @JsonProperty
    private RestConfig restConfig = new RestConfig();

    public static class RestConfig {
        private String endpoint;
        private String endpointhttps;
        private String listPath;
        private String availPath;
        private String bookingPath;
        private String cid;
        private String minorRev;
        private String apiKey;

        @JsonProperty
        public String getEndpoint() {
            return endpoint;
        }

        @JsonProperty
        public String getEndpointhttps() {
            return endpointhttps;
        }

        @JsonProperty
        public String getListPath() {
            return listPath;
        }

        @JsonProperty
        public String getAvailPath() {
            return availPath;
        }

        @JsonProperty
        public String getBookingPath() {
            return bookingPath;
        }

        @JsonProperty
        public String getCID() {
            return cid;
        }

        @JsonProperty
        public String getMinorRev() {
            return minorRev;
        }

        @JsonProperty
        public String getApiKey() {
            return apiKey;
        }
    }
}
