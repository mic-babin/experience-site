import Shape1Src from "../../../assets/img/2edition.svg";
import Shape2Src from "../../../assets/img/salon-experience.svg";
import Shape3Src from "../../../assets/img/grand-quai.svg";
import Shape4Src from "../../../assets/img/22-fevrier.svg";
import Shape5Src from "../../../assets/img/presente-par.svg";
import { v4 as uuidv4 } from "uuid";
export const getShapes = (sectionSize) => [
  {
    key: uuidv4(),
    src: Shape1Src,
    alt: "2e edition",
    style: { width: "19.8vw" },
    initial: { y: -300, x: "-2.1vw" },
    animate: { y: sectionSize.height - sectionSize.width * 0.373 },
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
    animate: { y: sectionSize.height - sectionSize.width * 0.459 },
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
    initial: { y: -500, x: "26.5vw" },
    animate: {
      y: sectionSize.height - sectionSize.width * 0.185,
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
    style: { width: "41.9vw" },
    alt: "22 février 2024",
    initial: { y: -500, x: "43.5vw" },
    animate: {
      y: sectionSize.height - sectionSize.width * 0.218,
    },
    transition: {
      duration: 1,
      type: "spring",
      damping: 7,
      stiffness: 100,
      delay: 1.4,
    },
  },
  {
    key: uuidv4(),
    src: Shape5Src,
    alt: "Présenté par Lulu",
    style: { width: "26.9vw" },
    initial: { y: -500, x: "73.1vw" },
    animate: {
      y: sectionSize.height - sectionSize.width * 0.275,
    },
    transition: {
      duration: 1,
      type: "spring",
      damping: 7,
      stiffness: 100,
      delay: 1.8,
    },
  },
];
