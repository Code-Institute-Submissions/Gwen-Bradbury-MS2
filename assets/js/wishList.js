/* Variables */
let locationInput = document.querySelector(".location-input");
let locationButton = document.querySelector(".location-button");
let locationList = document.querySelector(".location-list");
/* Event Listeners */
document.addEventListener("DOMContentLoaded", getLocations);
locationButton.addEventListener("click", addLocation);
locationList.addEventListener("click", removeLocation);
/* Placeholder Text */
locationInput.placeholder = "Add A Location...";
/* Function to Create Location Div and Text Box */
function addLocation(event) {
  event.preventDefault();

  let locationDiv = document.createElement("div");
  locationDiv.classList.add("location");

  let newLocation = document.createElement("li");
  newLocation.innerText = locationInput.value;
  newLocation.classList.add("location-item");
  locationDiv.appendChild(newLocation);
/* Save List to Local Storage */
  saveLocalLocations(locationInput.value);
/* Create remove Button */
  let removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-trash"></i>';
  removeButton.classList.add("remove-btn");
  locationDiv.appendChild(removeButton);

  locationList.appendChild(locationDiv);
/* Clear Text Box after Location Added to List */
  locationInput.value = "";
}
/* Remove Location From List */
function removeLocation(e) {
  let item = e.target;
  if (item.classList[0] === "remove-btn") {
    let location = item.parentElement;
    removeLocalLocations(location);
    location.remove();
  }
}
/* Function to Save List to Local Storage */
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
/* Function to Check if a List Exists in Local Storage */
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
/* Remove Location from List in Local Storage */ 
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
