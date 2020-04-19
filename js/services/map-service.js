
const gAPI_KEY =AIzaSyBTPIWlmkZosY9bz2NO7Grw1V9SvtvDESc;


// TODO: getFromGoogle(API)





// getFromGeo(API)


// API ADDRESS=> LAN ***get STRING***


function getCordApi(address) {
    $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBTPIWlmkZosY9bz2NO7Grw1V9SvtvDESc`,
     (res)=>{
        console.log('Service Got:', res);
    })
}


// API LAN=> ADDRESS


function getAddressApi(lat,lng) {
    $.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBTPIWlmkZosY9bz2NO7Grw1V9SvtvDESc`,
     (res)=>{
        console.log('Service Got:', res);
    })
}










