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
            { lat: 51.1781, lng: -4.6673 },
            { lat: 58.9000, lng: -3.0500 },
            { lat: 55.6399, lng: -1.6030 },
            { lat: 51.7374, lng: -5.2815 },
            { lat: 57.8167, lng: -8.5833 },
            { lat: 50.0500, lng: -5.0500 },
            { lat: 53.1460, lng: -4.3559 },
            { lat: 55.892, lng: -2.152 },
            { lat: 50.342, lng: -2.2640 }
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
        let lundyIslandDivesite
        let scapaFlowDivesite
        let farneIslandsDivesite
        let skomerMarineReserveDivesite
        let stKildaDivesite
        let theManaclesDivesite
        let rhoscolynBeaconDivesite
        let stAbbsMarineReserveDivesite
        let m2PortlandDivesite

        let infowindow = new google.maps.InfoWindow({
        content: Divesite()
        });

        let markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }

        