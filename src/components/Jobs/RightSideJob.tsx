import styled from "styled-components";
import { FaArrowRightLong, SiLinkedin } from "../../Common/icons";
import Links from "../../Common/Links";

const ContentJobSeeker = styled.section`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.block};
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); /* Shadow effect */
  h4 {
    padding: 10px;
  }

  h5 {
    padding: 10px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.secondary};
  }

  h6 {
    padding: 10px;
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.secondary};
    line-height: 25px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.theme.colors.background};
    padding: 10px;
  }
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: transparent;
  font-size: 16px;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #006aff;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  span {
    color: #006aff;
  }
`;

const RightSideJob = () => {
  return (
    <>
      <ContentJobSeeker>
        <h4>Job seeker guidance</h4>
        <h5>Recommended based on your activity</h5>

        <div>
          <h4>i want to improve my resume</h4>

          <img
            src="/src/assets/images.png"
            alt="image"
            width={"80px"}
            height={"60px"}
          />
        </div>

        <h6>
          Explore our curated guide of expert-led courses, such as how to
          improve your resume and grow your network, to help you land your next
          opportunity.
        </h6>

        <Btn>
          show more
          <FaArrowRightLong />
        </Btn>
      </ContentJobSeeker>
      <Links />

      <Footer>
        <span>
          linkedin
          <SiLinkedin />
        </span>{" "}
        LinkedIn Corporation © 2024
      </Footer>
    </>
  );
};

export default RightSideJob;
