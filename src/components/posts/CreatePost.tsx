import styled from "styled-components";
import { FaImage, MdOutlineOndemandVideo, TfiWrite } from "../../Common/icons";
import { HandleShowImage } from "../../Common/types";
import { useCallback } from "react";

const MainCreate = styled.section`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentAssets = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  button {
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: capitalize;
    font-size: 18px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 5px 10px;

    &:hover {
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.background};
      transition: all 0.2s ease-in-out;
      border-radius: 5px;
    }
  }
`;

const PostButton = styled.button`
  padding: 10px 20px;
  background: ${(props) => (props.disabled ? "rgb(235,235,235)" : "#0a66c2")};
  border: none;
  outline: none;
  border-radius: 25px;
  font-size: 18px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    color: ${(props) => (props.disabled ? "rgb(0,0,0,0.25)" : "white")};
    transition: all 0.2s ease-in-out;
  }
`;

const CreatePost = ({
  handleSherTyped,
  handleGenretPost,
  text,
  sharImage,
  sharVideo,
}: HandleShowImage) => {
  const handleShareImage = useCallback(
    () => handleSherTyped("image"),
    [handleSherTyped]
  );

  const handleShareVideo = useCallback(
    () => handleSherTyped("video"),
    [handleSherTyped]
  );

  return (
    <MainCreate>
      <ContentAssets>
        <button onClick={handleShareImage}>
          <FaImage size={25} />
          <span>image</span>
        </button>

        <button onClick={handleShareVideo}>
          <MdOutlineOndemandVideo size={25} />
          <span>video</span>
        </button>

        <button>
          <TfiWrite size={25} />
          <span>writing article </span>
        </button>
      </ContentAssets>

      <PostButton
        onClick={handleGenretPost}
        disabled={!text && !sharImage && !sharVideo}
      >
        Post
      </PostButton>
    </MainCreate>
  );
};

export default CreatePost;
