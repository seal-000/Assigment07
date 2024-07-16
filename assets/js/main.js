/*
Navigator - appName, product, appVersion, userAgent, platform, language
Window - innerHeight, innerWidth
Screen - width, height, availWidth, availHeight, colorDepth, pixelDepth
Location - href, hostname, pathname, protocol
Geolocation - Latitude, Longitude
See https://www.w3schools.com/js/js_window.asp 


*/

function showNavigatorInfo() {

    var text = "<h5>Navigator App Name: " + navigator.appName + "<br></h5>" +
    "<h5>Product: " + navigator.product + "<br></h5>" +
    "<h5>App Version: " + navigator.appVersion + "<br></h5>" +
    "<h5>User Agent: " + navigator.userAgent + "<br></h5>" +
    "<h5>Platform: " + navigator.platform + "<br></h5>" +
    "<h5>Language: " + navigator.language + "<br></h5>";

    document.getElementById("demo").innerHTML = text

}

function showWindowInfo(){

    var text = "<h5>Window Inner Height: " + window.innerHeight + "<br></h5>" +
    "<h5>Window Inner Weight: " + window.innerWidth + "<br></h5>";
    
    document.getElementById("demo").innerHTML = text

}

function showScreenInfo(){
    var text = "<h5>Screen Width: "+ screen.width + "<br></h5>" +
    "<h5>Screen Height: "+ screen.height + "<br></h5>" +
    "<h5>Screen Available Width: " + screen.availWidth + "<br></h5>" +
    "<h5>Screen Available Height: " + screen.availHeight + "<br></h5>" +
    "<h5>Screen Color Depth: " + screen.colorDepth + "<br></h5>" +
    "<h5>Screen Pixel Depth: " + screen.pixelDepth + "<br></h5>";

    document.getElementById("demo").innerHTML = text

}

function showLocationInfo(){
    var text = "<h5>URL of the Current Page: "+ location.href + "<br></h5>" +
    "<h5>Hostname: "+ location.hostname + "<br></h5>" +
    "<h5>Pathname: "+ location.pathname + "<br></h5>" +
    "<h5>Protocol: "+ location.protocol + "<br></h5>";
    document.getElementById("demo").innerHTML = text
}

function showGeolocationInfo(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position)
        {
            var text = "<h5>Latitude: " + position.coords.latitude + "</h5>" +
            "<h5>Longitude: "+position.coords.longitude + "</h5>";
            document.getElementById("demo").innerHTML = text

        });
    }
}


