var legendDiv = document.createElement("div");
	legendDiv.id = "legend";
	legendInnerHtml = "";
   
	config.forEach((e)=>{
		var nylinje = `<i style='background:${e.color}'></i>${e.value}<br>`;
		legendInnerHtml = legendInnerHtml+nylinje;
		
	})
	legendDiv.innerHTML = legendInnerHtml;
	
	document.body.appendChild(legendDiv);
/*
 <div id="legend" > 
   <i style= "background:#1b9e77">  </i>  Hovedafgrøde <br>
   <i style= "background:#d95f02">  </i>  Høstet <br>
   <i style= "background:#7570b3">  </i>  Harvet <br>
   <i style= "background:#66a61e">  </i>  Pløjet <br>
   <i style= "background:#e7298a">  </i>  Efterafgrøde etableret <br>
 </div>
 
*/