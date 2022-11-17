import MainCard from "./MainCard";
import BlockTwoTitle from "./BlockTwoTitle";
import { cardsData } from "./Main";

export function BlockTwo() {
  return (
    <div className="main__container">
      <BlockTwoTitle />
      <MainCard cardType="first" cardData={cardsData.thirdCard} />
      <MainCard cardType="second" cardData={cardsData.fourthCard} />
    </div>
  );
}

export default BlockTwo;
