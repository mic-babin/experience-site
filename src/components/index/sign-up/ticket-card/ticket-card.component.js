import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import {
  CardWrapper,
  TicketWrapper,
  Price,
  Title,
  Featured,
} from "./ticket-card.styles";
import { useIsMedium, useIsXSmall } from "../../../../utils/media-query.hook";

const TicketCard = ({ ticket }) => {
  const { title, price, isFeatured, link } = ticket;
  const isMedium = useIsMedium();
  const isXSmall = useIsXSmall();
  return (
    <CardWrapper
      className={isFeatured ? "d-none" : ""}
      href={link}
      target="_blank"
    >
      <Featured style={{ visibility: isFeatured ? "visible" : "hidden" }}>
        <div>RECOMMANDÉ</div>
      </Featured>

      <TicketWrapper
        className={isFeatured ? "featured" : ""}
        style={{
          width:
            !isFeatured && isXSmall
              ? "267px"
              : !isFeatured && isMedium
              ? "293px"
              : !isFeatured && "337px",
        }}
      >
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
