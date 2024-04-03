import styled from "styled-components";
import { FaArrowRightLong, FaPlus } from "../Common/icons";


const TopSection = styled.section`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  padding: 5px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); /* Shadow effect */
`;
const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  text-transform: capitalize;
`;
const AddFreind = styled.section`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 10px;
  section {
    width: 70px;
    height: 70px;
    border-radius: 50px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }

  div {
    text-transform: capitalize;
    width: 250px;
    span {
      color: gray;
      font-weight: normal;
      font-size: 14px;
    }
  }
`;
const Button = styled.div`
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;
  span {
    font-size: 18px;
    width: 50%;
    text-align: center;
    border: 1px solid #006aff;
    padding: 5px 15px;
    border-radius: 50px;
    &:hover {
      border: 2px solid #006aff;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      color:#006aff;
    }
  }
`;

const AllContacts = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: gray;
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: gray;
    transition: all 0.2s ease-in-out;
  }
`;

const TopRightSidebar = () => {
  return (
    <TopSection>
      <Heading>
        <span>add to your feed</span>
        <span>
          <FaPlus />
        </span>
      </Heading>

      <div>
        <AddFreind>
          <section>
            <img src="/src/assets/download.png" alt="image-user" loading="lazy" />
          </section>

          <div>
            <h4>mohamed ahmed</h4>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus,
            </span>
          </div>
        </AddFreind>
        <Button>
          <span>
            Follow <FaPlus color="#006aff" />
          </span>
        </Button>
      </div>

      <div>
        <AddFreind>
          <section>
            <img src="/src/assets/avatar.png" alt="image-user" loading="lazy"/>
          </section>

          <div>
            <h4>mohamed ahmed</h4>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus,
            </span>
          </div>
        </AddFreind>
        <Button>
          <span>
          Follow <FaPlus color="#006aff" />
          </span>
        </Button>
      </div>

      <div>
        <AddFreind>
          <section>
            <img src="/src/assets/images.png" alt="image-user" loading="lazy"/>
          </section>

          <div>
            <h4>mohamed ahmed</h4>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus,
            </span>
          </div>
        </AddFreind>
        <Button>
          <span>
          Follow <FaPlus color="#006aff" />
          </span>
        </Button>
      </div>

      <AllContacts>
        <span>View all recommendations </span>
        <span>
          <FaArrowRightLong />
        </span>
      </AllContacts>
    </TopSection>
  );
};

export default TopRightSidebar;
