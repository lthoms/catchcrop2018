mapdiv.addEventListener("dragover", e=>e.preventDefault(), false)

mapdiv.addEventListener("drop", (e)=>{
	e.preventDefault();
	var file = e.dataTransfer.files[0];
	
	var fileReader = new FileReader();
		fileReader.readAsArrayBuffer(file);
		
		fileReader.onloadend = (e) => {
			shp(e.target.result).then( (geojson) => {
				console.log("shapeconvertet")
				map.addLayer({
					'id': 'adminMarker',
					'type': 'fill',
					'source': {
						'type': 'geojson',
						'data': geojson
					},
					'layout': {},
					'paint': {
						'fill-color': '#ff5050',
						'fill-opacity': 0.8,
						'fill-outline-color': '#000000'
					}
				});
				console.log(geojson)
				database.ref('data').set(geojson);
			})
		}
	}, false)
