import * as React from "react";

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" });
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Grotext55.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Grotesk55"
    />,
    <link
      rel="preload"
      href="/fonts/Grotext65.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Grotesk65"
    />,
    <link
      rel="preload"
      href="/fonts/Grotext.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Grotesk"
    />,
    <link
      rel="preload"
      href="/fonts/GrotextBold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="GroteskBold"
    />,
  ]);
};
