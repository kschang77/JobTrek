
var accessToken = 'pk.eyJ1IjoianVsaWV0LWdlb3JnZSIsImEiOiJjazhnOXNzN3gwMXoyM2RxbjNzbXdrYXJjIn0.a653svYKdCmg2wkjY5HxVg';

var state;
var jobtitle;




var map = L.map('map').setView([39,-98], 4);



L.tileLayer(
'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



var circle1 = L.circle([37.786542, -122.386022], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 50.0
}).addTo(map);   

function onClick(e) {  

state = (this.key);
state = state.toLowerCase()
getJobs(state);
console.log(state)
}


function getJobs() {
    //state ="CA"
    jobtitle= "software"
 var jobQuery = "https://jobs.github.com/positions.json?description=" + jobtitle + "&full_time=true&location=" + state
 console.log(jobQuery)
    $.ajax({
        url: jobQuery,
        method: "GET"
    }).then(function (response) {
        console.log(response)
            $("#job-post").empty();

            //data = response[0]
            //console.log(data)

            $("#job-post").html("<h4 class=\"mt-3\"> Job Posts </h4>").append("<div class=\"row\">");

            for(var i = 0; i < response.length; i++){
            var companyName = response[i].company;
            var companyURL = response[i].company_url;
            var jobUrl = response[i].url;
            var jobLocation = response[i].location;
            var jobtitle = response[i].title;
            var companyLogo = response[i].company_logo
            //console.log(companyName) , works
            var col = $("<div>").addClass("row");
            var card = $("<div>").addClass("card bg-primary text-white").css("width", "18rem");
            var body = $("<div>").addClass("card-body p-2");
            var title = $("<h5>").addClass("card-title").text("Job Title: " + jobtitle);
            var img = $("<img>").attr("src", companyLogo);
            var p1 = $("<p>").addClass("card-text").text("Company Name: " + companyName);
            var p2 = $("<p>").addClass("card-text").text("Job Location: " + jobLocation);
            var aTag = $("<a>").attr("href", companyURL).html("Company Website").addClass("btn btn-info");
            var aTag2 = $("<a>").attr("href",jobUrl).html("Job Post").addClass("btn btn-info");

            col.append(card.append(body.append(title, img, p1, p2, aTag, aTag2)));
            $("#job-post .row").append(col)
            }
            
      })

    // });
}






var circle2 = L.circle([44.50, -89.50], {radius: 200}).addTo(map).on('mouseover', onClick); //Wisconsin, the USA
circle2.key = "WI"


var circle3 = L.circle([39.00, -80.50], {radius: 200}).addTo(map).on('mouseover', onClick); //West Virginia, the US

circle3.key = "WV"

var circle4 = L.circle([44.0, -72.69], {radius: 200}).addTo(map).on('mouseover', onClick); //Vermont, the USA

circle4.key = "VT"


var circle5 = L.circle([31.00, -100.00], {radius: 200}).addTo(map).on('mouseover', onClick); //Texas, the USA

circle5.key = "TX"


var circle6 = L.circle([44.50, -100], {radius: 200}).addTo(map).on('mouseover', onClick); //South Dakota, the US

circle6.key = "ND"

var circle7 = L.circle([41.70, -71.50], {radius: 200}).addTo(map).on('mouseover', onClick); //Rhode Island, the US
circle7.key = "RI"


var circle8 = L.circle([44.00, -120.50], {radius: 200}).addTo(map).on('mouseover', onClick); //Oregon, the US

circle8.key = "OR"

var circle9 = L.circle([43.00, -75.00], {radius: 200}).addTo(map).on('mouseover', onClick); //New York, the US

circle9.key = "NY"

var circle10 = L.circle([44.00, -71.50], {radius: 200}).addTo(map).on('mouseover', onClick);

circle10.marker = "NH"
var circle11 = L.circle([41.50, -100.00], {radius: 200}).addTo(map).on('mouseover', onClick);
circle11.key = "NE"

var circle12 = L.circle([38.50, -98.00], {radius: 200}).addTo(map).on('mouseover', onClick);
circle12.key = "KS"

var circle13 = L.circle([33.00, -90.00], {radius: 200}).addTo(map).on('mouseover', onClick);

circle13.key = "MS"

var circle14 = L.circle([40.00, -89.00], {radius: 200}).addTo(map).on('mouseover', onClick);

circle14.key = "IL"

var circle15 = L.circle([39.00, -75.50], {radius: 200}).addTo(map).on('mouseover', onClick);

circle15.key = "DE"

var circle16 = L.circle([41.59, -72.69], {radius: 200}).addTo(map).on('mouseover', onClick);

