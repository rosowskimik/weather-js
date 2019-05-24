//Init weather
const weather = new Weather('Poznan');
//Init UI
const ui = new UI;

//DOM event listener
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather(){
	weather.getWeather()
		.then(data => {
			ui.paint(data);
		})
		.catch(err => console.log(err))
}