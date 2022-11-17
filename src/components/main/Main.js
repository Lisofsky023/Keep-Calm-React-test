import BlockOne from "./BlockOne";
import Swiper from "../swiper/Swiper";
import { ProductImages } from "../assets";
import BlockTwo from "./BlockTwo";

export const cardsData = {
  firstCard: {
    id: 1,
    img: require("./img/photo1.jpg"),
    description:
      "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    descriptionSecond:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  secondCard: {
    id: 2,
    img: require("./img/photo2.jpg"),
    description:
      "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    descriptionSecond:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  thirdCard: {
    id: 3,
    img: require("./img/photo3.jpg"),
    description:
      "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    descriptionSecond:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  fourthCard: {
    id: 4,
    img: require("./img/photo4.jpg"),
    description:
      "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    descriptionSecond:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
};

export function Main() {
  return (
    <main className="main">
      <div className="main__wrapper">
        <BlockOne />
        <Swiper images={ProductImages} />
        <BlockTwo />
      </div>
    </main>
  );
}

export default Main;
