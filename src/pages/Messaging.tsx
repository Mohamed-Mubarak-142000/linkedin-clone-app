import styled from "styled-components";
import Layout from "../template/Layout/Layout";
import { FaEdit } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import Chats from "../components/Messages/Chats";

const MainMessage = styled.section`
width:700px;
  height: 600px;
  padding: 10px;
  display: flex;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.block};
  border-radius: 10px;
  @media only screen and (max-width: 600px) {
    width:400px;
  }

`;
const PersonsSide = styled.div`
  border-radius: 10px 0 0 10px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
  padding: 5px;
  width: 300px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }

`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  height: 50px;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      &:hover {
        background-color: ${(props) => props.theme.colors.block};
      }
    }
  }
`;
const Search = styled.div`
  height: 30px;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    padding: 5px 30px;
    background-color: ${(props) => props.theme.colors.block};
    outline: none;
    border: none;
    font-size: 14px;
    text-transform: capitalize;
    &:focus {
      border: 2px solid;
      border-color: ${(props) => props.theme.colors.border};
      border-radius: 5px;
    }
  }
  span {
    position: absolute;
    top: 20%;
    left: 10px;
  }
`;
const Choose = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  padding: 10px;
  span {
    padding: 5px 10px;
    width: 40%;
  }
  span:first-child {
    border-bottom: 3px solid green;
  }
`;
const OnePerson = styled.div`
  display: flex;
  gap: 5px;
  padding: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.block};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  div:first-child {
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    div {
      position: absolute;
      top: 40%;
      right: -7px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: green;
    }
  }
  div:last-child {
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.colors.border};
    text-transform: capitalize;
    span {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Messaging = () => {
  return (
    <Layout>
      <MainMessage>
        <PersonsSide>
          <Heading>
            <h5>Messaging</h5>

            <div>
              <span>
                <TbPointFilled size={10} />
                <TbPointFilled size={10} />
                <TbPointFilled size={10} />
              </span>
              <span>
                <FaEdit />
              </span>
            </div>
          </Heading>

          <Search>
            <span>
              <FaSearch />
            </span>
            <input type="text" placeholder="search messages" />
          </Search>

          <Choose>
            <span>focused</span>
            <span>other</span>
          </Choose>

          <OnePerson>
            <div>
              <img
                src="/src/assets/avatar.png"
                alt="image-person"
                loading="lazy"
              />{" "}
              <div></div>
            </div>

            <div>
              <h4>abdelrhman elshemy</h4>
              <span>you:دا ظهر عندي</span>
            </div>
          </OnePerson>

          <OnePerson>
            <div>
              <img
                src="/src/assets/download.png"
                alt="image-person"
                loading="lazy"
              />
            </div>

            <div>
              <h4>mahmoud elsisi</h4>
              <span>you:support</span>
            </div>
          </OnePerson>

          <OnePerson>
            <div>
              <img
                src="/src/assets/background.png"
                alt="image-person"
                loading="lazy"
              />
              <div></div>
            </div>

            <div>
              <h4>khaled faheem</h4>
              <span>شغلك جميل ما شاء الله</span>
            </div>
          </OnePerson>
        </PersonsSide>

        <Chats />
      </MainMessage>
    </Layout>
  );
};

export default Messaging;
