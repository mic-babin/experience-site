import React from "react";
import { Section } from "./participate.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactPlayer from "react-player";

const Participate = ({ data }) => {
  const { Images, description, video } = data;
  const s = { background: "#000000", color: "#e8e8e6" };

  return (
    <Section s={s}>
      {description && <div>{renderRichText(description)}</div>}
      {Images &&
        Images.map((image) => (
          <GatsbyImage key={image.id} image={getImage(image)} alt="TODO" />
        ))}
      {video && (
        <ReactPlayer
          priority
          autoPlay
          loop
          muted
          url={"https:" + video.file.url}
          playing={true}
          height="100%"
          width="100%"
        />
      )}
    </Section>
  );
};

export default Participate;
