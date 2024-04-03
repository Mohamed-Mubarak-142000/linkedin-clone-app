import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/stroe";
import { useState, useMemo } from "react";
import ModelPosts from "./ModelPosts";
import {
  FaImage,
  MdEventNote,
  MdOutlineOndemandVideo,
  TfiWrite,
} from "../../Common/icons";

const ContentFormPost = styled.section`
  cursor: pointer;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.block};
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); /* Shadow effect */
`;

const TopSection = styled.section`
  display: flex;
  align-items: center;
  padding: 15px 5px;
  gap: 10px;
  div:first-child {
    width: 60px;
    border-radius: 50%;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  div:last-child {
    width: 85%;
    button {
      padding: 15px 10px;
      width: 100%;
      border-radius: 25px;
      font-size: 16px;
      outline: none;
      border: none;
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.background};
    }
  }
`;

const BottomSection = styled.section`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  div {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    width: 120px;
    padding: 10px 5px;
    text-transform: capitalize;
    color: gray;
  }
`;

const FormPost = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [showModel, setShowModel] = useState(false);
  const handleModel = () => {
    setShowModel(!showModel);
  };

  // Memoize the JSX for user photo
  const userPhotoJSX = useMemo(() => {
    return (
      <div>
        {user && user.photoURL ? (
          <img src={user.photoURL} alt="" />
        ) : (
          <img src="/src/assets/icon-5359553_1280.png" alt="" />
        )}
      </div>
    );
  }, [user]);

  return (
    <>
      <ContentFormPost>
        <TopSection>
          {userPhotoJSX} {/* Use memoized JSX for user photo */}
          <div>
            <button onClick={handleModel}>
              start a post , try writing with AI
            </button>
          </div>
        </TopSection>

        <BottomSection>
          <div>
            <FaImage />
            <span>Photo</span>
          </div>
          <div>
            <MdOutlineOndemandVideo />
            <span>video</span>
          </div>
          <div>
            <MdEventNote />
            <span>event</span>
          </div>
          <div>
            <TfiWrite />
            <span>write artical</span>
          </div>
        </BottomSection>
      </ContentFormPost>

      {showModel && <ModelPosts handleModel={handleModel} />}
    </>
  );
};

export default FormPost;
