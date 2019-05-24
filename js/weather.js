class Weather {
	constructor(city) {
		this.apiKey = '774a0e519e7e46f3931140457192405',
		this.city = city
	}

	async getWeather() {
		const response = await fetch(`https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
		const data = await response.json();
		return data;
	}
}