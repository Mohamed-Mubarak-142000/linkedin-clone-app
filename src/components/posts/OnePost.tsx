import styled from 'styled-components';
import { PostInfo } from '../../Common/types';
import React, { useState } from 'react';
import FooterContainer from './FooterContainer';
import HeaderPost from './HeaderPost';
import ReactPlayer from 'react-player';


interface ShowMore {
  showMore:boolean
}
const MainPost = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.block};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ContentPost = styled.div<ShowMore>`
  padding: 5px;
  p {
    padding: 5px;
    background-image: ${({ showMore }) =>
      !showMore ? '' : 'none'};
    &:hover {
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  border-radius: 5px;
  img {
    width: 100%;
    border-radius: 5px;
    height: 100%;
    object-fit: cover;
  }
`;

const OnePost = ({ postData }: { postData: PostInfo }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleReading = () => {
    setShowMore(!showMore);
  };

  return (
    <MainPost>
      <HeaderPost postData={postData} />

      <ContentPost showMore={showMore}>
        {postData.description && (
          <p onClick={toggleReading}>
            {!showMore
              ? postData.description.length > 220
                ? postData.description.slice(0, 220) + (
                    <span style={{ color: 'gray' }}>more than...</span>
                  )
                : postData.description
              : postData.description}
          </p>
        )}

        <ImageContainer>
          {postData.sharImage && <img src={postData.sharImage} alt="image-post" />}
        </ImageContainer>

        <ImageContainer>
          {postData.sharVideo && <ReactPlayer url={postData.sharVideo as string} width={'100%'} />}
        </ImageContainer>
      </ContentPost>

      <FooterContainer />
    </MainPost>
  );
};

export default React.memo(OnePost);
