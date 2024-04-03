import styled from "styled-components";
import { PostInfo } from "../../Common/types";

const HeadingPost = styled.header`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const LeftHeader = styled.div`
  display: flex;
  gap: 10px;
  div:first-child {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    img{
        width:100%;
        height:100%;
        border-radius: 50%;
    }
  }

  div:last-child {
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    gap: 5px;
    h5,
    span {
      color: gray;
      text-transform: 200;
    }
    span {
      font-size: 12px;
      text-transform: lowercase;
    }
  }
`;

const RightHeader = styled.div`
  display: flex;
  gap: 5px;
  height: max-content;
  div {
    width: 5px;
    height: 5px;
    background-color: gray;
    border-radius: 50%;
  }
  &:hover {
    cursor: pointer;
    div {
      transition: all 0.2s ease-in-out;
      background-color: black;
    }
  }
`;
const HeaderPost = ({ postData }: { postData: PostInfo }) => {
  return (
    <HeadingPost>
    <LeftHeader>
      <div>
        <img src ={postData.photo as string} alt="" />
      </div>

      <div>
        <h4>{postData.userName}</h4>
        <h5>Frontend Developer</h5>
        <span>19 hours</span>
      </div>
    </LeftHeader>

    <RightHeader>
      <div></div>
      <div></div>
      <div></div>
    </RightHeader>
  </HeadingPost>  )
}

export default HeaderPost