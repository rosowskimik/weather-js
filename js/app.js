//Init storage
const storage = new Storage();
//Check location in ls
const weatherCity = storage.getLocation()
//Init weather
const weather = new Weather(weatherCity);
//Init UI
const ui = new UI();

//DOM event listener
document.addEventListener('DOMContentLoaded', getWeather);

//Location button event listener
document.querySelector('#w-change-btn').addEventListener('click', () => {
	const newCity = document.querySelector('#city');
	weather.changeCity(newCity.value);
	//Fetch and paint new weather
	getWeather();
	//Add new city to ls
	storage.setLocation(newCity.value);
	//Reset form city value
	newCity.value = '';
	//Hide modal window
	$('#locModal').modal('hide');
});

//Fetch and paint weather
function getWeather(){
	weather.getWeather()
		.then(data => ui.paint(data))
		.catch(err => console.log(err));
}