circle16.key = "CT"

var circle17 = L.circle([34.79, -92.19], {radius: 200}).addTo(map).on('mouseover', onClick);

circle17.key = "AR"

var circle18 = L.circle([40.27, -86.12], {radius: 200}).addTo(map).on('mouseover', onClick);

circle18.key = "IN"

var circle19 = L.circle([38.57, -92.60], {radius: 200}).addTo(map).on('mouseover', onClick);

circle19.key = "MO"

var circle20 = L.circle([27.99, -81.76], {radius: 200}).addTo(map).on('mouseover', onClick);

circle20.key = "FL"

var circle21 = L.circle([39.87, -117.22], {radius: 200}).addTo(map).on('mouseover', onClick);
circle21.key = "NV"

var circle22 = L.circle([45.36, -68.97], {radius: 200}).addTo(map).on('mouseover', onClick);
circle22.key = "ME"

var circle23 = L.circle([44.18, -84.50], {radius: 200}).addTo(map).on('mouseover', onClick);

circle23.key = "MI"

var circle24 = L.circle([33.24, -83.44], {radius: 200}).addTo(map).on('mouseover', onClick);

circle24.key = "GA"


var circle23 = L.circle([44.18, -84.50], {radius: 200}).addTo(map).on('mouseover', onClick);

circle23.key = "MI"

var circle24 = L.circle([33.24, -83.44], {radius: 200}).addTo(map).on('mouseover', onClick);

circle24.key = "GA"

var circle25 = L.circle([19.74, -155.84], {radius: 200}).addTo(map).on('mouseover', onClick);

circle25.key = "HI"

var circle26 = L.circle([66.16, -153.36], {radius: 200}).addTo(map).on('mouseover', onClick);

circle26.key = "AK"
var circle25 = L.circle([19.74, -155.84], {radius: 200}).addTo(map).on('mouseover', onClick);

circle25.key = "HI"

var circle26 = L.circle([66.16, -153.36], {radius: 200}).addTo(map).on('mouseover', onClick);

circle26.key = "AK"

var circle27 = L.circle([35.86, -86.66], {radius: 200}).addTo(map).on('mouseover', onClick);

circle27.key = "TN"

var circle28 = L.circle([37.92, -78.02], {radius: 200}).addTo(map).on('mouseover', onClick);

circle28.key = "VA"

var circle29 = L.circle([39.83, -74.87], {radius: 200}).addTo(map).on('mouseover', onClick);

circle29.key = "NJ"

var circle30 = L.circle([37.83, -84.27], {radius: 200}).addTo(map).on('mouseover', onClick);

circle30.key = "KY"

var circle31 = L.circle([47.65, -100.43], {radius: 200}).addTo(map).on('mouseover', onClick);

circle31.key = "ND"

var circle32 = L.circle([46.39, -94.63], {radius: 200}).addTo(map).on('mouseover', onClick);

circle32.key = "MN"

var circle33 = L.circle([36.08, -96.92], {radius: 200}).addTo(map).on('mouseover', onClick);

circle33.key = "OK"

var circle34 = L.circle([46.96, -109.53], {radius: 200}).addTo(map).on('mouseover', onClick);

circle34.key = "MT"

var circle35 = L.circle([47.75, -120.74], {radius: 200}).addTo(map).on('mouseover', onClick);

circle35.key = "WA"

var circle36 = L.circle([39.41, -111.95], {radius: 200}).addTo(map).on('mouseover', onClick);

circle36.key = "UT"

var circle37 = L.circle([39.11, -105.35], {radius: 200}).addTo(map).on('mouseover', onClick);

circle37.key = "CO"

var circle38 = L.circle([40.36, -82.99], {radius: 200}).addTo(map).on('mouseover', onClick);

circle38.key = "OH"

var circle39 = L.circle([32.31, -86.90], {radius: 200}).addTo(map).on('mouseover', onClick);

circle39.key = "AL"

var circle40 = L.circle([42.03, -93.58], {radius: 200}).addTo(map).on('mouseover', onClick);

circle40.key = "IA"

var circle41 = L.circle([34.30, -106.01], {radius: 200}).addTo(map).on('mouseover', onClick);

circle41.key = "NM"

var circle42 = L.circle([33.83, -81.16], {radius: 200}).addTo(map).on('mouseover', onClick);

circle42.key = "SC"

var circle43 = L.circle([41.20, -77.19], {radius: 200}).addTo(map).on('mouseover', onClick);

circle43.key = "PA"

var circle44 = L.circle([34.04, -111.09], {radius: 200}).addTo(map).on('mouseover', onClick);

