//var markid = 0;
//var timestamp = 0;

map.on('click','marker',(e)=>{
	console.log(e.features[0].properties);
	
	var dataindex = data.features.findIndex(f=> f.properties.MARK_ID == e.features[0].properties.MARK_ID)
	var value = data.features[dataindex].properties.value;
	if(value == config.length-1){
	  value = 0;
	}else{
	  value = value+1;
	}
	data.features[dataindex].properties.value = value;
 
//	if(	markid != e.features[0].properties.MARK_ID && 
//		new Date().getTime()-timestamp > 3000){
//		window.markid = e.features[0].properties.MARK_ID;
//		window.timestamp = new Date().getTime();
	
		var firebaseData = {
			'markid':  e.features[0].properties.MARK_ID,
			'initialer': username,
			'timestamp':new Date().getTime(),
			'value': value
		}
		database.ref('obs').push(firebaseData)
//	}
	map.getSource('marker').setData(data);
})