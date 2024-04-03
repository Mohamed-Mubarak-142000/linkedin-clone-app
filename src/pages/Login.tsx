import React, { useEffect } from "react";
import ContentLogin from "../components/login/ContentLogin";
import Header from "../components/navbar/Header";
import { useSelector } from "react-redux";
import { RootState } from "../redux/stroe";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageLogin = styled.section`
color: ${(props) => props.theme.colors.text};
background-color: ${(props) => props.theme.colors.background};
`
const Login = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home", { replace: true });
    }
  }, [navigate, user]);

  return (
    <PageLogin>
      <Header />
      <ContentLogin />
    </PageLogin>
  );
};

export default React.memo(Login);
