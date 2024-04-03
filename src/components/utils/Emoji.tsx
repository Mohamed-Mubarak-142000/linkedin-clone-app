import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";
import styled from "styled-components";
import { CiFaceSmile } from "../../Common/icons";
import { SetTextPost } from "../../Common/types";


const ContentEmoji = styled.section`
  display: flex;
  justify-content: flex-end;
  position: relative;
  span {
    cursor: pointer;
  }
`;
const ContainEmoji = styled.div`
  position: absolute;
  bottom: 5px;
  right: 35px;
`;

interface EmojiEvent {
  unified: string;
}

function Emoji({ setText , text } :SetTextPost) {


  const addEmojiSelected = (e: EmojiEvent) => {
    const em = e.unified.split("_");
    const codeArray: number[] = em.map((element: string) =>
      parseInt(element, 16)
    );
    const emojiCharacter = String.fromCodePoint(...codeArray);
    setText(text + emojiCharacter); // Using a function to update state based on previous state
  };

  const [showEmoji, setShowEmoji] = useState(false);
  return (
    <ContentEmoji>
      <span onClick={() => setShowEmoji(!showEmoji)}>
        <CiFaceSmile size={30} />
      </span>
      {showEmoji && (
        <ContainEmoji>
          <Picker data={data} onEmojiSelect={addEmojiSelected} />
        </ContainEmoji>
      )}
    </ContentEmoji>
  );
}

export default Emoji;
