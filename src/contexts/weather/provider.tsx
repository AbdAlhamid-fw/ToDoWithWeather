/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer } from "react";
import weatherService from "../../servises/api-services/weather";

import WeatherContext, { internalState } from "./context";
import reducer from "./reducer";

const WeatherContextProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, internalState);

  const getCurrentWeather = async () => {
    console.log("getCurrentWeather in context ")
    dispatch({ type: "LOADING" });
    try {
      const result = await weatherService.getCurrentWeather("syria");
      dispatch({ type: "SUCCESS", payload: { data: result } });
      console.log("result in context ", result);
      
    } catch (error:any) {
      dispatch({ type: "ERROR", payload: { error: error } });
      console.log("error in context :", error);
      return;
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        actions: {
          getCurrentWeather,
        },
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
