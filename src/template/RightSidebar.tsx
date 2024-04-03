import TopRightSidebar from "./TopRightSidebar";
import BottomRightSidebar from "../components/Jobs/BottomRightSidebar";
import { useLocation } from "react-router-dom";
import RightSideJob from "../components/Jobs/RightSideJob";
import RightSideMessage from "../components/Messages/RightSideMessage";
import RightSideNotif from "../components/notifications/RightSideNotif";

const RightSidebar = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/home" && (
        <>
          <TopRightSidebar />
          <BottomRightSidebar />
        </>
      )}

      {location.pathname === "/jobs" && <RightSideJob />}

      {location.pathname === "/messaging" && <RightSideMessage />}
      {location.pathname === "/notifications" && <RightSideNotif />}
    </>
  );
};

export default RightSidebar;
