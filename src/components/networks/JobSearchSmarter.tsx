import styled from "styled-components";

const ContentJobSearch = styled.section`
  border: 1px solid red;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.block};
  color: ${(props) => props.theme.colors.text};
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-transform: capitalize;
  h5 {
    font-weight: 300;
  }
`;
const ContentFriends = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ContentImages = styled.div`
  position: relative;
  width: 80px;
  height: 30px;
  div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    bottom: 0%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;

const Btn = styled.button`
  border: none;
  outline: none;
  background-color: #f3df6ce2;
  width: 40%;
  padding: 10px;
  border-radius: 25px;
  font-weight: bold;
  &:hover {
    background-color: #dfca55;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const JobSearchSmarter = () => {
  return (
    <ContentJobSearch>
      <h4>job search smarter</h4>
      <h5>
        See who’s viewed your profile and directly message recruiters with
        InMail.
      </h5>

      <ContentFriends>
        <ContentImages>
          <div>
            <img src="/src/assets/avatar.png" alt="frinds" />
          </div>

          <div style={{ position: "absolute", left: "20px" }}>
            <img src="/src/assets/download.png" alt="frinds" />
          </div>

          <div style={{ position: "absolute", left: "40px" }}>
            <img src="/src/assets/images.jpeg" alt="frinds" />
          </div>
        </ContentImages>
        <h5>Heba and millions of other members use Premium</h5>
      </ContentFriends>

      <Btn>Try Premium for EGP0</Btn>

      <h5>1-month free trial. We’ll send you a reminder 7 days before your trial ends.</h5>
    </ContentJobSearch>
  );
};

export default JobSearchSmarter;
