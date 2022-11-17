import MainCard from "./MainCard";
import MainTitle from "./MainTitle";
import { cardsData } from "./Main";
import { titleText } from "./MainTitleText";

console.log('titleText', titleText.title)


export function BlockOne() {
  return (
    <div className="main__container">
      <MainTitle title={titleText.title} />
      <MainCard cardType="first" cardData={cardsData.firstCard} />
      <MainCard cardType="second" cardData={cardsData.secondCard} />
    </div>
  );
}

export default BlockOne;
