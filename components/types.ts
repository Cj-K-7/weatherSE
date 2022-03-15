export interface ICityProps {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
      lon: number;
      lat: number;
  }
}

interface weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherData {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: weather[];
  wind: { speed: number; deg: number };
}

export interface hourlyWeather {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  winde_gust: number;
  weather: weather[];
  pop: number;
}

export interface IRecentData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: string;
  minutely: string;
  hourly: hourlyWeather[];
}
