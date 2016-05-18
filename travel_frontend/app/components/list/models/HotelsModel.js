/**
 * Created by andreea.avram on 16.10.2015.
 */
travelApp.factory("HotelsModel", function(){
    var Data = {
        list: {},
        images: [{
            roomTypeCode: "",
            url: ""
        }]
    }
    return Data;
});