import styled from "styled-components";
import { LuNetwork } from "../../Common/icons";
import { IoClose } from "../../Common/icons";


interface People {
  id: string;
  image: string;
  avatar: string;
  name: string;
  job: string;
  parag: string;
}

const ContentOne = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  width: 185px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const ContentProfile = styled.div`
  position: relative;
  div {
    width: 100%;
    height: 70px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px 10px 0 0;
    }
  }
  section {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%);
    width: 90px;
    height: 90px;
    border-radius: 50px;
    border: 2px solid #eee;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
      object-fit: contain;
    }
  }
`;

const InfoPeople = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  h4 {
    font-weight: 500;
  }
  h5 {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 300;
  }
`;

const Parag = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 300;
`;

const Btn = styled.button`
  color: #006aff;
  width: 90%;
  margin: auto;
  border-radius: 25px;
  outline: none;
  border: 2px solid;
  border-color: #006aff;
  padding: 5px;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.block};
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    background-color: #6da5f39b;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;


const DeleteBtn = styled.div`
  position: absolute;
  top:20px;
  right:10px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #000000da;
  display:flex;
  align-items:center;
  justify-content:center;

  &:hover{
    cursor:pointer;
  }
`;


const OnePeople = ({ people }: { people: People }) => {
  return (
    <ContentOne>
      <ContentProfile>
        <div>
          <img src={people.image} alt="user-profile" loading="lazy" />
        </div>
        <section>
          <img src={people.avatar} alt="user-profile" loading="lazy" />
        </section>
      </ContentProfile>

      <InfoPeople>
        <h4>{people.name}</h4>
        <h5>{people.job}</h5>
      </InfoPeople>

      <Parag>{people.parag}</Parag>

      <Btn>
        <LuNetwork />
        connect
      </Btn>

      <DeleteBtn>
        <IoClose color="white" size={25} />
      </DeleteBtn>
    </ContentOne>
  );
};

export default OnePeople;
