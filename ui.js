class UI {
  constructor(){
    this.city = document.querySelector('#city'),
    this.temp = document.querySelector('#temp')
    this.clima = document.querySelector('.clima')
    this.humedad = document.querySelector('.humedad')
    this.viento = document.querySelector('.viento')
    this.termica = document.querySelector('.s-termica')
    this.icon = document.querySelector('#img')
    this.input = document.querySelector('#input-city')
    this.bg = document.querySelector('.container')
  }

  populate(weather){
    this.city.innerHTML = weather.name;
    this.temp.textContent =`${Math.round(weather.main.temp)}°`;
    this.clima.textContent = weather.weather[0].description;
    this.humedad.innerHTML = `<i class="fas fa-tint"></i> Humedad: ${weather.main.humidity}%`;
    this.viento.innerHTML = `<i class="fas fa-wind"> </i> Viento: ${weather.wind.speed} km/h`;
    this.termica.innerHTML = `<i class="fas fa-thermometer-half"> </i> Sen. termica: ${weather.main.feels_like}°`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.input.value = '';
    
  }
  background(fondo){
    this.bg.setAttribute("style", "background-image: url(" + fondo.urls.regular );
    
  }
  
}

