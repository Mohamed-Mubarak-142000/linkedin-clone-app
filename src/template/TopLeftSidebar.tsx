import styled from "styled-components";
import { BsFillSave2Fill } from "../Common/icons";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../redux/stroe";

const TopSection = styled.div`
  background-color: #162d47;
  padding-bottom: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;

const ContentProfile = styled.div`
  position: relative;
  div {
    width: 100%;
    height: 80px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px 10px 0 0;
    }

    @media only screen and (max-width: 600px) {
      height: 100px;
    }
  }

  section {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%);
    width: 80px;
    height: 80px;
    border-radius: 50px;
    border: 2px solid #eee;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
      object-fit: contain;
    }
    @media only screen and (max-width: 600px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const InfoProfile = styled.div`
  padding-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: capitalize;
  border-bottom: 1px solid gray;
  gap: 10px;
  h5 {
    color: ${(props) => props.theme.colors.text};
    font-weight: 500;
  }
`;

const InfoCount = styled.div`
  border-bottom: 1px solid gray;
  color: ${(props) => props.theme.colors.secondary};
  text-transform: capitalize;
  div {
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    &:hover {
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.block};
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
  }
`;

const Hiring = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  flex-direction: column;
  gap: 5px;
  span {
    padding: 5px 15px;
    color: ${(props) => props.theme.colors.secondary};
    &:hover {
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.block};
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;

const Myitems = styled.div`
  display: flex;
  gap: 5px;
  color: ${(props) => props.theme.colors.secondary};
  align-items: center;
  padding: 5px 15px;
  &:hover {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.block};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;

const TopLeftSidebar = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const memoizedProfileImage = useMemo(() => {
    return (
      <ContentProfile>
        <div>
          <img
            src="/src/assets/background.png"
            alt="user-profile"
            loading="lazy"
          />
        </div>
        <section>
          {user && user.photoURL ? (
            <img src={user.photoURL} alt="user-background" loading="lazy" />
          ) : (
            <img
              src="/src/assets/avatar.png"
              alt="user-profile"
              loading="lazy"
            />
          )}
        </section>
      </ContentProfile>
    );
  }, [user]);

  return (
    <TopSection>
      {memoizedProfileImage}
      <InfoProfile>
        <h4>{user?.displayName}</h4>
        <h5>Front-End Developer</h5>
      </InfoProfile>
      <InfoCount>
        <div>
          <span>profile viewers</span> <span>12</span>
        </div>
        <div>
          <span>profile viewers</span> <span>220</span>
        </div>
      </InfoCount>
      <Hiring>
        <span>See who’s hiring</span>
        <span>Try Premium for EGP0</span>
      </Hiring>
      <Myitems>
        <BsFillSave2Fill />
        <span>my items</span>
      </Myitems>
    </TopSection>
  );
};

export default TopLeftSidebar;
