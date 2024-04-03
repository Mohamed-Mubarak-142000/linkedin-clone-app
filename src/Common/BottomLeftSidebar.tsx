import styled from "styled-components";
import { FaPlus, IoIosArrowDown } from "./icons";
import { useMemo } from "react";

const BottomSection = styled.div`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  height: 500px;
  border-radius: 10px;
  padding: 0.5rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction:column;
  }
  @media only screen and (min-width: 992px) {
  display:flex;
  }
`;

const Recent = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const Other = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BottomLeftSidebar = () => {
  const memoizedRecentSection = useMemo(() => {
    return (
      <Recent>
        <span>Recent</span>
        <span>
          <IoIosArrowDown />
        </span>
      </Recent>
    );
  }, []);

  const memoizedOtherSection = useMemo(() => {
    return (
      <Other>
        <span># frontended developer</span>
        <span># انماط التصميم</span>
        <span># font end developer group</span>
        <div>
          <span>Events</span>
          <span>
            <FaPlus />
          </span>
        </div>
      </Other>
    );
  }, []);

  return (
    <BottomSection>
      {memoizedRecentSection}
      {memoizedOtherSection}
      {memoizedRecentSection}
      {memoizedOtherSection}
    </BottomSection>
  );
};

export default BottomLeftSidebar;
