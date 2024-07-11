import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";
import CityCard from "../CityCard";
import cloudy from "../images/cloudy.svg";
import rainy from "../images/rainy.svg";
import sunny from "../images/sunny.svg";
import "./Page.css";

const Page = ({ blok }) => {
  const [location, setLocation] = useState("");
  const [filteredCities, setFilteredCities] = useState(blok.body ?? []);
  const handleOnChange = (ev) => {
    let filtered = blok.body.filter((city) =>
      city.headline.toLowerCase().includes(ev.target.value)
    );
    setFilteredCities(filtered);
  };
  const formattedCity = (cityHeadline) => cityHeadline.replace("+", " ");
  const weatherType =
    blok.condition === "rain"
      ? rainy
      : blok.condition === "cloudy"
      ? cloudy
      : sunny;
  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  return (
    <main {...storyblokEditable(blok)} className="px-4">
      {blok.body
        ? blok.body.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))
        : null}
        {location === "/search" && (
          <div className="overview">
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
          </div>
        )}
    </main>
  );
};

export default Page;
