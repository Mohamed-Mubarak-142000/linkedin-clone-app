import styled from "styled-components"
import BottomRightSidebar from "../Jobs/BottomRightSidebar"
import RightSideJob from "../Jobs/RightSideJob"
const ContentSideMessage = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
const RightSideMessage = () => {
  return (
    <ContentSideMessage>
        <BottomRightSidebar />
        <RightSideJob />
    </ContentSideMessage>
  )
}

export default RightSideMessage