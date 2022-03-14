import type { GetStaticProps, NextPage } from "next";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import Meta from "../components/Meta";
import { IRecentData, IWeatherData } from "../components/types";

interface IHomeProps {
  weatherData: IWeatherData;
  recentData: IRecentData;
}

const Home: NextPage<IHomeProps> = ({ weatherData, recentData }) => {
  const [city , setCity] = useState<string>();
  const router = useRouter();
  const weatherIconUrl = (id: string) =>
    `http://openweathermap.org/img/wn/${id}@2x.png`;
  const onChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const {
      currentTarget: { value },
    } = event;
    setCity(value);
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search/${city}`);
  };
  return (
    <div>
      <Meta />
      <div>
        <div>{weatherData.weather[0].main}</div>
        <img
          width={50}
          height={50}
          src={weatherIconUrl(weatherData.weather[0].icon)}
          alt="weatherIcon"
        />
        <div>{weatherData.main.temp}</div>
        <div>{weatherData.main.pressure}</div>
        <div>
          {weatherData.wind.speed} / {weatherData.wind.deg}
        </div>
      </div>
      <div>
        <div>{recentData.timezone}</div>
        <div>
          {recentData.hourly.map((a) => (
            <div key={a.dt}>
              <div>{a.dt}</div>
              <div>{a.weather[0].main}</div>
              <div>{a.temp}</div>
              <img
                width={50}
                height={50}
                src={weatherIconUrl(a.weather[0].icon)}
                alt="weatherIcon"
              />
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="Zip Code"/>
        <input type="submit" />
      </form>
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
