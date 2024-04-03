import { IoLogoLinkedin } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const HeaderStyle = styled.header`
  height: 70px;
  display: flex;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); /* Shadow effect */
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;
const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  @media only screen and (max-width: 900px) {
    width:90%;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #006aff;
  font-size: 25px;
  font-weight: 700;
  gap: 2px;

  span:first-child {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;
const Buttons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Button = styled.a`
  autline: none;
  padding: 8px 15px;
  border-radius: 50px;
  text-transform: capitalize;
  font-size: 15px;
  &:hover {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.block};
    transition: all 0.5s;
    cursor: pointer;
    border: 1px solid #006aff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1); /* Shadow effect */
  }
  @media (max-width: 500px) {
    padding: px 10px;
    border-radius: 50px;
    text-transform: capitalize;
    font-size: 12px;
  }
`;

const Header = () => {
  const location = useLocation();
  return (
    <HeaderStyle>
      <Container>
        {/***logo** */}
        <Logo>
          <span>linkendin</span>
          <span>
            <IoLogoLinkedin size={35} />
          </span>
        </Logo>

        {location.pathname === "/" ? (
          <>
            {/***buttons */}
            <Buttons>
              <Button type="button">join now</Button>
              <Button type="Button">sign in</Button>
            </Buttons>
          </>
        ) : (
          <NavLinks />
        )}
      </Container>
    </HeaderStyle>
  );
};

export default Header;
