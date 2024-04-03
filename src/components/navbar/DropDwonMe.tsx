import { Link } from "react-router-dom";
import styled from "styled-components";
import { DropDwonMeProps } from "../../Common/types";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { DispatchApp, RootState } from "../../redux/stroe";
import { LiaSignOutAltSolid } from "../../Common/icons";
import { signOut } from "../../redux/authActh";
import { useMemo } from "react";

interface IsOpen {
  isopen: boolean;
}

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
`;

// Styled component for the dropdown menu
const DropdownMenu = styled.div<IsOpen>`
  padding: 5px;
  width: 280px;
  position: absolute;
  margin-top: 0.8rem;
  top: 100%;
  right: 0%;
  background-color: ${(props) => props.theme.colors.block};
  color: ${(props) => props.theme.colors.secondary};
  border-top: none;
  border-radius: 10px;
  flex-direction: column;
  gap: 5px;
  display: ${({ isopen }) => (isopen ? "flex" : "none")};
  transition: all 0.3s ease; /* Add transition */
  opacity: ${({ isopen }) => (isopen ? "1" : "0")}; /* Fade in/out */
  transform: ${({ isopen }) =>
    isopen ? "translateY(0)" : "translateY(-10px)"}; /* Slide in/out */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); /* Shadow effect */
`;

const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ContentImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const ContentInfo = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${(props) => props.theme.colors.text};
  h5 {
    font-weight: 500;
  }
`;

const DropItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #006aff;
  border: 1px solid #006aff;
  border-radius: 25px;
  padding: 5px;
  text-align: center;
  &:hover {
    color: ${(props) => props.theme.colors.text};
    background-color: #6da5f39b;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const DropdownButton = styled.div`
  display: flex;
  position: relative;
  margin-left: 2rem;
  flex-direction: column;
  align-items: center;
  div {
    width: 40px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  span {
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
`;

const SignOutBtn = styled.div`
  display: flex;
  gap: 5px;
  padding: 10px 15px;
  &:hover {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.secondary};
    transition: all 0.5s ease-in-out;
  }
`;

const AccountLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  h3 {
    padding: 5px 10px;
    color: ${(props) => props.theme.colors.text};
  }

  span {
    padding: 5px 10px;
    color: gray;
    &:hover {
      color: #006aff;
      transition: all 0.2s ease-in-out;
      text-decoration: underline;
    }
  }
`;

const DropDwonMe = ({ toggleDropdown, isopen }: DropDwonMeProps) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch: DispatchApp = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  // Memoize the JSX for the dropdown menu
  const dropdownMenuJSX = useMemo(() => {
    return (
      <DropdownMenu isopen={isopen}>
        <DropItem>
          <Info>
            <ContentImg>
              {user && user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <img src="/src/assets/icon-5359553_1280.png" alt="" />
              )}
            </ContentImg>

            <ContentInfo>
              <h4>{user?.displayName}</h4>
              <h5>frontend developer</h5>
            </ContentInfo>
          </Info>
          <LinkStyle to={"/"}>view profile</LinkStyle>
        </DropItem>

        <AccountLinks>
          <h3>Account</h3>
          <span>Try Premium for EGP0</span>
          <span>Setting & Privacy</span>
          <span>Help</span>
          <span>Language</span>
        </AccountLinks>

        <AccountLinks>
          <h3>Manage</h3>
          <span>Posts & Activity</span>
          <span> Job Posting Account</span>
        </AccountLinks>

        <SignOutBtn onClick={handleSignOut}>
          <LiaSignOutAltSolid size={20} />
          <span>sign Out</span>
        </SignOutBtn>
      </DropdownMenu>
    );
  }, [isopen, user, handleSignOut]);

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        <div>
          {user && user?.photoURL ? (
            <img src={user?.photoURL} alt="" />
          ) : (
            <img src="/src/assets/icon-5359553_1280.png" alt="" />
          )}
        </div>
        <span>
          me <MdOutlineArrowDropDown size={20} />
        </span>
      </DropdownButton>
      {dropdownMenuJSX}
    </DropdownContainer>
  );
};

export default DropDwonMe;
