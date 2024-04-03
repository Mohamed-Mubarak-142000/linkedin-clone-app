import { useSelector } from "react-redux";
import { RootState } from "../../redux/stroe";

import styled, { keyframes } from "styled-components";

interface ProgressBarFillProps {
  progress: number;
}

interface ProgressBarProps {
  progress: number;
}

// Keyframe for the animation
const fillAnimation = (props: ProgressBarFillProps) => keyframes`
from {
  width: 0%;
}
to {
  width: ${props.progress}%;
}
`;

const ContentLoading = styled.section`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  gap: 5px;
  p {
    color: gray;
    text-transform:capitalize;
    font-weight:normal;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 12px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProgressBarFill = styled.div<ProgressBarFillProps>`
  height: 100%;
  background-color: #007bff; /* Progress bar color */
  border-radius: 10px;
  animation: ${fillAnimation} 1s ease-in-out forwards;
`;

const UpLoading: React.FC<ProgressBarProps> = () => {
  const { loading, progress } = useSelector((state: RootState) => state.upload);

  return (
    <ContentLoading>
      {loading && (
        <>
          <p>create new post</p>
          <ProgressBarContainer>
            <ProgressBarFill progress={progress} />
          </ProgressBarContainer>
        </>
      )}
    </ContentLoading>
  );
};

export default UpLoading;
