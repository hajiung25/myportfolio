import React, { useEffect, useState } from "react";
import { wordsEn } from "../../../assets/word";
import ReactWordcloud, { Callbacks, OptionsProp } from "react-wordcloud";
import { ReactWordcloudContainer } from "../../../style/main/wordcloud";
import { useSelector } from "react-redux";
import { BrowserSizeState } from "../../../redux/reducers/reducer";

function WordCloud({ scrollMove }: { scrollMove: number }) {
  const [changeWordcloud, setChangeWordcloud] = useState<string>('307')
  const [maxWordSize, setMaxWordSize] = useState<number>(200)
  const [rotationValue, setRotationValue] = useState<number>(3)
  const browserSizeValue = useSelector((state: BrowserSizeState) => state.browserSize.size)
  useEffect(() => {
    let newWordSize: number
    let newRotationValue: number
    if (browserSizeValue.width > 2300) {
      newWordSize = 300
      newRotationValue = 2
    } else if (browserSizeValue.width < 900) {
      newWordSize = 80
      newRotationValue = 2
    } else {
      const range = 200 - 80;
      const step = range / (2300 - 900 - 1);
      const adjustedArg = browserSizeValue.width - 900;
      newWordSize = Math.floor(110 + (adjustedArg * step));
      newRotationValue = 3
    }
    setRotationValue(newRotationValue)
    setMaxWordSize(newWordSize)
  }, [browserSizeValue])
  const options: OptionsProp = {
    colors: ["#fff"],
    deterministic: true,
    enableTooltip: false,
    fontFamily: "impact",
    fontSizes: [1, maxWordSize],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotationAngles: [0, 90],
    rotations: rotationValue,
    scale: "log",
    spiral: 'archimedean',
    randomSeed: changeWordcloud,
    transitionDuration: 1000,
  }

  return (
    <ReactWordcloudContainer scrollMove={scrollMove}>
      <ReactWordcloud
        options={options}
        words={wordsEn}
        callbacks={{
          getWordColor: (word) => (word.value > 100 ? "blue" : "rgba(255,255,255,0.5)"),
          onWordClick: (e) => {
            setChangeWordcloud(prev => {
              if(prev !== '307'){
                return '307'
              }else{
                const newValue = prev + `${Math.floor(Math.random() * 10) + 1}`;
                return newValue
              }
            })
          },
        }}
      />
    </ReactWordcloudContainer>
  );
}

export default React.memo(WordCloud);
