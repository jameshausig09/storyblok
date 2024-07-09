import React from "react";
// { useEffect, useState }
import "./Teaser.css";
import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  //   const [weatherData, setWeatherData] =useState(null);

  //   useEffect(() => {
  // const fetchWeatherData = async axios.get(
  //   "https://api.openweathermap.org/data/2.5/weather",
  //   {
  //     params: {
  //       q: "Paris",
  //       appid: "c6f9c5276d42f0a32ce26ae3d1334051",
  //       units: "metric,"
  //     },
  //   }
  // );
  // setWeatherData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //   }
  // };

  //   }
  if (!blok) {
    return null;
  }

  return (
    <div {...storyblokEditable(blok)} className="Teaser">
      {blok.headline && (
        <h2 className="py-32 text-6xl text-[#50b0ae] font-bold text-center">
          {blok.headline.replace("+", " ")}
        </h2>
      )}
      {blok.description && <p>{blok.description}</p>}
      {blok.Image?.filename && (
        <img src={blok.Image.filename} alt={blok.Image.alt || "Teaser"} />
      )}
    </div>
  );
};

export default Teaser;
