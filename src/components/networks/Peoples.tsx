import styled from "styled-components";
import OnePeople from "./OnePeople";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border:1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.block};
`;

const MainPeople = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  padding: 1rem 5px;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  text-transform: capitalize;
  font-weight: 500;
  span:last-child {
    padding: 10px 20px;
    border-radius: 5px;
    &:hover {
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.background};
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); /* Shadow effect */
    }
  }
`;


const Peoples = () => {
  const people = [
    {
      id: "1",
      image: "/src/assets/background.png",
      avatar: "/src/assets/avatar.png",
      name: "mohamed ahmed",
      job: "android developer",
      parag: "based on your profile ",
    },

    {
      id: "2",
      image: "/src/assets/background.png",
      avatar: "/src/assets/download.png",
      name: "walaa ahmed",
      job: "frontend developer | react js",
      parag: "based on your profile ",
    },

    {
      id: "3",
      image: "/src/assets/background.png",
      avatar: "/src/assets/avatar.png",
      name: "mohamed ahmed",
      job: "fultter developer",
      parag: "based on your profile ",
    },

    {
      id: "4",
      image: "/src/assets/background.png",
      avatar: "/src/assets/images.jpeg",
      name: "tamer ahmed",
      job: "frontend developer | veu js",
      parag: "based on your profile ",
    },

    {
      id: "5",
      image: "/src/assets/background.png",
      avatar: "/src/assets/avatar.png",
      name: "mohamed ahmed",
      job: "android developer",
      parag: "based on your profile ",
    },

    {
      id: "6",
      image: "/src/assets/background.png",
      avatar: "/src/assets/avatar.png",
      name: "mahmoud elsisi",
      job: "android developer",
      parag: "based on your profile ",
    },

    {
      id: "7",
      image: "/src/assets/background.png",
      avatar: "/src/assets/avatar.png",
      name: "yasmein mustafa",
      job: "software engineer | iti graduate",
      parag: "based on your profile ",
    },

    {
      id: "8",
      image: "/src/assets/background.png",
      avatar: "/src/assets/avatar.png",
      name: "asmaa hossam",
      job: "software test engineer | istqp",
      parag: "based on your profile ",
    },
  ];
  return (
    <Container>
      <Heading>
        <span>People you may know based on your recent activity</span>
        <span>see all</span>
      </Heading>
      <MainPeople>
        {people.map((people) => {
          return <OnePeople key={people.id} people={people} />;
        })}
      </MainPeople>

    </Container>
  );
};

export default Peoples;
