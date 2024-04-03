import { TbPointFilled } from "react-icons/tb";
import styled from "styled-components";

interface Notific {
  id: string;
  image: string;
  title: string;
  time: string;
}

const OneNoti = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid;
  padding: 10px 5px;
  border-color: ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.text};

  &:hover{
    background-color: ${(props) => props.theme.colors.background};
    transition:all .2s ease-in-out;
    cursor:pointer;
    text-decoration:underline;
  }

  div:first-child {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  h5 {
    font-weight: 400;
    line-height: 20px;
    width: 80%;
    padding:5px;
  }

  div:last-child {
    width: 8%;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    padding: 20px 0;
    gap: 15px;
    align-items: center;
  }
`;
const OneNotific = ({ notific }: { notific: Notific }) => {
  return (
    <OneNoti>
      <div>
        <img src={notific.image} alt="image" loading="lazy" />
      </div>
      <h5>{`${notific.title.slice(0, 300)}...`}</h5>
      <div>
        <span>{notific.time}</span>

        <span>
          <TbPointFilled size={10} />
          <TbPointFilled size={10} />
          <TbPointFilled size={10} />
        </span>
      </div>
    </OneNoti>
  );
};

export default OneNotific;
