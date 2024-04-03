import React from "react";
import styled from "styled-components";
import Header from "../../components/navbar/Header";
import Footer from "../Footer";
import { ChildrenType } from "../../Common/types";
import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";

const ContentPage = styled.div`
  width: "100%";
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;

const ContentHome = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  padding: 1rem;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media only screen and (min-width: 992px) {
    width: 90%;
  }
`;

const LeftSide = styled.div`
  max-width: 250px;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
  @media only screen and (min-width: 600px) {
    max-width: 100%;
  }
  @media only screen and (min-width: 768px) {
    max-width: 200px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 300px;
  }
`;

const CenterHome = styled.div`
  max-width: 700px;
  border-radius: 5px;
  padding: 1rem 0.5rem;

  @media only screen and (max-width: 600px) {
   min- width: 450px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 600px;
  }
  @media only screen and (min-width: 768px) {
    min-width: 500px;
  }
  @media only screen and (min-width: 992px) {
    min-width: 650px;
  }
  @media only screen and (min-width: 1200px) {
   min-width:600px
  }

`;

const RightSide = styled.div`
  width: 350px;
  border-radius: 10px;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const Layout: React.FC<ChildrenType> = ({ children }) => {
  return (
    <ContentPage>
      <Header />
      <ContentHome>
        <LeftSide>
          <LeftSidebar />
        </LeftSide>
        <CenterHome> {children}</CenterHome>
        <RightSide>
          <RightSidebar />
        </RightSide>
      </ContentHome>
      <Footer />
    </ContentPage>
  );
};

export default Layout;
