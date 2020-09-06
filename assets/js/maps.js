function initMap() {
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {
                lat: 52.3555,
                lng: -1.1743
            }
        });
    
        let labels = "0123456789";

         let locations = [
            { lat: 54.1388, lng: -2.7174 }, 
        ];

        let markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
              });
              markers.addListener('click', function() {
            infowindow.open(map, markers);
        });
        });

        function Divesite (name, features, link) {
        this.name = name;
        this.features = features;
        this.link = link;
        };

        let capernwrayDivesite = new Divesite ('Capernwray', 'Dive shop, with a filling station providing air and nitrox.Quarry stocked with fish, including trout, perch and at least two sturgeon, and many underwater attractions!', '<a href="https://en.wikipedia.org/wiki/Capernwray_Dive_Centre" target="_blank"></a>');

        let infowindow = new google.maps.InfoWindow({
        content: Divesite()
        });

        let markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }