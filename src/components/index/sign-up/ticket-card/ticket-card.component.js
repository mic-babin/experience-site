import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import {
  CardWrapper,
  TicketWrapper,
  Price,
  Title,
  Featured,
} from "./ticket-card.styles";

const TicketCard = ({ ticket }) => {
  const { title, price, isFeatured, link } = ticket;
  return (
    <CardWrapper
      className={isFeatured ? "featured" : ""}
      href="https://perdu.com"
      target="_blank"
    >
      {isFeatured && (
        <Featured>
          <div>RECOMMANDÉ</div>
        </Featured>
      )}
      <TicketWrapper className={isFeatured ? "featured" : ""}>
        <div className="overlay">
          {price && <Price className="overlay-text">{price}$</Price>}
          {title && (
            <Title className="overlay-text">{renderRichText(title)}</Title>
          )}
        </div>

        {price && <Price>{price}$</Price>}
        {title && <Title>{renderRichText(title)}</Title>}
      </TicketWrapper>
    </CardWrapper>
  );
};

export default TicketCard;
