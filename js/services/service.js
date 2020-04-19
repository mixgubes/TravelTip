
var gNextId = 101;
const gIdKey = 'ID'
var gLocations = []
const gKey = 'LOCATION'



// create new location 

function createLocation(lat, lng) {
    var location = {
        id: gNextId++,
        lat,
        lng,
        address: getAddress(lat, lng)
    }
    gLocations.push(location)
    saveInStorage(gKey, gLocations)
    saveInStorage(gIdKey, gNextId)
}

/********** Storage server ***********/
// Save locations in storage



// load locations from storage
function _loadLocationInStorage() {
    gLocations = getFromStorage(gKey)
}

/********** Location server ***********/
//TODO: getLocation

//TODO: setLocation

//TODO: copyLocation
function copyLocation(address){
    var cords = getCord(address)
    console.log(cords);
    
}

//TODO: deleteLocation

function deleteLocation(id) {
    console.log(id);

}


//TODO: updateLocation

function updateLocation(id) {
    console.log(id);

}

/********** Search server ***********/
//TODO: getSearchInput
function getAddress(lat, lng) {
    var address = getAddressApi(lat, lng)
    return address
}

function getCord(address) {
    var latLng = getCordApi(address)
    return latLng
}

//TODO: setSearchInput