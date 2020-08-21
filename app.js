// init Storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const fetchApi = new Fetch(weatherLocation);

const ui = new UI();




// get weather on dom load
window.addEventListener('DOMContentLoaded', loadFetch)


document.querySelector('#submit').addEventListener('click', (e)=>{

  let inputCity = document.querySelector('#input-city').value;
  
  fetchApi.changeLocation(inputCity)

  storage.setLocationData(inputCity)
  loadFetch();
})




// getweather function
function loadFetch(){
  fetchApi.getWeather()
  .then(results => ui.populate(results))
  .catch(err => console.log('error'))

  fetchApi.getPhoto()
  .then(results => ui.background(results))
  .catch(err => console.log(err))
  
}

