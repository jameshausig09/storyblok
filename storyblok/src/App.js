import { useEffect, useState } from "react";
import "./App.css";
import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import fetchData from "./utils/fetchData";

function App() {
  const [apiCityData, setApiCityData] = useState({});

  let slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "draft" });

  useEffect(() => {
    const fetchDataForAllCities = async () => {
      const responses = await Promise.all(
        story.content?.body.map((city) => {
          return fetchData(city.headline.replace(/\s+/g, "+"));
        })
      );
      const newData = story.content?.body.reduce((acc, city, index) => {
        acc[city.headline] = responses[index];
        return acc;
      }, {});

      // Only update if there's a change
      if (JSON.stringify(apiCityData) !== JSON.stringify(newData)) {
        setApiCityData(newData);
      }
    };
    if (story.content?.body.length > 0) {
      fetchDataForAllCities();
    }
  }, [story.content?.body, apiCityData]);

  console.log('apiCityData', apiCityData);

  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}

export default App;
