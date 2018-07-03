mapboxgl.accessToken = 'pk.eyJ1IjoibGltYXRoIiwiYSI6ImNqZzNxenYxMDBneGgzM3A3ejhoMDQ4c3IifQ.cU0fz83IZDWwe6mVVo1tWQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [11.640563072643431, 55.348738557430295], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.doubleClickZoom.disable();
var dynamicColor = ['match',['get','value']];
	config.forEach((e,i)=>{
		dynamicColor.push(i);
		dynamicColor.push(e.color);
	})
	dynamicColor.push("grey");
	
database.ref('data').once('value').then((geojson)=>{
	
	data = geojson.val();
	data.features.forEach( (e)=>{
		e.properties.value = 0;		
	})
	map.addLayer({
					'id': 'marker',
					'type': 'fill',
					'source': {
						'type': 'geojson',
						'data': data
					},
					'layout': {},
					'paint': {
						'fill-color': dynamicColor,
						'fill-opacity': 0.8,
						'fill-outline-color': '#000000'
					}
				});	
});
// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
				
var mapdiv = document.getElementById("map");