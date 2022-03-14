import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

const Search: NextPage = ({
  cityWeather,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <div>{cityWeather.name}</div>
      <div>{cityWeather.main.temp}</div>
      <div>{cityWeather.weather[0].main}</div>
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const APIKey = process.env.API_KEY;
  const cityWeather = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        context.params?.id + ""
      }&appid=${APIKey}`
    )
  ).json();
  return {
    props: { cityWeather },
  };
};
