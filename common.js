
var map;
var cities;

var query = 'http://api.openweathermap.org/data/2.5/group?id=703448,689558,694423,709930,702550,691650,710719,705812,692194,710735,710791,'+
'706369,700569,695594,702658,709717,686967,696643,706483,698740'+
'&appid=f6b2bb02a2cfe5fd3d985987aa047d75&units=metric';
function initMap() {
     var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: { lat: 48.5, lng: 31 }
    });

    fetch(query)
    .then(function (response) {
      response.json().then(function (data) {
        for (var i = 0; i < data.list.length; ++i) {
          var city = data.list[i];
          var postion = { lat: city.coord.lat, lng: city.coord.lon };
          var icon = 'http://openweathermap.org/img/w/' + city.weather[0].icon + '.png';
         
          var marker = new google.maps.Marker({
            position: postion,
            map: map,
            icon: icon,
            title: city.name
          });       
        }
      });
    });   
  }
