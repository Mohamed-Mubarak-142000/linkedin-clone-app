import styled from "styled-components";
import Layout from "../template/Layout/Layout";
import JobSearchSmarter from "../components/networks/JobSearchSmarter";
import Peoples from "../components/networks/Peoples";

const MainNetwork = styled.section`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Heading = styled.div`
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.block};
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
const Network = () => {
  return (
    <Layout>
      <MainNetwork>
        <Heading>
          <span>No pending invitations</span>
          <span>manage</span>
        </Heading>
        <JobSearchSmarter />
        <Peoples />
      </MainNetwork>
    </Layout>
  );
};

export default Network;
