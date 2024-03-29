import * as React from "react";
import Layout from "../components/layout/layout.component";
import { graphql } from "gatsby";
import Hero from "../components/index/hero/hero.components";
import Participate from "../components/index/participate/participate.components";
import Reasons from "../components/index/reasons/reasons.components";
import SignUp from "../components/index/sign-up/sign-up.components";
import BecomePartner from "../components/index/become-partner/become-partner.components";
import CallToAction from "../components/index/call-to-action/call-to-action.components";
import About from "../components/index/about/about.components";
import Partners from "../components/index/partners/partners.components";
import { ParallaxProvider } from "react-scroll-parallax";
import HeroSmall from "../components/index/hero-small/hero-small.components";
import HeroXSmall from "../components/index/hero-x-small/hero-x-small.components";
import { useIsMedium, useIsXSmall } from "../utils/media-query.hook";

export default function Home({ data }) {
  const heroData = data.allContentfulHero.nodes[0];
  const participateData = data.allContentfulParticipate.nodes[0];
  const reasonsData = data.allContentfulReasons.nodes[0];
  const aboutData = data.allContentfulAbout.nodes[0];
  const signUpData = data.allContentfulSignUp.nodes[0];
  const partnersData = data.allContentfulPartners.nodes[0];
  const becomePartnerData = data.allContentfulBecomePartner.nodes[0];
  const callToActionData = data.allContentfulCta.nodes[0];
  const exhibitors = data.allContentfulExposants.nodes[0];
  const menu = data.allContentfulMenu.nodes[0];
  const isMedium = useIsMedium();
  const isXSmall = useIsXSmall();

  return (
    <Layout menu={menu}>
      <ParallaxProvider>
        {!isMedium && <Hero data={heroData} />}
        {isMedium && <HeroSmall data={heroData} />}
        {isXSmall && !isMedium && <HeroXSmall data={heroData} />}
        <Participate data={participateData} />
        <SignUp data={signUpData} />
        <Reasons data={reasonsData} />
        <About data={aboutData} />

        <Partners data={partnersData} exhibitorsData={exhibitors} />
        <BecomePartner data={becomePartnerData} />
        <CallToAction data={callToActionData} />
      </ParallaxProvider>
    </Layout>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulHero(filter: { node_locale: { eq: $language } }) {
      nodes {
        title {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              title
              gatsbyImageData(quality: 100)
              __typename
            }
          }
        }
        shapeAndText
      }
    }
    allContentfulParticipate(filter: { node_locale: { eq: $language } }) {
      nodes {
        description {
          raw
        }
        Images {
          id
          gatsbyImageData(quality: 100)
        }
        video {
          file {
            url
          }
        }
        videoCoverImage {
          description
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
    allContentfulReasons(filter: { node_locale: { eq: $language } }) {
      nodes {
        reasons
      }
    }
    allContentfulAbout(filter: { node_locale: { eq: $language } }) {
      nodes {
        title {
          raw
        }
        participants
        exhibitors
        features
      }
    }
    allContentfulProgramming(filter: { node_locale: { eq: $language } }) {
      nodes {
        tile {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              title
              gatsbyImageData(quality: 100)
              __typename
            }
          }
        }
        kicker {
          raw
        }
        conferences {
          id
          subtitle
          title
          speaker
          speakerTitle
          speakerCompany
          date
          link
          logo {
            description
            gatsbyImageData(quality: 100)
          }
        }
      }
    }
    allContentfulSignUp(filter: { node_locale: { eq: $language } }) {
      nodes {
        title {
          raw
        }
        kicker {
          raw
        }
        tickets {
          title {
            raw
          }
          price
          link
          isFeatured
        }
      }
    }
    allContentfulPartners(filter: { node_locale: { eq: $language } }) {
      nodes {
        partenairePresentateur {
          id
          link
          logo {
            gatsbyImageData(quality: 100)
          }
        }
        destinationsVedettes {
          id
          link
          logo {
            gatsbyImageData(quality: 100)
          }
        }
        experienceUnique {
          id
          link
          logo {
            gatsbyImageData(quality: 100)
          }
        }
        partenairesCreateurs {
          id
          link
          logo {
            gatsbyImageData(quality: 100)
          }
        }
        partenairesDeSoutien {
          id
          link
          logo {
            gatsbyImageData(quality: 100)
          }
        }
      }
    }
    allContentfulBecomePartner(filter: { node_locale: { eq: "fr" } }) {
      nodes {
        title {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              title
              gatsbyImageData(quality: 100)
              __typename
            }
          }
        }
        kicker {
          raw
        }
        contactName
        contactPhoto {
          gatsbyImageData(quality: 100)
        }
        contactMessage {
          raw
        }
        contactEmail
      }
    }
    allContentfulCta(filter: { node_locale: { eq: $language } }) {
      nodes {
        title {
          raw
        }
        kicker {
          raw
        }
        button {
          raw
        }
      }
    }
    allContentfulMenu(filter: { node_locale: { eq: "fr" } }) {
      nodes {
        menuLinks {
          id
          title
          link
          image {
            description
            gatsbyImageData(quality: 100)
          }
        }
        backgroundVideo {
          file {
            url
          }
        }
      }
    }
    allContentfulExposants(filter: { node_locale: { eq: "fr" } }) {
      nodes {
        title {
          raw
        }
        kicker {
          raw
        }
        logos {
          id
          link
          logo {
            gatsbyImageData(quality: 100, placeholder: BLURRED)
            description
          }
        }
      }
    }
  }
`;
