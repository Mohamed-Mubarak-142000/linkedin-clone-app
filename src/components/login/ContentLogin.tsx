import styled from "styled-components";
import LogoImage from "../../assets/images.png";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { DispatchApp } from "../../redux/stroe";
import { signInWithGoogle } from "../../redux/authActh";
import { useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

const ContentPage = styled.div`
  height: 90vh;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem auto;
  background-color: #162d47;
  padding: 2rem;
  border-radius: 7px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1); /* Shadow effect */
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.block};
`;

const Section = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h1 {
    line-height: 4rem;
    font-weight: 700;
    font-size: 50px;
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    width: 100%;

    h1 {
      line-height: 2.5rem;
      font-weight: 700;
      font-size: 30px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  padding: 15px 0;

  button {
    outline: none;
    background-color: #eee;
    width: 90%;
    font-size: 25px;
    text-transform: capitalize;
    border-radius: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8);
      transition: all 0.5s ease;
    }
  }

  @media (max-width: 500px) {
    button {
      width: 100%;
      font-size: 20px;
    }
  }
`;

const ImageLogo = styled.div`
  width: 50%;
  height: 500px;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentLogin = () => {
  const navigate = useNavigate();
  const dispatch: DispatchApp = useDispatch();

  const handleSignInGoogle = useCallback(
    (e: any) => {
      e.preventDefault();
      dispatch(signInWithGoogle())
        .unwrap()
        .then((user) => {
          navigate("/home");
          toast.success("Login Successfully.!");
          console.log("first1111", user);
        })
        .catch((error) => {
          toast.error("Login Failer.!");
          console.error("Sign-in failed:", error);
        });
    },
    [dispatch, navigate]
  );

  // Memoize the callback function
  const memoizedHandleSignInGoogle = useMemo(
    () => handleSignInGoogle,
    [handleSignInGoogle]
  );

  return (
    <ContentPage>
      <Section>
        <h1>welcome to your professional community</h1>
        <Form>
          <button type="button" onClick={memoizedHandleSignInGoogle}>
            <FcGoogle size={30} />
            <span>google sign in</span>
          </button>
        </Form>
      </Section>
      <ImageLogo>
        <img src={LogoImage} alt="" loading="lazy" />
      </ImageLogo>
    </ContentPage>
  );
};

export default ContentLogin;
