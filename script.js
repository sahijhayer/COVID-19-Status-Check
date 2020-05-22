const checkCountry = () => {
	const countryInput = (data) => {
		const country = document.getElementById("country").value;

		for(let i = 0; i < data.length; i++){
			if (data[i]["Country"].toUpperCase().includes(country.toUpperCase())){
				return [data[i]["Country"],data[i]["Slug"]];
			}
		}
		return "error";
	}

	fetch('https://api.covid19api.com/countries')
	  .then(response => {
		return response.json()
	  })
	  .then(data => {
		var countryData = countryInput(data);
		document.getElementById("country").value=countryData[0];
		fetch("https://api.covid19api.com/total/country/"+countryData[1])
		  .then(response => {
			return response.json()
		  })
		  .then(data => {
			total = [];
			cases = [];
			deaths = [];
			recovered = [];
			date = [];
			for (let i = 0; i < data.length; i ++){
				let day = data[i];
				total.push(day["Confirmed"]);
				cases.push(day["Active"]);
				deaths.push(day["Deaths"]);
				recovered.push(day["Recovered"]);
				date.push(day["Date"]);
			}

			createGraph(total, cases, deaths, recovered, date);
			
		  })
		  .catch(err => {

		  })
	  
	  

		
		
	  })
	  .catch(err => {

	  })

}

const createGraph = (total, cases, deaths, recovered, date) => {
	resetCanvas();
	
	let startDate;
	let index;
	let endDate;
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

	let labels = [];
	for (let i = 0; i < cases.length; i ++){
		index = parseInt(date[i][5]+date[i][6])-1;
		startDate = months[index]+" "+date[i][8]+date[i][9]+", 2020";
		labels.push(startDate);
	}
	Chart.defaults.global.defaultFontColor = 'HoneyDew';
	
	var ctx = document.getElementById('chart').getContext('2d');
	var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'line',

		// The data for our dataset
		data: {
			labels: labels,
			datasets: [{
				label: 'Number of Confirmed Cases',
				borderColor: 'rgb(256,256,256)',
				data: total				

			}
			]
		},

		// Configuration options go here
		options: {
			layout: {
				padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
				}
			}
			
			
	
		}

	});
	


	document.getElementById("active").addEventListener("click", function(){
		var sets = [];
		var checkIf = false;
		for (let i = 0; i < chart.data.datasets.length; i++){
			if (chart.data.datasets[i]["label"] === "Number of Active Cases"){
				checkIf = true;
			}
		}

		if (checkIf){
			chart.data.datasets.splice(1,1);
		}
		else{
			chart.data.datasets.splice(1,0,{
				label: 'Number of Active Cases',
				borderColor: 'rgb(68,166,198)',
				data: cases
			});
		}
		chart.update();
	
	});
	
	document.getElementById("recovered").addEventListener("click", function(){
		var sets = [];
		var checkIf = false;
		for (let i = 0; i < chart.data.datasets.length; i++){
			if (chart.data.datasets[i]["label"] === "Number of Recovered Cases"){
				checkIf = true;
			}
		}

		if (checkIf){
			chart.data.datasets.splice(3,1);
		}
		else{
			chart.data.datasets.splice(3,0,{
					label: 'Number of Recovered Cases',
					borderColor: 'rgb(117,204,88)',
					data: recovered
			});
		}
		chart.update();
	
	});
	
	document.getElementById("deaths").addEventListener("click", function(){
		var sets = [];
		var checkIf = false;
		for (let i = 0; i < chart.data.datasets.length; i++){
			if (chart.data.datasets[i]["label"] === "Number of Deaths"){
				checkIf = true;
			}
		}

		if (checkIf){
			chart.data.datasets.splice(2,1);
		}
		else{
			chart.data.datasets.splice(2,0,{
				label: 'Number of Deaths',
				borderColor: 'rgb(198,68,101)',
				data: deaths
			});
		}
		chart.update();
	
	});


}


const resetCanvas = () => {
   document.getElementById("chart").remove();
   document.getElementById("chart-container").innerHTML='<canvas id="chart"></canvas>';

};
let input = document.getElementById("country");
input.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
   event.preventDefault();
   checkCountry();
   document.getElementById("active").style.visibility = "visible";
   document.getElementById("recovered").style.visibility = "visible";
   document.getElementById("deaths").style.visibility = "visible";
   
   

  }
});