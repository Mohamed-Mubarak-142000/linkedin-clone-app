import styled from "styled-components";
import Layout from "../template/Layout/Layout";
import OneJob from "../components/Jobs/OneJob";
import { FaArrowRightLong } from "react-icons/fa6";

const MainJobs = styled.section`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.block};
  padding: 1rem 5px;
  border-radius: 10px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h5 {
    font-weight: 400;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Btn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
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

const Jobs = () => {
  const jobs = [
    {
      id: "1",
      name: "Expleo Group logo Front-End Developer | Next.js (React) | German Speaker",
      image: "/src/assets/avatar.png",
      company: "expleo group",
      position: "cairo , cairo , egypt (hybrid)",
      logo: "2 school alumni work here",
      option: "viewed",
    },
    {
      id: "2",
      name: "Salesforce Developer",
      image: "/src/assets/images.png",
      company: "IQVIA group",
      position: "cairo , egypt (hybrid)",
      logo: " 2school alumni work here",
      option: "viewed.promoted",
    },
    {
      id: "3",
      name: "Senior Frontend Developer",
      image: "/src/assets/download.png",
      company: "geidea group",
      position: "cairo , egypt (hybrid)",
      logo: "9 school alumni work here",
      option: "promoted",
    },
  ];
  return (
    <Layout>
      <MainJobs>
        <Heading>
          <h3>Top job picks for you</h3>
          <h5>Based on your profile and search history</h5>
        </Heading>

        {jobs.map((job) => {
          return <OneJob key={job.id} job={job} />;
        })}

        <Btn>
          show more
          <FaArrowRightLong />
        </Btn>
      </MainJobs>
    </Layout>
  );
};

export default Jobs;
