import { BsFillSaveFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { IoSaveSharp } from "react-icons/io5";
import { IoSaveOutline } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import styled from "styled-components";

const Btn = styled.button`
  color: #006aff;
  width: 90%;
  margin: auto;
  border-radius: 25px;
  outline: none;
  border: 2px solid;
  border-color: #006aff;
  padding: 10px;
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

const MainLeftSide = styled.section`
  display: flex;
  flex-direction: column;
  gap:20px;
  border-radius: 10px;
  margin-left:1.5rem;
  @media only screen and (max-width: 900px) {
  display:none
  }
  `;
  const ContentOptions = styled.div`
  display:flex;
  border-radius:10px;
  flex-direction:column;
  gap:15px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.block};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); /* Shadow effect */
  padding:10px 0;
div{
  display:flex;
  gap:10px;
  align-items:center;
  font-size:20px;
  padding:10px;
  &:hover{
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  @media only screen and (min-width: 768px) {
    font-size:16px;
  }
  @media only screen and (min-width: 992px) {
    font-size:20px;
  }
}


`
const LeftSideJob = () => {
  return (
    <MainLeftSide>
      <ContentOptions>
        <div>
          <span>
            <BsFillSaveFill />
          </span>
          <span>my jobs</span>
        </div>

        <div>
          <span>
            <FaList />
          </span>
          <span>preferance</span>
        </div>

        <div>
          <span>
            <IoSaveSharp />
          </span>
          <span>interview prep</span>
        </div>

        <div>
          <span>
            <IoSaveOutline />
          </span>
          <span>resume builder</span>
        </div>

        <div>
          <span>
            <IoLogoYoutube />
          </span>
          <span>job seeker guidance</span>
        </div>
      </ContentOptions>

      <Btn>
        <FaRegEdit />
        post free job
      </Btn>
    </MainLeftSide>
  );
};

export default LeftSideJob;
