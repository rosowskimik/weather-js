class UI {
	constructor() {
		this.location = document.querySelector('#w-location'),
		this.desc = document.querySelector('#w-desc'),
		this.temp = document.querySelector('#w-temp'),
		this.icon = document.querySelector('#w-icon'),
		this.humidity = document.querySelector('#w-humidity'),
		this.pressure = document.querySelector('#w-pressure'),
		this.feelsLike = document.querySelector('#w-feels-like'),
		this.wind = document.querySelector('#w-wind')
	}

	paint(data) {
		this.location.innerText = `${data.location.name}, ${data.location.country}`;
		this.desc.innerText = data.current.condition.text;
		this.temp.innerText =`${data.current.temp_c} C (${data.current.temp_f} F)`;
		this.icon.setAttribute('src', data.current.condition.icon);
		this.humidity.innerText = `Humidity: ${data.current.humidity}%`;
		this.pressure.innerText = `Pressure: ${data.current.pressure_mb} hPa`;
		this.feelsLike.innerText = `Feels like: ${data.current.feelslike_c} C (${data.current.feelslike_f} F)`;
		this.wind.innerText = `Wind: ${data.current.wind_dir} at ${data.current.wind_kph} km/h`;
	}
}