<!DOCTYPE html>
<html lang="en">
<head>
	
	<link rel="icon" href="icon.png" type="image/x-icon">
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
	<title>COVID-19</title>
	
</head>
<body>
<div class="input-group input-group-lg">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-lg">Country Name</span>
  </div>
  <input type="text" id="country" class="form-control text-light transparent-input" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
</div>
<img class="homepage" id="homepage" src="icon.png">
<h1 id="title">COVID-19 Status Check</h1>
<div id="chart-container" style="position: relative; height:90vh; width:80vw">
    <canvas id="chart"></canvas>
</div>
<p class="text-light graph-settings" id="graph-settings" >Graph Settings:</p>
<button class = "btn btn-primary active" id = "active" onclick="updateChart()">Active Cases</button>
<button class = "btn btn-danger deaths" id="deaths" onclick="updateChart()">Deaths</button>
<button class = "btn btn-success recovered" id = "recovered" onclick="updateChart()">Recovered Cases</button>
<p class="text-light live-counter" id="live-counter" >Live Statistics:</p>
<p class="text-light total-counter" id="total-counter" >Confirmed Cases:</p>
<p class="text-light total-number" id="total-number"> </p>
<p class="text-light active-counter" id="active-counter" >Active Cases:</p>
<p class="text-light active-number" id="active-number"> </p>
<p class="text-light deaths-counter" id="deaths-counter" >Deaths:</p>
<p class="text-light deaths-number" id="deaths-number"> </p>
<p class="text-light recovered-counter" id="recovered-counter" >Recovered Cases:</p>
<p class="text-light recovered-number" id="recovered-number"> </p>



<script src="script.js"></script>

</body>