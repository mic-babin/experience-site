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
} from "./conference-card.styles";
import { Trans } from "react-i18next";
import { useFormatDate } from "../../../../utils/format-date";
import { getImage } from "gatsby-plugin-image";
import { spring } from "framer-motion";

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

  const time = useFormatDate(date).time;
  return (
    <CardWrapper
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: index / 10,
      }}
    >
      <Grid>
        <Col>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {title && <Title>{title}</Title>}
        </Col>
        <Col>
          <div>
            <Subtitle>
              <Trans>speaker</Trans>
            </Subtitle>
            {speaker && <Name>{speaker}</Name>}
            <div>
              {speakerTitle && <Text>{speakerTitle}</Text>}
              {speakerCompany && <Text>,&nbsp;{speakerCompany}</Text>}
            </div>
          </div>

          <Logo image={getImage(logo)} alt={logo.description} />
        </Col>
        <Col>{date && <Subtitle className="left">{time}</Subtitle>}</Col>
      </Grid>
    </CardWrapper>
  );
};

export default ConferenceCard;
