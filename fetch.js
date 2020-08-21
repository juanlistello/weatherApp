class Fetch {
  constructor(city){
    this.city = city,
    this.apiKey = '70fd33b658260b10272ff0247269840f'
    this.unsplashKey = 'lJH4UXPnoWQ5CJ1SZA3PiusCTJ2o4d41HHkJeImxbQA';

  }
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}&lang=sp`);
    const data = await response.json();
    // console.log(data)
    return data;
    
  }

  async getPhoto(city){
    const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${this.city},city&client_id=${this.unsplashKey}`);
    const data = await response.json();
    
    // Loop of the array of fetched photos
    const randomPhoto = data.results[Math.floor(Math.random() * data.results.length)]

    return randomPhoto;
  }
  changeLocation(city){
  this.city = city; 
}

}

