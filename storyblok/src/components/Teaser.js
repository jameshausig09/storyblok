import "./Teaser.css";
import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  console.log(blok); // if you are not using this, you can remove this whole line - (good coding practice to remove unused code or console.log statements)
  return (
    <div {...storyblokEditable(blok)} className="Teaser">
      <h2 className="py-32 text-6xl text-[#50b0ae] font-bold text-center">
        {blok.headline}
      </h2>
      <p>{blok.description}</p>
      {blok.Image && <img src={blok.Image.filename} alt={blok.Image.alt} />}
    </div>
  );
};

export default Teaser;
