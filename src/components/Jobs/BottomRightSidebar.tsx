import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/stroe";
import { SiLinkedin } from "../../Common/icons";
import { useMemo } from "react";

const BottomRight = styled.section`
  border: 1px solid;
  color: ${(props) => props.theme.colors.text};
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.block};
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const Option = styled.div`
  width: 100%;
  display: flex;
  gap: 2px;
  align-items: center;
  text-transform: capitalize;
  justify-content: flex-end;
  div {
    width: 5px;
    height: 5px;
    background-color: gray;
    border-radius: 50px;
  }
`;

const Heading = styled.div`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 16px;
  color: gray;
  padding: 10px;
`;

const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  div {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`;

const ButtonFree = styled.div`
  border: 2px solid #eee;
  padding: 10px 15px;
  width: 50%;
  margin: auto;
  border-radius: 25px;
  color: #007bff;
  text-transform: capitalize;
  text-align: center;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    border: 2px solid gray;
    transition: all 0.2s ease-in-out;
    font-size: 17px;
  }
`;

const BottomRightSidebar = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const memoizedImages = useMemo(() => {
    return (
      <Images>
        <div>
          {user && user?.photoURL ? (
            <img src={user?.photoURL} alt="" />
          ) : (
            <img src="/src/assets/icon-5359553_1280.png" alt="" />
          )}
        </div>
        <div>
          <SiLinkedin color="#627413" size={100} />
        </div>
      </Images>
    );
  }, [user]);

  return (
    <BottomRight>
      <Option>
        <span>add</span>
        <div></div>
        <div></div>
        <div></div>
      </Option>
      <Heading>
        mohamed, uncover new opportunities with linkedin premium
      </Heading>
      {memoizedImages}
      <Heading>see who's viewed your profile in the last 90 days</Heading>
      <ButtonFree>try for free!</ButtonFree>
    </BottomRight>
  );
};

export default BottomRightSidebar;
