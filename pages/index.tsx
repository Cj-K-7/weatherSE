import type { GetStaticProps, NextPage } from "next";
import React from "react";
import City from "../components/City";
import Forecast from "../components/Forecast";
import Meta from "../components/Meta";
import { IRecentData, IWeatherData, ICityProps } from "../components/types";

interface IHomeProps {
  weatherData: IWeatherData;
  recentData: IRecentData;
}

const Home: NextPage<IHomeProps> = ({ weatherData, recentData }) => {
  const sixtyHourWeather = recentData.hourly.slice(0, 16);
  return (
    <div>
      <Meta />
      <div className="box">
        <div>
          <City {...weatherData} />
        </div>
        <div className="hours">
          <h1 className="title">16 Hours Forecast</h1>
          <div className="timezone">TimeZone : {recentData.timezone}</div>
          <div className="gridTable">
            {sixtyHourWeather.map((hourWeather, index) => (
              <Forecast key={index} {...hourWeather} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .gridTable {
          display: grid;
          grid-template-columns: repeat(8, 100px);
        }
        .hours {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .timezone {
          align-self: flex-end;
          margin-right: 16px;
        }
        @media (max-width: 1200px) {
          .box {
            display: flex;
            align-items:center;
            flex-direction: column;
          }
          .gridTable {
          display: grid;
          grid-template-columns: repeat(4, 100px);
        }
        }
      `}</style>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const APIKey = process.env.API_KEY;
  const weatherData: IWeatherData = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${APIKey}&lang=kr`
    )
  ).json();

  const recentData: IRecentData = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=daily&appid=${APIKey}`
    )
  ).json();

  return { props: { weatherData, recentData } };
};
