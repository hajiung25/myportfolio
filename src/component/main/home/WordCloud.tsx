import React, { useEffect, useState } from "react";
import { wordsEn } from "../../../assets/word";
import ReactWordcloud, { Callbacks, OptionsProp } from "react-wordcloud";
import { ReactWordcloudContainer } from "../../../style/main/wordcloud";
import { useSelector } from "react-redux";
import { BrowserSizeState } from "../../../redux/reducers/reducer";

function WordCloud({ setIsClickMyname, scrollMove }: { setIsClickMyname: any, scrollMove: number }) {
  const [changeWordcloud, setChangeWordcloud] = useState<boolean>(true)
  const [maxWordSize, setMaxWordSize] = useState<number>(200)
  const [rotationValue, setRotationValue] = useState<number>(3)
  const browserSizeValue = useSelector((state: BrowserSizeState) => state.browserSize.size)
  useEffect(() => {
    console.log(Math.ceil((1800- browserSizeValue.width) / 100) * 100)
    let newWordSize:number
    let newRotationValue:number
    if (browserSizeValue.width > 2000) {
      newWordSize = 300
      newRotationValue = 2
    } else if (browserSizeValue.width < 900) {
      newWordSize = 80
      newRotationValue = 2
    } else {
      const range = 200 - 80;
      const step = range / (2000 - 900 - 1);
      const adjustedArg = browserSizeValue.width - 900;
      newWordSize =  Math.floor(80 + (adjustedArg * step));
      newRotationValue = 3
    }
    setRotationValue(newRotationValue)
    setMaxWordSize(newWordSize)
  }, [browserSizeValue])
  const options: OptionsProp = {
    colors: ["#fff"],
    deterministic: changeWordcloud,
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
    randomSeed: '307',
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
            console.log(e)
            if (e.text === 'HAJIUNG') {
              setIsClickMyname(true)
            } else {
              setChangeWordcloud(prev => !prev)
            }
          },
        }}
      />
    </ReactWordcloudContainer>
  );
}

export default React.memo(WordCloud);
