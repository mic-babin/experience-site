import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import {
  CardWrapper,
  TicketWrapper,
  Price,
  Title,
  Featured,
  SmallText,
  SmallTextBold,
} from "./ticket-card-large.styles";
import {
  useIsMedium,
  useIsXSmall,
  useIsSmall,
} from "../../../../utils/media-query.hook";
import TicketSrc from "../../../../assets/img/ticket.svg";

const TicketCardLarge = ({ ticket }) => {
  const { title, price, isFeatured, link } = ticket;
  const isMedium = useIsMedium();
  const isXSmall = useIsXSmall();
  const isSmall = useIsSmall();
  return (
    <CardWrapper
      className={!isFeatured ? "d-none" : "featured"}
      href={link}
      target="_blank"
    >
      <Featured style={{ visibility: isFeatured ? "visible" : "hidden" }}>
        <div>OFFRE DE LANCEMENT</div>
        <div className="large">EXCLUSIVE</div>
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
          <div className="overlay-content">
            <Title className="overlay-text">2 billet pour seulement</Title>
            {price && (
              <Price className="overlay-text">
                <img
                  style={{
                    marginTop: "15px",
                    transform: "translateX(-20px)",
                    height: "100px",
                  }}
                  src={TicketSrc}
                  alt="2 pour 1"
                />
                {price}$
              </Price>
            )}
            {isSmall && (
              <img
                src={TicketSrc}
                alt="2 pour 1"
                style={{
                  marginTop: "-30px",
                  marginBottom: "0px",
                  height: "75px",
                }}
              />
            )}
            {title && (
              <Title className="overlay-text">{renderRichText(title)}</Title>
            )}
            <SmallText className="overlay-sm">
              toutes les conférences, expériences, pitch de la journée ainsi que
              l’accès aux exposants, aux activités de collaboration, réseautage
              avec les experts et entre pairs. Pour participer aux classes de
              maîtres, un supplément de 75$ + taxes par classe de maître sera
              requis.
            </SmallText>
            <SmallTextBold>*Valable jusqu’au 30 novembre 2023</SmallTextBold>
          </div>
        </div>
        <div className="content">
          <Title>2 billet pour seulement</Title>
          {price && (
            <Price>
              <img
                src={TicketSrc}
                alt="2 pour 1"
                style={{
                  marginTop: "15px",
                  transform: "translateX(-20px)",
                  height: "100px",
                }}
              />
              {price}$
            </Price>
          )}
          {isSmall && (
            <img
              src={TicketSrc}
              alt="2 pour 1"
              style={{
                marginTop: "-30px",
                marginBottom: "0px",
                height: "75px",
              }}
            />
          )}
          {title && <Title>{renderRichText(title)}</Title>}
          <SmallText>
            toutes les conférences, expériences, pitch de la journée ainsi que
            l’accès aux exposants, aux activités de collaboration, réseautage
            avec les experts et entre pairs. Pour participer aux classes de
            maîtres, un supplément de 75$ + taxes par classe de maître sera
            requis.
          </SmallText>
          <SmallTextBold>*Valable jusqu’au 30 novembre 2023</SmallTextBold>
        </div>
      </TicketWrapper>
    </CardWrapper>
  );
};

export default TicketCardLarge;
