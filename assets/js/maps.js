function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {
                lat: 52.3555,
                lng: -1.1743
            }
        });

        var labels = "0123456789";

        var locations = [
            { lat: 54.1388, lng: -2.7174 }
        ];

        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }