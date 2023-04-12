import React, { useEffect, useState } from "react";
import { wordsEn } from "../../assets/word";
import ReactWordcloud, {Callbacks, OptionsProp} from "react-wordcloud";
import {
  ReactWordcloudContainer,
} from "../../style/main/wordcloud";

function WordCloud() {
  const [changeWordcloud, setChangeWordcloud] = useState<boolean>(true)
  const options: OptionsProp = {
    colors: ["#fff"],
    deterministic: changeWordcloud,
    enableTooltip: false,
    fontFamily: "impact",
    fontSizes: [5, 200],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 3,
    rotations: 3,
    scale: "log",
    spiral: 'archimedean',
    randomSeed: 'plzqwe',
    transitionDuration: 1000,
  }

  return (
    <ReactWordcloudContainer>
      <ReactWordcloud
        options={options}
        words={wordsEn}
        callbacks={{
          getWordColor: (word) => (word.value > 100 ? "blue" : "rgba(255,255,255,0.5)"),
          onWordClick: () => {
            setChangeWordcloud(prev => !prev)
          },
        }}
      />
    </ReactWordcloudContainer>
  );
}

export default React.memo(WordCloud);
