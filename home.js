
var data = [
    {
     "name": "GFF Grass Flip Flop",
     "location": "5524 Dixie Rd., Brampton",
     "description": "Synthetic grass bonded to classic foam-core flip flops. The heavy straps exterior is black, the interior is fresh-cut-green. The synthetic grass even features great natural details of dead grass- a natural imperfection. Synthetic grass very appears natural, even close up. The bottom features a die-cut design of the GFF logo that leaves an impression in sand and dirt. This sandal design performs well in and out of water. Grass-cushion fit will adjust to the wearer's foot imprint, allow for break in period.",
     "image":"GFF.jpg",
     "price":"$100",
     
     
    },
    {
      "name": "Cat Butt Tissue Holder",
      "location": "255 DuckWorth St., Barrie",
      "description": "Keep your tissues close at hand with the help of your trusty feline friend.You are certain to get loads of laughs and visitors to your powder room or office will love to grab a tissue from this quirky cat. Measures 12.5inches long and 9.25inches wide, fits standard square tissue boxes.Cat lovers far and wide will chuckle and love this hilarious tissue box holder.Each Cat Butt tissue holder is made of molded resin that's easy to clean and designed to last. Hand wash is warm soapy water when needed..",
      "image": "cattissue.jpg",
      "price":"$95",
    
    },
    {
      "name": "Ingrown Toenail Fixer",
      "location": "12 Weybridge, Oakville",
      "description": "Effectively relieve the pain of Ingrown Toenail in less than 30 minutes.Lever mechanics to change the angle of nail growth. Toe nails, hands and tools disinfection treatment.Made of premium materials, wear resistant and durable.Portable when you go out for travelling, business trip, etc.Light weight, compact design, easy to store. Elegant appearance and exquisite workmanship.Well-polished, safe to hands, durable.",
      
      "image": "toe.jpg",
      "price":"$126.95",
    
    },
]

var htmlText = '';

for ( var key in data ) {
htmlText += '<div style="box-shadow: 0 4px 8px 0 rgba(0,0,255, 0.1); text-align: center;font-family: arial black7y;" class="div-conatiner">';
htmlText += '<h2 class="p-name"> Name: ' + data[key].name + '</h2>';
htmlText += '<img style=" max-width: 300px;" src= ' +data[key].image +'>';
htmlText += '<h3 class="p-loc"> Location: ' + data[key].location + '</h3>';
htmlText += '<h3 class="p-loc"> Price: ' + data[key].price + '</h3>';

htmlText += '<h4 class="p-desc"> Description: ' + data[key].description + '</h4>';
htmlText += '</div>';
}

$('body').append(htmlText);
    
        function getJSONMarkers() {
          const markers = [
            {
              name:  "GFF Grass Flip Flop",
              location: [20.1202, 45.1535]
            },
            {
              name: "Cat Butt Tissue Holder",
              location: [20.2084, 45.2349]
            },
            {
              name: "Ingrown Toenail Fixer",
              location: [20.2285, 45.3873]
            }
          ];
          return markers;
        }

        function loadMap() {
          // Initialize Google Maps
          const mapOptions = {
            center:new google.maps.LatLng(20.2084, 45.2349),
            zoom: 11
          }
          const map = new google.maps.Map(document.getElementById("map"), mapOptions);

          // Load JSON Data
          const hotelMarkers = getJSONMarkers();

          // Initialize Google Markers
          for(hotel of hotelMarkers) {
            let marker = new google.maps.Marker({
              map: map,
              position: new google.maps.LatLng(hotel.location[0], hotel.location[1]),
              title: hotel.name
            })
          }
        }
  