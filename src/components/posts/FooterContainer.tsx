import styled from "styled-components";
import {
  AiTwotoneLike,
  BiRepost,
  BsFillSendFill,
  CgHeart,
  FaRegCommentDots,
  HiLightBulb,
  PiHandHeartBold,
  PiHandsClappingDuotone,
} from "../../Common/icons";

const FooterPost = styled.section`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid white;
  align-items: center;
`;

const LeftFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      text-align: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
`;

const RightFooter = styled.div`
  display: flex;
  gap: 10px;
  span {
    font-size: 12px;
    font-weight: 300;
    &:hover {
      color: #0b6dd5;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Reaction = styled.div`
display: none;
position: absolute;
bottom: 100%;
left: -50%;
padding: 10px;
border-radius: 5px;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); /* Shadow effect */
margin:2px;
span{
border-radius:50px;
width:35px;height:35px;
text-align:center;
&:hover{
  transform: scale(1.3);
  transition:all .3s ease-in-out;
  cursor:pointer;
}
}
}
`;

const BottomFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  div:first-child {
    position: relative;
    padding: 10px 0;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    span:first-child {
      font-size: 25px;
    }
    span:last-child {
      font-size: 18px;
      text-transform: capitalize;
    }

    &:hover {
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.background};
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      border-radius: 5px;
    }

    &:hover ${Reaction} {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.block};
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      border-radius: 5px;
    }
  }

  & > div:not(:first-child) {
    padding: 10px 0;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    span:first-child {
      font-size: 25px;
    }
    span:last-child {
      font-size: 18px;
      text-transform: capitalize;
    }
    &:hover {

      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.background};      transition: all 0.2s ease-in-out;
      cursor: pointer;
      border-radius: 5px;
    }
  }
`;

const FooterContainer = () => {
  return (
    <FooterPost>
      <TopFooter>
        <LeftFooter>
          <div>
            <span style={{ backgroundColor: "#0b6dd5" }}>
              <AiTwotoneLike />
            </span>
            <span style={{ backgroundColor: "#c85050" }}>
              <CgHeart />
            </span>

            <span style={{ backgroundColor: "green" }}>
              <PiHandsClappingDuotone />
            </span>
            <span style={{ backgroundColor: "#c85050" }}>
              <PiHandHeartBold />
            </span>
          </div>
          <div>91</div>
        </LeftFooter>

        <RightFooter>
          <span>comments 15</span>
          <span>repost 12</span>
        </RightFooter>
      </TopFooter>

      <BottomFooter>
        <div>
          <span>
            <AiTwotoneLike />
          </span>
          <span>like</span>

          <Reaction>
            <span style={{ backgroundColor: "#0b6dd5" }}>
              <AiTwotoneLike size={30} />
            </span>
            <span style={{ backgroundColor: "#c85050" }}>
              <CgHeart size={30} />
            </span>

            <span style={{ backgroundColor: "green" }}>
              <PiHandsClappingDuotone size={30} />
            </span>

            <span style={{ backgroundColor: "gold" }}>
              <HiLightBulb size={30} />
            </span>

            <span style={{ backgroundColor: "#c85050" }}>
              <PiHandHeartBold size={30} />
            </span>
          </Reaction>
        </div>

        <div>
          <span>
            <FaRegCommentDots />
          </span>
          <span>comments</span>
        </div>

        <div>
          <span>
            <BiRepost />
          </span>
          <span>repost</span>
        </div>

        <div>
          <span>
            <BsFillSendFill />
          </span>
          <span>send</span>
        </div>
      </BottomFooter>
    </FooterPost>
  );
};

export default FooterContainer;
