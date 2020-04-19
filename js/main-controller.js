
import {locationService} from './services/location-service.js';
import {LocationPreview} from './cmps/location-preview.js';


function init() {
    navigator.geolocation.getCurrentPosition(initMap, showModal)
}
function initMap(position) {
    console.log(position);
    if (!position) {
        var lat = 29.5485
        var lng = 34.963
    } else {
        var lat = position.coords.latitude
        var lng = position.coords.longitude
    }
    var elMap = document.querySelector('#googleMap')
    var options = { center: { lat, lng }, zoom: 10 }
    var map = new google.maps.Map(elMap, options)
    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
      });
}
function showModal() {
    console.log('you need to approve location for the page');
    initMap()
}
function placeMarkerAndPanTo(latLng, map) {
    console.log(latLng, map)
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    map.panTo(latLng);
  }
  
// import {todoService} from './services/todo-service.js'

// TODO: listener function (onMyLocation, onSearchInputSubmit, onCopyLocation, onDeleteLocation, onUpdateLocation)
function bindEvents(){
    document.querySelector('.search-input-submit').addEventListener('change', onSearchSubmit);
}
// TODO: mapListener()

// TODO: render location

//TODO: onMyLocation
// getLocation
// setLocation

//TODO: onSearchInputSubmit
function onSearchSubmit(ev){
    ev.preventDefault
    // getSearchInput
    
    // setSearchInput
}

//TODO: onCopyLocation
function onCopyLocation(){

}
//TODO: copyLocation

//TODO: onDeleteLocation
//TODO: deleteLocation

//TODO: onUpdateLocation
//TODO: updateLocation

<<<<<<< HEAD







=======
// var lp = new LocationPreview (locations[0].id, locations[0].info, locations[0].lan, locations[0].lat)
renderLocations()
function renderLocations(){
    const elTable = document.querySelector('table');
    // elTable.innerHTML = '';
    let locations = locationService.getLocations()
    locations.forEach(location => {
        const trPreview = new LocationPreview (location.id, location.info, location.lan, location.lat)
        const elTr = trPreview.render();
        elTable.appendChild(elTr);
    });
}

// function renderLocations() {
//     const elLocations = document.querySelector('.todo-list');

//     elTodoList.innerHTML = '';
//     var todos = todoService.getTodos();
//     todos.forEach(function (todo) {
        
//         const todoPreview = new TodoPreview(todo, onTodoClicked, onDeleteTodo)
//         const elTodo = todoPreview.render();
//         elTodoList.appendChild(elTodo);
//     });
    
// }
>>>>>>> b1cc2bc9453d2776bc1479977ca4b066790b978a
