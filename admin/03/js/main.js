document.querySelector('body').classList.remove('preload');

new Chart(document.getElementById("chart-giro"), {
	type: 'line',
	data: {
		labels: [30.11,1.12,2.12,3.12,4.12,5.12,6.12,7.12,8.12,9.12,10.12],
		datasets: [{ 
			data: [500,1507.98,1282.12,1282.12,1232.12,1104.45,1000.89,980.89,950.89,808.89,700],
			label: "Guthaben",
			borderColor: "#00724b",
			fill: false
		}
		]
	},
	options: {
		title: {
			display: false,
			text: ''
		},
		legend: {
			display: false
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
		elements: {
			line: {
				tension: 0
			}
		}
	}
});

new Chart(document.getElementById("chart-darlehen"), {
	type: 'line',
	data: {
		labels: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
		datasets: [{ 
			data: [-2000,-1900,-1800,-1700,-1600,-1500,-1400,-1300,-1200,-1100,-1000,-900],
			label: "Gesamtsaldo",
			borderColor: "#ff0000",
			fill: false
		}
		]
	},
	options: {
		title: {
			display: false,
			text: ''
		},
		legend: {
			display: false
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
		elements: {
			line: {
				tension: 0
			}
		}
	}
});