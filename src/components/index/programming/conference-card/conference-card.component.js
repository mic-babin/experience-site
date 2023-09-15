import React from "react";

const ConferenceCard = ({ conference }) => {
  const { title, subtitle, speaker, speakerCompany, speakerTitle, date, link } =
    conference;
  return (
    <>
      {subtitle && <div>{subtitle}</div>}
      {title && <div>{title}</div>}
      {speaker && <div>{speaker}</div>}
      <div>
        {speakerTitle && <span>{speakerTitle}</span>}
        {speakerCompany && <span>{speakerCompany}</span>}
        {date && <div>{date}</div>}
      </div>
    </>
  );
};

export default ConferenceCard;
