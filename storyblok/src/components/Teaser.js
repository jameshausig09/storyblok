import "./Teaser.css";
import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
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
