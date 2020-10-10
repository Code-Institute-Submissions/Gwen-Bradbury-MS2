let locationInput = document.querySelector(".location-input");
let locationButton = document.querySelector(".location-button");
let locationList = document.querySelector(".location-list");

document.addEventListener("DOMContentLoaded", getLocations);
locationButton.addEventListener("click", addLocation);
locationList.addEventListener("click", removeLocation);

locationInput.placeholder = "Add A Location...";

function addLocation(event) {
  event.preventDefault();

  let locationDiv = document.createElement("div");
  locationDiv.classList.add("location");
  document.querySelector(".location").required = true;

  let newLocation = document.createElement("li");
  newLocation.innerText = locationInput.value;
  newLocation.classList.add("location-item");
  locationDiv.appendChild(newLocation);

  saveLocalLocations(locationInput.value);

  let removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-trash"></i>';
  removeButton.classList.add("remove-btn");
  locationDiv.appendChild(removeButton);

  locationList.appendChild(locationDiv);

  locationInput.value = "";
}

function removeLocation(e) {
  let item = e.target;
  if (item.classList[0] === "remove-btn") {
    let location = item.parentElement;
    removeLocalLocations(location);
    location.remove();
  }
}

function saveLocalLocations(location) {
  let locations;
  if (localStorage.getItem("locations") === null) {
    locations = [];
  } else {
    locations = JSON.parse(localStorage.getItem("locations"));
  }
  locations.push(location);
  localStorage.setItem("locations", JSON.stringify(locations));
}

function getLocations() {
  let locations;
  if (localStorage.getItem("locations") === null) {
    locations = [];
  } else {
    locations = JSON.parse(localStorage.getItem("locations"));
  }
  locations.forEach(function (location) {
    let locationDiv = document.createElement("div");
    locationDiv.classList.add("location");

    let newLocation = document.createElement("li");
    newLocation.innerText = location;
    newLocation.classList.add("location-item");
    locationDiv.appendChild(newLocation);

    let removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fas fa-trash"></i>';
    removeButton.classList.add("remove-btn");
    locationDiv.appendChild(removeButton);

    locationList.appendChild(locationDiv);
  });
}

function removeLocalLocations(location) {
  let locations;
  if (localStorage.getItem("locations") === null) {
    locations = [];
  } else {
    locations = JSON.parse(localStorage.getItem("locations"));
  }
  let locationIndex = location.children[0].innerText;
  locations.splice(locations.indexOf(locationIndex), 1);
  localStorage.setItem("locations", JSON.stringify(locations));
}
