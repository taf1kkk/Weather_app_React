import './styles/App.css';
import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const APIKEY = "f7591b67ae730491b334e75fc49b50ae";


class App extends React.Component {

  state={
    temp: undefined,
    city: undefined,
    weather: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.cit.value;


    if(city){
      const APYURL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric)
      `)
      const data = await APYURL.json()
      console.log(data);

      let temp = data.main.temp;
      let tempFToCel = Math.floor(temp - 273.15);


      let sunsetInSec = data.sys.sunset
      let date = new Date(sunsetInSec * 1000)
      let timeSunset = date.toLocaleTimeString()

      let sunriseinSec = data.sys.sunrise
      let dates = new Date(sunriseinSec * 1000)
      let timeSunrise = dates.toLocaleTimeString()


      this.setState({
        temp: tempFToCel,
        city: data.name,
        country: data.sys.country,
        sunrise: timeSunrise,
        sunset: timeSunset,
        error: ""
      });
    }


  }

  render() {
    return (
      <div>
      <Info/>;
      <Form weatherMethod = {this.getWeather}/>
      <Weather
        temp= {this.state.temp}
        city= {this.state.city}
        country= {this.state.country}
        sunrise= {this.state.sunrise}
        sunset= {this.state.sunset}
        error= {this.state.error}
      />
      </div>
    )
  }
}




// function App() {
//   return (
//   <div>
//   <h1 className='mainText'>Weather App</h1>
//   <div className='cityChoose'>
//     <button id='city' value="1"> Kyiv </button>
//     <button id='city' value="2">Konotop</button>
//     <button id='city' value="3">Tallin</button>
//   </div>
//   <div className='block'>
//     <div className='block_first'> </div>
//     <div className='block_first'></div>
//     <div className='block_first'></div>
//   </div>
// </div>
//   );
// }

export default App;
