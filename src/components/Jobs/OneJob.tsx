import styled from "styled-components";

interface Job {
  id: string;
  name: string;
  image: string;
  company: string;
  position: string;
  logo: string;
  option: string;
}

const MainOneJob = styled.section`
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  display: flex;
  gap: 20px;
  margin: 1rem 0;
  cursor: pointer;
  padding: 0.5rem 0;
  text-transform: capitalize;
  &:hover {
    h4 {
      text-decoration: underline;
    }
  }

  div:first-child {
    width: 90px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h4 {
      color: #006aff;
    }

    h5,
    h6,
    span {
      font-weight: normal;
      color: ${(props) => props.theme.colors.secondary};
      font-size: 12px;
    }
  }
`;


const OneJob = ({ job }: { job: Job }) => {
  return (
    <>
      <MainOneJob>
        <div>
          <img src={job.image} loading="lazy" alt="image-job" />
        </div>

        <div>
          <h4>{job.name}</h4>
          <h5>{job.company}</h5>
          <h6>{job.position}</h6>
          <span>{job.logo}</span>
          <span>{job.option}</span>
        </div>
      </MainOneJob>

     
    </>
  );
};

export default OneJob;
