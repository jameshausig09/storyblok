import React, { useEffect, useState } from "react";
import "./Teaser.css";
import { storyblokEditable } from "@storyblok/react";
import cloudy from "../images/cloudy.svg";
import rainy from "../images/rainy.svg";
import sunny from "../images/sunny.svg";
import sunriseImg from "../images/sunrise.svg";
import sunsetImg from "../images/sunset.svg";
import CityCard from "../CityCard";

const Teaser = ({ blok }) => {
  const [location, setLocation] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);
  const handleOnChange = (ev) => {
    let filtered = blok.filter((city) =>
      city.toLowerCase().includes(ev.target.value)
    );
    setFilteredCities(filtered);
  };
  const formattedCity = (cityHeadline) => cityHeadline.replace("+", " ");

  const sunrise = blok.sunrise;
  const sunset = blok.sunset;
  const sunriseTime = sunrise?.slice(10);
  const sunsetTime = sunset?.slice(10);
  const weatherType =
    blok.condition === "rain"
      ? rainy
      : blok.condition === "cloudy"
      ? cloudy
      : sunny;
  const precipDescription = (precip) => {
    switch (true) {
      case precip >= 90:
        return "youre basically in the atlantic";
      case precip >= 80:
        return "maybe get ready to sail";
      case precip >= 75:
        return "get warm";
      case precip >= 50:
        return "if you get wet its not my fault";
      default:
        return "no chance of rain";
    }
  };
  const windspeedDescription = (windspeed) => {
    switch (true) {
      case windspeed >= 300:
        return "good luck, you need it";
      case windspeed >= 250:
        return "it cant get worse. or can it ?";
      case windspeed >= 200:
        return "ever dreamt of flying? here you go.";
      case windspeed >= 150:
        return "your a god if yo survive this!";
      case windspeed >= 100:
        return "if i were you i would hide";
      case windspeed >= 50:
        return "mediocre windspeed";
      case windspeed >= 25:
        return "enjoyable";
      case windspeed >= 0:
        return "theres a curse aboard this ship!";
      default:
        return "no windspeed given";
    }
  };
  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  return (
    <div className="overview">
      {location === "/overview" && (
        <div {...storyblokEditable(blok)} className="Teaser">
          <div className="overview-box-item">
            {blok.headline && (
              <h2 className="overview-box-text overview-box-text-first-child">
                {blok.headline}
              </h2>
            )}
            {blok.Image?.filename && (
              <img
                className="overview-box-main-image"
                src={blok.Image.filename}
                alt={blok.Image.alt || "Teaser"}
              />
            )}
            {blok.description && <p>{blok.description}</p>}
            <p>
              {blok.precipitation}%:{" "}
              {precipDescription(Number(blok.precipitation))}
            </p>
            <p>
              {blok.wind_speed}kmh:{" "}
              {windspeedDescription(Number(blok.wind_speed))}
            </p>
            <p className="overview-box-text">Sunrise: {sunriseTime}</p>
            <img
              src={sunriseImg}
              alt="sunrise"
              className="overview-box-image"
            />
            <p className="overview-box-text">Sunset: {sunsetTime}</p>
            <img src={sunsetImg} alt="sunset" className="overview-box-image" />
          </div>
        </div>
      )}
      {location === "/" && (
        <CityCard
          name={blok.headline}
          temp={blok.temp}
          imageSrc={weatherType ?? null}
        />
      )}
      {location === "/search" && (
        <div className="Search">
          <input
            className="search-input"
            type="text"
            placeholder="Search.."
            onChange={(ev) => handleOnChange(ev)}
          ></input>
          {!filteredCities.length && <p>nothing found!</p>}
          {filteredCities.map((city) => (
            <CityCard
              name={formattedCity(city.headline)}
              temp={city.temp}
              imageSrc={weatherType ?? null}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Teaser;
