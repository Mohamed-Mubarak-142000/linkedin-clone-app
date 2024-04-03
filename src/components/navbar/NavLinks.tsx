import styled from "styled-components";
import {
  BiSolidMessageAltDots,
  IoNotifications,
  IoHomeSharp,
  LuNetwork,
  PiShoppingBagOpenFill,
  MdOutlineArrowDropDown,
  HiMiniSquares2X2,
} from "../../Common/icons";
import { NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import DropDwonMe from "./DropDwonMe";

const Ul = styled.ul`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  list-style: none;
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 100%;
  text-transform: capitalize;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    @media only screen and (max-width: 900px) {
    padding:5px;
    }
  }
  @media only screen and (max-width: 900px) {
    gap: 3px;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  padding: 0rem 1rem;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    transition: all 0.1s ease;
  }
  &.active {
    border-bottom: 2px solid black;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media only screen and (max-width: 900px) {
  padding:10px;

  span:last-child{
    display:none;
  }
  }
`;
const Business = styled.div`
  margin-left: 2rem;
  display: flex;
  padding-top: 15px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 100%;
  span {
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  @media only screen and (max-width: 900px) {
  display:none
  }
`;

const NavLinks = () => {
  const [isopen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isopen);
  };

  // Memoize the JSX for DropDownMe component
  const dropDownMeJSX = useMemo(() => {
    return (
      <DropDwonMe
        toggleDropdown={toggleDropdown}
        isopen={isopen ? true : false}
      />
    );
  }, [isopen]);

  return (
    <Ul>
      <StyledNavLink to={"/home"}>
        <li>
          <span>
            <IoHomeSharp size={20} />
          </span>
          <span>Home</span>
        </li>
      </StyledNavLink>
      <StyledNavLink to={"/network"}>
        <li>
          <span>
            <LuNetwork size={20} />
          </span>
          <span>network</span>
        </li>
      </StyledNavLink>
      <StyledNavLink to={"/jobs"}>
        <li>
          <span>
            <PiShoppingBagOpenFill size={20} />
          </span>
          <span>jobs</span>
        </li>
      </StyledNavLink>
      <StyledNavLink to={"/messaging"}>
        <li>
          <span>
            <BiSolidMessageAltDots size={20} />
          </span>
          <span>messaging</span>
        </li>
      </StyledNavLink>
      <StyledNavLink to={"/notifications"}>
        <li>
          <span>
            <IoNotifications size={20} />
          </span>
          <span>notifications</span>
        </li>
      </StyledNavLink>
      {dropDownMeJSX} {/* Render memoized DropDownMe component */}
      <Business>
        <HiMiniSquares2X2 size={20} />
        <span>
          for business <MdOutlineArrowDropDown size={20} />
        </span>
      </Business>
    </Ul>
  );
};

export default NavLinks;
