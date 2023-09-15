import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const TicketCard = ({ ticket }) => {
  const { title, price, isFeatured, link } = ticket;
  return (
    <>
      {title && <div>{renderRichText(title)}</div>}
      {price && <div>{price}</div>}
    </>
  );
};

export default TicketCard;
