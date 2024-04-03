import styled from "styled-components";
import TopLeftSidebar from "./TopLeftSidebar";
import BottomLeftSidebar from "../Common/BottomLeftSidebar";
import { useLocation } from "react-router-dom";
const ContentLeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;


`;
import LeftSide from "../components/networks/LeftSide";
import LeftSideJob from "../components/Jobs/LeftSideJob";
import LeftSideNotif from "../components/notifications/LeftSideNotif";

const LeftSidebar = () => {
  const location = useLocation();
  return (
    <ContentLeftSide>
      {location.pathname === "/network" && <LeftSide />}

      {location.pathname === "/home" && (
        <>
          <TopLeftSidebar />
          <BottomLeftSidebar />
        </>
      )}

      {location.pathname === "/jobs" && <LeftSideJob />}

      {location.pathname === "/notifications" && <LeftSideNotif />}
    </ContentLeftSide>
  );
};

export default LeftSidebar;
