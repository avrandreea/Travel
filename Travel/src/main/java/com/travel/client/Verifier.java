package com.travel.client;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLSession;

/**
 * Created by andreea.avram on 06.11.2015.
 */
public class Verifier implements HostnameVerifier {
    public boolean verify(String arg0, SSLSession arg1) {
        return true;   // mark everything as verified
    }
}
