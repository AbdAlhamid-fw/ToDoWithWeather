import { FunctionComponent, useContext, useEffect } from "react";
import WeatherContext from "../../../contexts/weather/context";

interface WeatherProps {}

const Weather: FunctionComponent<WeatherProps> = () => {
  const weather = useContext(WeatherContext);
  useEffect(() => {
    weather.actions && weather.actions.getCurrentWeather();
    weather.data && console.log(weather.data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>weather</h1>
      {weather.loading ? (
        <div> Loading . . . </div>
      ) : weather.error ? (
        <div> Error !! </div>
      ) : (
        weather.data && <div> look to console  </div>
      )}
    </>
  );
};

export default Weather;
