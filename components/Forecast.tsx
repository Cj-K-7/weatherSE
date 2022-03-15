import Image from "next/image";
import { hourlyWeather } from "./types";
import { weatherIconUrl } from "./utils";

function Forecast(hourWeather: hourlyWeather) {
  const date = new Date(hourWeather.dt*1000)
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const time = hour<10 ? `0${hour}:00` : `${hour}:00`;

  return (
    <>
      <div className="hourWeather">
        <h1 className="day">{hour === 0? `${month}.${day}`: <br/>}</h1>
        <div className="time">{time}</div>
        <Image  width={75} height={75}
          src={weatherIconUrl(hourWeather.weather[0].icon)}
          alt="weatherIcon"
        />
        <div className="temp">{(hourWeather.temp - 273.15).toFixed(1)} ℃</div>
      </div>
      <style jsx>{`
        .hourWeather {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .temp {
          font-size : 20px;
          letter-spacing: 0.6px;
          margin-bottom: 12px;
        }
        .day {
          font-size : 22px;
          font-weight : 600;
          margin-bottom : 8px;
        }
        .time{
          margin-bottom : -10px;
        }
      `}</style>
    </>
  );
}

export default Forecast;
