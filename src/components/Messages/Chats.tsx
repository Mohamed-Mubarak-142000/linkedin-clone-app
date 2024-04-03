import { TbPointFilled } from "react-icons/tb";
import styled from "styled-components";
import { RiVideoAddFill } from "react-icons/ri";
import { FaImage } from "react-icons/fa";
import { MdAttachment } from "react-icons/md";

const Chat = styled.div`
  width: 70%;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 1200px) {
    width: 70%;
  }
`;

const Heading = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); /* Shadow effect */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  height: 50px;
  h5 {
    position: relative;
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    span:last-child {
      font-weight: 300;
    }

    div {
      position: absolute;
      top: 5px;
      right: -15px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: green;
    }
  }

  background-color: ${(props) => props.theme.colors.background};
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

const ContentChat = styled.div`
  overflow-y: scroll;
  padding: 10px;
  margin-top: 2px;
  height: 445px;
  background-color: ${(props) => props.theme.colors.background};
`;

const EvenElement = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 5px;
  div {
    max-width: 200px;
    padding: 5px;
    border-radius: 5px;
    background-color: #369c3690;
  }
  span:first-child {
    padding: 5px;
    font-size: 12px;
  }
  span:last-child {
    font-size: 10px;
    margin-left: 2rem;
  }
`;
const OddElement = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    max-width: 200px;
    padding: 5px;
    border-radius: 5px;
    background-color: #6da5f39b;
  }
  span:first-child {
    padding: 5px;
    font-size: 12px;
  }
  span:last-child {
    font-size: 10px;
    margin-left: 2rem;
  }
`;

const Footer = styled.section`
  display: flex;
  gap: 5px;
  align-items: center;
padding:10px 5px;
border:1px solid ;
border-color: ${(props) => props.theme.colors.border};
background-color: ${(props) => props.theme.colors.background};
  input {
      width: 75%;
      outline:none;
      padding:5px 10px;
      border-radius:5px;
      border:1px solid;       
       border-color: ${(props) => props.theme.colors.border};
      background-color: ${(props) => props.theme.colors.block};
      &:focus{
        border:2px solid ;
        border-color: ${(props) => props.theme.colors.border};
    }
    }
  }
`;

const Btn = styled.button`
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.block};
  padding: 5px 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #006aff;
    transition: all 0.2s ease-in-out;
  }
`;
interface Messages {
  id: number;
  content: string;
  time: string;
}
const Chats = () => {
  const messages = [
    {
      id: 1,
      content: "hi",
      time: "03.52 PM",
    },
    {
      id: 2,
      content: "hi",
      time: "03.59 PM",
    },
    {
      id: 3,
      content:
        "how are you how are you how are you how are you how are you how are you",
      time: "04.10 PM",
    },
    {
      id: 4,
      content:
        "how are you how are you how are you how are you how are you how are youhow are you how are you how are you how are youhow are you how are you how are you how are you",
      time: "04.25 PM",
    },
    {
      id: 5,
      content:
        "how are you how are you how are you how are you how are you how are you",
      time: "04.10 PM",
    },
    {
      id: 6,
      content: "iam funny",
      time: "04.25 PM",
    },
    {
      id: 7,
      content:
        "how are you how are you how are you how are you how are you how are you",
      time: "04.10 PM",
    },
    {
      id: 8,
      content: "iam funny",
      time: "04.25 PM",
    },
  ];
  return (
    <Chat>
      <Heading>
        <h5>
          <span>abdelrhman elshemy</span>
          <span>online</span>
          <div></div>
        </h5>

        <div>
          <span>
            <TbPointFilled size={10} />
            <TbPointFilled size={10} />
            <TbPointFilled size={10} />
          </span>
          <span>
            <RiVideoAddFill size={20} />
          </span>
        </div>
      </Heading>

      <ContentChat>
        {messages.map((item: Messages) => {
          return (
            <>
              {item.id % 2 === 0 ? (
                <EvenElement key={item.id}>
                  <div>
                    <span>{item.content}</span>
                    <span>{item.time}</span>
                  </div>
                </EvenElement>
              ) : (
                <OddElement key={item.id}>
                  <div>
                    <span>{item.content}</span>
                    <span>{item.time}</span>
                  </div>
                </OddElement>
              )}
            </>
          );
        })}
      </ContentChat>

      <Footer>
        <div>
          <span>
            <FaImage size={25} />
          </span>
          <span>
            <MdAttachment size={25} />
          </span>
        </div>

        <input type="text" placeholder="writing message" />

        <Btn>send</Btn>
      </Footer>
    </Chat>
  );
};

export default Chats;
