import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2 className="py-32 text-6xl text-[#50b0ae] font-bold text-center">
        {blok.headline}
      </h2>
      <p>{blok.description}</p>
    </div>
  );
};

export default Teaser;
