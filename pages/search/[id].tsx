import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import City from "../../components/City";
import Forecast from "../../components/Forecast";
import { IRecentData, IWeatherData } from "../../components/types";

const Search: NextPage = ({
  cityWeather,
  recentData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { hourly } = recentData;
  const sixtyHourWeather = hourly.slice(0, 16);
  if (cityWeather.cod === "404") {
    return (
      <div style={{ margin: 100 }}>
        <h1 className="title">Sorry.. there is no such city </h1>
      </div>
    );
  }

  return (
    <div className="box">
      <City {...cityWeather} />
      <div className="hours">
        <h1 className="title">16 Hours Forecast</h1>
        <div className="timezone">Time-Zone : {recentData.timezone}</div>
        <div className="gridTable">
          {sixtyHourWeather.map((hourWeather: any, index: number) => (
            <Forecast key={index} {...hourWeather} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const APIKey = process.env.API_KEY;
  const cityWeather: IWeatherData = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        context.params?.id + ""
      }&appid=${APIKey}`
    )
  ).json();
  const recentData: IRecentData = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${cityWeather.coord.lat}&lon=${cityWeather.coord.lon}&exclude=daily&appid=${APIKey}`
    )
  ).json();
  return {
    props: { cityWeather, recentData },
  };
};
