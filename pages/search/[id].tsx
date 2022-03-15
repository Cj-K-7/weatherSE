import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import City from "../../components/City";

const Search: NextPage = ({
  cityWeather,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="box">
      <City {...cityWeather}/>
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
