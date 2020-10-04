function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {
      lat: 51.5074,
      lng: -0.1278,
    },
  });

  let diveSite = [
    {
      coordinates: { lat: 54.1388, lng: -2.7174 },
      content:
        '<h4>Capernwray</h4><br>Quarry stocked with fish, including trout, perch and at least two sturgeon, and many underwater attractions!<br>Dive with <a href="https://www.dive-site.co.uk/" target="_blank">Capernwray Diving Center</a>',
    },
    {
      coordinates: { lat: 51.1781, lng: -4.6673 },
      content:
        '<h4>Lundy Island</h4><br>English island in the Bristol Channel.It boasts a variety of marine habitats, with rare seaweeds, sponges and corals.<br>Dive with <a href="https://www.lundydiving.co.uk/diving/" target="_blank">Lundy Diving</a>',
    },
    {
      coordinates: { lat: 58.9, lng: -3.05 },
      content:
        '<h4>Scapa Flow</h4><br>Offers an abundance of large, historic wrecks lying in close proximity and shallow, relatively benign diving conditions.<br>Dive with <a href="http://www.scapaflow.com/" target="_blank">Johns Diving Charters</a>',
    },
    {
      coordinates: { lat: 55.6399, lng: -1.603 },
      content:
        '<h4>Farne Islands</h4><br>The grey seal colony at the Farnes numbers about 5,000. They are curious and will often look in on divers in the water and are impressive to watch underwater.Hundreds of ships have been wrecked on the Farnes over the years, providing plenty for wreck divers to look at.<br>Dive with <a href="https://travel.padi.com/d/united-kingdom/" target="_blank">PADI North England</a>',
    },
    {
      coordinates: { lat: 51.7374, lng: -5.2815 },
      content:
        '<h4>Skomer Marine Reserve</h4><br>There are wall drops which descend to over 50m, caves and over 500 wrecks to explore.Keep your eyes peeled for dolphins, seals, colourful sea slugs, catfish, lobsters and rare seahorses.<br>Dive with <a href="https://www.visitpembrokeshire.com/activity-listing/west-wales-dive-company-ltd" target="_blank">West Wales Diving Company</a>',
    },
    {
      coordinates: { lat: 57.8167, lng: -8.5833 },
      content:
        '<h4>St Kilda</h4><br>A haven of caves, arches and walls covered in marine life with amazing water visibility. It’s a great place to spot seals and puffins diving in the water, huge lobsters, plus beautiful multi-coloured jewelled anemones.<br>Dive with <a href="https://dive.padi.com/unitedkingdom/scotland/" target="_blank">PADI Scotland</a>',
    },
    {
      coordinates: { lat: 50.05, lng: -5.05 },
      content:
        '<h4>The Manacles</h4><br>It has amazing drop-offs, pinnacles and reefs covered with Gorgonian sea fans, jewel anemones and dead man’s fingers.Watch out for conger eels hiding inside holes in the wrecks.<br>Dive with <a href="https://porthkerris.com/" target="_blank">Porthkerris Divers</a>',
    },
    {
      coordinates: { lat: 53.146, lng: -4.3559 },
      content:
        '<h4>Rhoscolyn Beacon</h4><br>Offers a fantastic array of marine life and wrecks to explore. Rhoscolyn Beacon is one of the best drift diving spots in the UK.<br>Dive with <a href="https://www.sbsribcharter.co.uk/index.php/diving" target="_blank">SBS Rib Charters</a>',
    },
    {
      coordinates: { lat: 55.892, lng: -2.152 },
      content:
        '<h4>St Abbs Marine Reserve</h4><br>Just 50m offshore, you’ll find Cathedral Rock, a beautiful double rock arch covered in anemones and dead man’s fingers.<br>Dive with <a href="http://divestabbs.com/" target="_blank">Dive St Abbs</a>',
    },
    {
      coordinates: { lat: 50.342, lng: -2.264 },
      content:
        '<h4>M2 Portland</h4><br>Ever wanted to dive alongside a sunken submarine? HMS M2 is one of the most unusual submarine wrecks in the UK. Situated three miles off Lyme Bay in Dorset, it lies at around 36m deep and was an underwater aircraft carrier designed to surface, launch one plane and sink into the depths again.<br>Dive with <a href="https://divebeyond.co.uk/" target="_blank">Dive Beyond</a>',
    },
  ];

  let infoWindow = new google.maps.InfoWindow();

  for (let i = 0; i < diveSite.length; i++) {
    setDivesite(diveSite[i]);
  }
  
  function setDivesite(props) {
    let marker = new google.maps.Marker({
      position: props.coordinates,
      map: map,
      animation: google.maps.Animation.DROP,
    });

    marker.addListener("click", function () {
      infoWindow.setContent(props.content);
      infoWindow.open(map, marker);
    });
  }
}
