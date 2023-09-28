import Shape1Src from "../../../assets/img/2edition.svg";
import Shape2Src from "../../../assets/img/ExperienceHeader.svg";
import Shape3Src from "../../../assets/img/grand-quai.svg";
import Shape4Src from "../../../assets/img/22-fevrier.svg";
import { v4 as uuidv4 } from "uuid";

export const getShapes = (sectionSize) => [
  {
    key: uuidv4(),
    src: Shape1Src,
    alt: "2e edition",
    style: { width: "16.8vw" },
    initial: { y: -300, x: "-2.1vw" },
    animate: { y: sectionSize.height - sectionSize.width * 0.39 },
    transition: {
      duration: 1,
      type: "spring",
      damping: 7,
      stiffness: 100,
      delay: 2.3,
    },
  },
  {
    key: uuidv4(),
    src: Shape2Src,
    alt: "Salon Experience",
    style: { width: "51.2vw" },
    initial: { y: -850, x: 0 },
    animate: { y: sectionSize.height - sectionSize.width * 0.368 },
    transition: {
      duration: 1,
      type: "spring",
      damping: 7,
      stiffness: 100,
      delay: 1.9,
    },
  },
  {
    key: uuidv4(),
    src: Shape3Src,
    alt: "Grand Quai du Port de Montréal",
    style: { width: "18.3vw" },
    initial: { y: -500, x: "18.5vw" },
    animate: {
      y: sectionSize.height - sectionSize.width * 0.182,
    },
    transition: {
      duration: 1,
      type: "spring",
      damping: 7,
      stiffness: 100,
      delay: 1,
    },
  },
  {
    key: uuidv4(),
    src: Shape4Src,
    style: { width: "32.9vw" },
    alt: "22 février 2024",
    initial: { y: -500, x: "36.2vw" },
    animate: {
      y: sectionSize.height - sectionSize.width / 6.05,
    },
    transition: {
      duration: 1,
      type: "spring",
      damping: 7,
      stiffness: 100,
      delay: 1.4,
    },
  },
];

export const getSmallShapes = (sectionSize) => [
  {
    key: uuidv4(),
    src: Shape1Src,
    alt: "2e edition",
    style: { width: "39.31vw" },
    initial: { y: -300, x: "-4.9vw" },
    animate: { y: sectionSize.height - sectionSize.width / 1.26 },
    transition: {
      duration: 1,
      type: "spring",
      damping: 7,
      stiffness: 100,
      delay: 2.1,
    },
  },
  {
    key: uuidv4(),
    src: Shape2Src,
    alt: "Salon Experience",
    style: { width: "100vw" },
    initial: { y: -850, x: 0 },
    animate: { y: sectionSize.height - sectionSize.width / 1.43 },
    transition: {
      duration: 1,
      type: "spring",
      damping: 7,
      stiffness: 100,
      delay: 1.9,
    },
  },
  {
    key: uuidv4(),
    src: Shape3Src,
    alt: "Grand Quai du Port de Montréal",
    style: { width: "35.52vw" },
    initial: { y: -500, x: "60.4vw" },
    animate: {
      y: sectionSize.height - sectionSize.width * 0.35,
    },
    transition: {
      duration: 1,
      type: "spring",
      damping: 7,
      stiffness: 100,
      delay: 1,
    },
  },
  {
    key: uuidv4(),
    src: Shape4Src,
    style: { width: "71.04vw" },
    alt: "22 février 2024",
    initial: { y: -500, x: "0vw" },
    animate: {
      y: sectionSize.height - sectionSize.width / 1.0,
    },
    transition: {
      duration: 1,
      type: "spring",
      damping: 7,
      stiffness: 100,
      delay: 2.3,
    },
  },
];
