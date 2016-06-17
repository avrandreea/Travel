/**
 * Created by andreea.avram on 15.10.2015.
 */
travelApp.factory("ListServices", function ($http, $location, HotelsModel, ListModel) {

    var Data = {

        roomsAdultsClildrenNumberToString: function () {
            var roomStr = "";
            var childrenAges = "";
            for (i = 0; i < ListModel.roomGroup.length; i++) {
                nr = i + 1;
                roomStr += "&room" + nr + "=" + ListModel.roomGroup[i].adults;
                if (ListModel.roomGroup[i].children) {
                    childrenAges = ","
                }
                for (j = 0; j < ListModel.roomGroup[i].children; j++) {
                    if (j < ListModel.roomGroup[i].children - 1) {
                        childrenAges += ListModel.roomGroup[i].ages[j] + ","
                    } else {
                        childrenAges += ListModel.roomGroup[i].ages[j];
                    }
                }
                roomStr += childrenAges;
            }
            ListModel.roomGroupToString = roomStr;
        },

        getSearchCriteria: function () {
            var numberOfAdults = 0;
            var numberOfChildren = 0;
            for (i = 0; i < ListModel.roomGroup.length; i++) {
                numberOfAdults += ListModel.roomGroup.adults;
                numberOfChildren += ListModel.roomGroup.children;
            }
            ListModel.searchingCriteria = "number of rooms" + ListModel.roomGroup.length + ", number of adults: "
                + numberOfAdults + ", number of children: " + numberOfChildren;
        },

        changeNumberOfChildren: function (roomIndex, newNumberOfChildren) {
            for (i = 0; i < ListModel.roomGroup[roomIndex].children; i++) {
                ListModel.roomGroup[roomIndex].ages.push(0);
            }
        },

        removeRoom: function (index) {
            ListModel.roomGroup.splice(index, 1);
        },

        addRoom: function () {
            var newRoom = {
                adults: 2,
                children: 0,
                ages: []
            }
            ListModel.roomGroup.push(newRoom);
        },

        getHotels: function () {
            Data.roomsAdultsClildrenNumberToString();


            /* option 1*/
            //$http.jsonp("http://localhost:8080/list?" + "city=" + ListModel.destination + "&arrivalDate=" +
            // ListModel.arrivalDate +"&departureDate=" + ListModel.departureDate + ListModel.roomGroupToString +
            // "&callback=JSON_CALLBACK")
            //    .success(function (data) {
            //        HotelsModel.list = data;
            //        $location.path('/list');
            //    })
            //    .error(function (error) {
            //        console.log(error);
            //    });


            /* option 2*/

            //$.ajax({
            //    url: "http://localhost:8080/list?" + "city=" + ListModel.destination + "&arrivalDate=" +
            // ListModel.arrivalDate + "&departureDate=" + ListModel.departureDate + ListModel.roomGroupToString,
            //    dataType: 'json',
            //    success: function (data) {
            //        HotelsModel.list = data.responseText;
            //        console.log(data);
            //    },
            //    error: function (err) {
            //        console.log(err)
            //    }
            //}

            /* option 3*/
            $http({
                method: "GET",
                url: "http://localhost:8080/list?" + "city=" + ListModel.destination + "&arrivalDate=" +
                ListModel.arrivalDate + "&departureDate=" + ListModel.departureDate + ListModel.roomGroupToString,
            })
                .then(function successCallback(response) {
                    HotelsModel.list = response.data;
                    console.log(response.data);
                    $location.path('/list');

                }, function errorCallback(response) {
                    console.log(response);
                })
        }
    }
    return Data;
});
