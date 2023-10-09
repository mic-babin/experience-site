import React from "react";
import {
  CardWrapper,
  Subtitle,
  Title,
  Name,
  Text,
  Grid,
  Col,
  Logo,
  TextWrapper,
} from "./conference-card.styles";
import { Trans } from "react-i18next";
import { useFormatDate } from "../../../../utils/format-date";
import { getImage } from "gatsby-plugin-image";

import { useIsMedium } from "../../../../utils/media-query.hook";

const ConferenceCard = ({ conference, index }) => {
  const {
    title,
    subtitle,
    speaker,
    speakerCompany,
    speakerTitle,
    date,
    link,
    logo,
  } = conference;

  const isMedium = useIsMedium();

  const time = useFormatDate(date).time;
  return (
    <CardWrapper
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: index / 10,
      }}
      viewport={{ once: true }}
    >
      <Grid>
        <Col>
          {subtitle && (
            <Subtitle>
              {subtitle}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {isMedium && date && <Subtitle className="left">{time}</Subtitle>}
            </Subtitle>
          )}
          {title && <Title>{title}</Title>}
        </Col>
        <Col>
          <Subtitle>
            <Trans>speaker</Trans>
          </Subtitle>
          {speaker && <Name>{speaker}</Name>}
          <TextWrapper>
            {speakerTitle && <Text>{speakerTitle}</Text>}
            {speakerCompany && <Text>,&nbsp;{speakerCompany}</Text>}
          </TextWrapper>

          {logo && <Logo image={getImage(logo)} alt="Logo" />}
        </Col>
        {!isMedium && (
          <Col>{date && <Subtitle className="left">{time}</Subtitle>}</Col>
        )}
      </Grid>
    </CardWrapper>
  );
};

export default ConferenceCard;
