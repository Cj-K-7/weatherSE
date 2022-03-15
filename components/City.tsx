import { IWeatherData } from "./types";
import { weatherIconUrl } from "./utils";

function City(weatherData: IWeatherData) {
  return (
    <div className="CityBox">
      <h1 className="city">{weatherData.name}</h1>
      <div className="main">
        <img
          className="icon"
          width={150}
          height={150}
          src={weatherIconUrl(weatherData.weather[0].icon)}
          alt="weatherIcon"
        />
        <div>
          <div className="mainWeather">{weatherData.weather[0].main}</div>
          <div className="temp">
            {(weatherData.main.temp - 273.15).toFixed(1)} ℃
          </div>
        </div>
      </div>
      <div className="sub">
        <div>Pressure : {weatherData.main.pressure} hPa</div>
        <div className="Wind">
          <h1>Wind :</h1>
          <div
            className="direction"
            style={{
              transform: `rotateZ(${weatherData.wind.deg}deg)`,
            }}
          >
            ⇈
          </div>
          <div>{weatherData.wind.deg} deg </div>
          <div>{weatherData.wind.speed} m/s</div>
        </div>
      </div>
      <style jsx>
        {`
          .CityBox {
            font-size : 20px;
            width: 400px;
            margin: 30px 0px;
          }
          .city {
            padding: 16px 0px;
            font-size: 48px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: -20px;
          }
          .main {
            display: flex;
            align-items: center;
            font-size: 30px;
          }
          .temp {
            margin-top : 5px;
            font-size: 26px;
          }
          .Wind {
            height : 50px;
            display: flex;
            align-items: center;
          }
          .Wind * {
            margin-right: 10px;
          }
          .direction {
            width: 35px;
            height: 35px;
            font-size: 35px;
          }
          @media (max-width: 1200px) {
            .CityBox {
              display: flex;
              flex-direction:column;
              align-items: center;
            font-size : 20px;
            width: 400px;
          }
          .gridTable {
          display: grid;
          grid-template-columns: repeat(4, 100px);
        }
        }
        `}
      </style>
    </div>
  );
}

export default City;
