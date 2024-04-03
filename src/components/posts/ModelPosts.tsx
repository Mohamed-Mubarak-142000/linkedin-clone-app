import styled from "styled-components";
import {
  HandleModel,
  ChangeEventHandler,
  TypedHandler,
  PostInfo,
} from "../../Common/types";
import { IoClose, IoIosArrowDown } from "../../Common/icons";
import { useDispatch, useSelector } from "react-redux";
import { DispatchApp, RootState } from "../../redux/stroe";
import Emoji from "../utils/Emoji";
import { useState, useMemo } from "react";
import CreatePost from "./CreatePost";
import ReactPlayer from "react-player";
import { createPost, renderPosts } from "../../redux/postActh";

const BackPage = styled.section`
  background-color: #000000da;
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainModel = styled.div`
  max-height: 700px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  margin: auto;
  border-radius: 10px;
  padding: 10px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.block};
  overflow-y: scroll;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); /* Shadow effect */
`;
const Heading = styled.div`
  div {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.background};
      transition: all 0.2s ease-in-out;
      border-radius: 10px;
    }
  }
`;
const InfoPerson = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  div:first-child {
    width: 70px;
    height: 70px;
    border-radius: 50px;
    border: 2px solid white;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: white;
    margin-bottom: 15px;
  }
`;
const ContentPost = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 80px;
  textarea {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 16px;
    padding: 5px 10px;
    outline: none;
    resize: none;
    color: ${(props) => props.theme.colors.text};
  }
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ImageShowing = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  input {
    display: block;
    width: 80%;
    padding: 10px 15px;
    border-radius: 25px;
    font-size: 18px;
    outline: none;
    border: none;
    &:focus {
      border: 2px solid gray;
      transition: all 0.2s ease-in-out;
    }
  }
  label {
    font-size: 20px;
    color: gray;
    cursor: pointer;
  }
`;

const ModelPosts = ({ handleModel }: HandleModel) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [text, setText] = useState<string>("");
  const [sharImage, setSharImage] = useState<File | null>(null);
  const [sharVideo, setSharVideo] = useState("");
  const [sharTyped, setShaeTyped] = useState("");

  const dispatch: DispatchApp = useDispatch();

   //function to show container image or video-----------
   const handleSherTyped: TypedHandler = (typed: string) => {
    setSharImage(null);
    setSharVideo("");
    setShaeTyped(typed);
  };

  //function handler upload image------------------
  const handleImage: ChangeEventHandler = (e: any) => {
    const image = e.target.files?.[0];
    if (image === "" || image === undefined) {
      alert(`not an image , the file is a ${typeof image}`);
      return null;
    } else {
      setSharImage(image);
    }
  };

  //function handler btn post-------
  const handleGenretPost: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    const postInfo: PostInfo = {
      userName: user?.displayName ?? null,
      emailAddress: user?.email ?? null,
      photo: user?.photoURL ?? null,
      sharImage: sharImage,
      sharVideo: sharVideo,
      description: text,
      time: new Date(),
    };
    dispatch(createPost({ postInfo }));
    dispatch(renderPosts());
    handleModel();
  };


  const userInfo = useMemo(() => (
    <InfoPerson>
      <div>
        {user && user.photoURL ? (
          <img src={user?.photoURL} alt="" />
        ) : (
          <img src={"/src/assets/icon-5359553_1280.png"} alt="" />
        )}
      </div>

      <div>
        <h2 style={{ fontWeight: "normal", textTransform: "capitalize" }}>
          {user?.displayName}
        </h2>
        <span style={{ color: "gray" }}>Post to anyone</span>
      </div>

      <button>
        <IoIosArrowDown size={25} />
      </button>
    </InfoPerson>
  ), [user]);

  const imageSection = useMemo(() => (
    <ImageShowing>
      <input
        style={{ display: "none" }}
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={handleImage}
      />
      <label htmlFor="image">Select Upload image</label>
      {sharImage && (
        <img
          src={URL.createObjectURL(sharImage)}
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
          }}
          alt="postImage"
        />
      )}
    </ImageShowing>
  ), [handleImage, sharImage]);

  const videoSection = useMemo(() => (
    <ImageShowing>
      <input
        type="text"
        value={sharVideo}
        onChange={(e) => setSharVideo(e.target.value)}
        placeholder="Please input a video link"
      />

      {sharVideo && <ReactPlayer url={sharVideo} width={"100%"} />}
    </ImageShowing>
  ), [sharVideo]);

 

  return (
    <BackPage>
      <MainModel>
        <Heading>
          <div>
            <IoClose size={30} onClick={handleModel} />
          </div>
          <h1 style={{ fontWeight: "normal" }}>Create Post</h1>
        </Heading>

        {userInfo}

        <ContentPost>
          <textarea
            rows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="what do you want to talk about"
          />
        </ContentPost>

        <Container>
          {sharTyped === "image" ? imageSection : null}
          {sharTyped === "video" && videoSection}
        </Container>

        <Emoji text={text} setText={setText as unknown as string} />

        <CreatePost
          text={text}
          sharImage={sharImage}
          sharVideo={sharVideo}
          handleSherTyped={handleSherTyped}
          handleGenretPost={handleGenretPost}
        />
      </MainModel>
    </BackPage>
  );
};

export default ModelPosts;