circle44.key = "AZ"

var circle45 = L.circle([39.04, -76.64], {radius: 200}).addTo(map).on('mouseover', onClick);

circle45.key = "MD"

var circle46 = L.circle([42.40, -71.38], {radius: 200}).addTo(map).on('mouseover', onClick);

circle46.key = "MA"

var circle47 = L.circle([36.77, -119.41], {radius: 200}).addTo(map).on('mouseover', onClick);

circle47.key = "CA"

var circle48 = L.circle([44.06, -114.74], {radius: 200}).addTo(map).on('mouseover', onClick);

circle48.key = "ID"

var circle49 = L.circle([43.07, -107.29], {radius: 200}).addTo(map).on('mouseover', onClick);

circle49.key = "WY"

var circle50 = L.circle([35.78, -80.79], {radius: 200}).addTo(map).on('mouseover', onClick);

circle50.key = "NC"

var circle51 = L.circle([30.39, -92.32], {radius: 200}).addTo(map).on('mouseover', onClick);

circle51.key = "LA"
var circle27 = L.circle([35.86, -86.66], {radius: 200}).addTo(map).on('mouseover', onClick);

circle27.key = "TN"

var circle28 = L.circle([37.92, -78.02], {radius: 200}).addTo(map).on('mouseover', onClick);

circle28.key = "VA"

var circle29 = L.circle([39.83, -74.87], {radius: 200}).addTo(map).on('mouseover', onClick);

circle29.key = "NJ"

var circle30 = L.circle([37.83, -84.27], {radius: 200}).addTo(map).on('mouseover', onClick);

circle30.key = "KY"

var circle31 = L.circle([47.65, -100.43], {radius: 200}).addTo(map).on('mouseover', onClick);

circle31.key = "ND"

var circle32 = L.circle([46.39, -94.63], {radius: 200}).addTo(map).on('mouseover', onClick);

circle32.key = "MN"

var circle33 = L.circle([36.08, -96.92], {radius: 200}).addTo(map).on('mouseover', onClick);
circle33.key = "OK"

var circle34 = L.circle([46.96, -109.53], {radius: 200}).addTo(map).on('mouseover', onClick);

circle34.key = "MT"

var circle35 = L.circle([47.75, -120.74], {radius: 200}).addTo(map).on('mouseover', onClick);

circle35.key = "WA"

var circle36 = L.circle([39.41, -111.95], {radius: 200}).addTo(map).on('mouseover', onClick);

circle36.key = "UT"

var circle37 = L.circle([39.11, -105.35], {radius: 200}).addTo(map).on('mouseover', onClick);

circle37.key = "CO"

var circle38 = L.circle([40.36, -82.99], {radius: 200}).addTo(map).on('mouseover', onClick);

circle38.key = "OH"

var circle39 = L.circle([32.31, -86.90], {radius: 200}).addTo(map).on('mouseover', onClick);

circle39.key = "AL"

var circle40 = L.circle([42.03, -93.58], {radius: 200}).addTo(map).on('mouseover', onClick);

circle40.key = "IA"

var circle41 = L.circle([34.30, -106.01], {radius: 200}).addTo(map).on('mouseover', onClick);

circle41.key = "NM"

var circle42 = L.circle([33.83, -81.16], {radius: 200}).addTo(map).on('mouseover', onClick);

circle42.key = "SC"

var circle43 = L.circle([41.20, -77.19], {radius: 200}).addTo(map).on('mouseover', onClick);

circle43.key = "PA"

var circle44 = L.circle([34.04, -111.09], {radius: 200}).addTo(map).on('mouseover', onClick);

circle44.key = "AZ"

var circle45 = L.circle([39.04, -76.64], {radius: 200}).addTo(map).on('mouseover', onClick);

circle45.key = "MD"

var circle46 = L.circle([42.40, -71.38], {radius: 200}).addTo(map).on('mouseover', onClick);

circle46.key = "MA"

var circle47 = L.circle([36.77, -119.41], {radius: 200}).addTo(map).on('mouseover', onClick);

circle47.key = "CA"

var circle48 = L.circle([44.06, -114.74], {radius: 200}).addTo(map).on('mouseover', onClick);

circle48.key = "ID"

var circle49 = L.circle([43.07, -107.29], {radius: 200}).addTo(map).on('mouseover', onClick);

circle49.key = "WY"

var circle50 = L.circle([35.78, -80.79], {radius: 200}).addTo(map).on('mouseover', onClick);

circle50.key = "NC"

var circle51 = L.circle([30.39, -92.32], {radius: 200}).addTo(map).on('mouseover', onClick);

circle51.key = "LA"