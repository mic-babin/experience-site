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
    <CardWrapper className={`d-flex ${isFeatured ? "drop-shadow-gold" : ""}`}>
      {isFeatured && (
        <Featured>
          <div>RECOMMANDÉ</div>
        </Featured>
      )}
      <TicketWrapper className={isFeatured ? "featured" : ""}>
        {price && <Price>{price}$</Price>}
        {title && <Title>{renderRichText(title)}</Title>}
      </TicketWrapper>
    </CardWrapper>
  );
};

export default TicketCard;
