var x = document.getElementById("map");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
       alert ("Geolocation is not supported by this browser");
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=15&size=200x200&sensor=false&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("map").innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("map").innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById("map").innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("map").innerHTML = "An unknown error occurred."
            break;
    }
}
$(document).ready(function(){
$("#r4").click(function(){
     $("html, body").animate({ scrollTop:0 },500);
 });
});    

               