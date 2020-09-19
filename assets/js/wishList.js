function addLocation() {
    let location = document.getElementById("wishListInput").value
    let text = document.createTextNode(location)
    let newLocation = document.createElement("li")

newLocation.appendChild(text)
    document.getElementById("locations").appendChild(newLocation);
}

