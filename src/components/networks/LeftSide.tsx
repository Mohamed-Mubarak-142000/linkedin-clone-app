import styled from "styled-components";
import { LuNetwork } from "../../Common/icons";
import BottomRightSidebar from "../Jobs/BottomRightSidebar";
import { useState } from "react";

interface ShowMore {
  showMore: boolean;
}


const MainLeftSide = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContentInfo = styled.div<ShowMore>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.block};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); /* Shadow effect */
  border-radius: 10px;
  overflow: hidden;
  height: ${({ showMore }) => (showMore ? "400px" : "100px")};
  padding-bottom: 1rem;
  h3 {
    font-weight: 400;
    text-transform: capitalize;
    padding: 10px 15px;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    text-transform: capitalize;
    span:first-child {
      display: flex;
      gap: 10px;
    }

    &:hover {
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.background};
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
  }
  }
`;

const ShowBtn = styled.div`
font-size: 20px;
text-transform: capitalize;
width: 100%;
padding: 15px 10px;
border-radius: 10px;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); /* Shadow effect */
&:hover {
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.block};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;


const LeftSide = () => {
  const [showMore, setShowMore] = useState(true);

  const toggleShow = () => {
    setShowMore(!showMore);
  };
  return (
    <MainLeftSide>
      <ContentInfo showMore={showMore}>
        <h3>mange my network</h3>
        <div>
          <span>
            <span>
              <LuNetwork />
            </span>
            <span>connections</span>
          </span>
          <span>85</span>
        </div>

        <div>
          <span>
            <span>
              <LuNetwork />
            </span>
            <span>contacts</span>
          </span>
          <span>650</span>
        </div>

        <div>
          <span>
            <span>
              <LuNetwork />
            </span>
            <span>following & followers</span>
          </span>
        </div>

        <div>
          <span>
            <span>
              <LuNetwork />
            </span>
            <span>Event</span>
          </span>
        </div>

        <div>
          <span>
            <span>
              <LuNetwork />
            </span>
            <span>pages</span>
          </span>
          <span>85</span>
        </div>

        <div>
          <span>
            <span>
              <LuNetwork />
            </span>
            <span>newsleetters</span>
          </span>
          <span>10</span>
        </div>

        <div>
          <span>
            <span>
              <LuNetwork />
            </span>
            <span>hashtags</span>
          </span>
          <span>7</span>
        </div>
      </ContentInfo>
      <ShowBtn onClick={toggleShow}>
        {showMore ? "show less" : "show more"}
      </ShowBtn>

      <BottomRightSidebar />
    </MainLeftSide>
  );
};

export default LeftSide;
