document.querySelector('body').classList.remove('preload');

new Chart(document.getElementById("line-chart"), {
	type: 'line',
	data: {
		labels: [1.12,2.12,3.12,4.12,5.12,6.12,7.12,8.12,9.12,1.12],
		datasets: [{ 
			data: [1507.98,932.38,866.01,854.02,845.02,808.89,808.89,808.89,808.89,0],
			label: "Label",
			borderColor: "#000",
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
    	}
	}
});