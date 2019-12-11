document.querySelector('body').classList.remove('preload');

var ctx = document.getElementById('chartActivity').getContext('2d');
var chart = new Chart(ctx, {
	responsive: true,
	type: 'line',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [{
			label: 'Activity',
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			data: [0, 10, 5, 2, 20, 30, 45]
		}]
	},
	options: {}
});

var ctx = document.getElementById('chartInbound').getContext('2d');
var chart = new Chart(ctx, {
	responsive: true,
	type: 'line',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [{
			label: 'Activity',
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			data: [0, 10, 5, 2, 20, 30, 45]
		}]
	},
	options: {}
});

var ctx = document.getElementById('chartOutbound').getContext('2d');
var chart = new Chart(ctx, {
	responsive: true,
	type: 'line',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [{
			label: 'Activity',
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			data: [0, 10, 5, 2, 20, 30, 45]
		}]
	},
	options: {}
});