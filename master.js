/*Variables*/
var modal;

// Add map
mapboxgl.accessToken = 'pk.eyJ1IjoiZXVhbnN0b3JyaWUiLCJhIjoiY2t5c2sxazM2MG5odzJ4czAwbTAxbmM5ZCJ9.rpFj_F1T7QcX2xg2Un8eMA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-2.97, 56.469], // Co-ordinates
  zoom: 11.8 // Initial zoom
});

// GeoJSON data for map markers/items.
var geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-2.926874, 56.488050]
      },
      properties: {
        id: 'id01',
        title: 'Dundee Bairns',
        iconurl: 'goal1.png'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-2.986466, 56.456422]
      },
      properties: {
        id: 'id02',
        title: 'Dundee Community Fridge',
        iconurl: 'goal2.png'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-3.005596, 56.468595]
      },
      properties: {
        id: 'id03',
        title: 'Ancrum Outdoor Centre',
        iconurl: 'goal3.png'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-2.969039, 56.464778]
      },
      properties: {
        id: 'id04',
        title: 'Dundee Central Library',
        iconurl: 'goal4.png'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-2.962560, 56.472130]
      },
      properties: {
        id: 'id05',
        title: 'International Womens Centre',
        iconurl: 'goal5.png'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-3.065631, 56.462319]
      },
      properties: {
        id: 'id06',
        title: 'Scottish Water',
        iconurl: 'goal6.png'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-2.895941, 56.484315]
      },
      properties: {
        id: 'id07',
        title: 'Michelin Scotland Innovation Parc',
        iconurl: 'goal7.png'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-2.966816, 56.457503]
      },
      properties: {
        id: 'id08',
        title: 'V&A Dundee',
        iconurl: 'goal8.png'
      }
    },
    {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-2.902001, 56.485196]
    },
    properties: {
      id: 'id09',
      title: 'MVV Environment',
      iconurl: 'goal9.png'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-3.017743, 56.479906]
    },
    properties: {
      id: 'id10',
      title: 'Dundee Refugee Support',
      iconurl: 'goal10.png'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-2.964221, 56.458920]
    },
    properties: {
      id: 'id11',
      title: 'Dundee Cycle Hub',
      iconurl: 'goal11.png'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-2.984075, 56.462263]
    },
    properties: {
      id: 'id12',
      title: 'ScrapAntics',
      iconurl: 'goal12.png'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-2.985256, 56.456242]
    },
    properties: {
      id: 'id13',
      title: 'Dundee Community Wardrobe',
      iconurl: 'goal13.png'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-2.868122, 56.463454]
    },
    properties: {
      id: 'id14',
      title: 'Broughty Ferry Flood Prevention Scheme',
      iconurl: 'goal14.png'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-3.044123, 56.481186]
    },
    properties: {
      id: 'id15',
      title: 'Camperdown Wildlife Centre',
      iconurl: 'goal15.png'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-2.957847, 56.467717]
    },
    properties: {
      id: 'id16',
      title: 'One World Centre',
      iconurl: 'goal16.png'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-2.982168, 56.457636]
    },
    properties: {
      id: 'id17',
      title: 'University of Dundee',
      iconurl: 'goal17.png'
    }
  },]
};

// For loop to go through data set from above.
for (const feature of geojson.features) {

  const el = document.createElement('div');
  const url = feature.properties.iconurl;

  el.className = 'marker';
  el.style.backgroundImage = `url(mapicons/${feature.properties.iconurl})`;

  new mapboxgl.Marker(el) // Create marker
    .setLngLat(feature.geometry.coordinates) // Set space to place it.
    .setPopup( // Enable popup
      new mapboxgl.Popup({ offset: 25 })
        // Add short description and button to bring up modal.
        .setHTML(`<h3>${feature.properties.title}</h3><button onClick="more('${feature.properties.id}')">Click Here to Learn More!`)
    )
    .addTo(map); // Add to the map
}

// Function to bring up modal when "Read More" os clicked.
function more(modalid)
{
  modal = document.getElementById(modalid);
  modal.style.display = "block";
}

// Function for when pointer clicks outside modal box.
window.onclick = function(e) {
  if (e.target == modal){
    modal.style.display = "none";
  }
}
