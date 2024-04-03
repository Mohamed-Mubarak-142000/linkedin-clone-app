import styled from "styled-components";

const ShowLinks = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  span {
    text-align: center;
    width: 120px;
    &:hover {
      color: #006aff;
      tranition: all 0.2s ease-in-out;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
const Links = () => {
  return (
    <ShowLinks>
      <span>home</span>
      <span>about</span>
      <span>contact</span>
      <span>accessability</span>
      <span>privacy & terms</span>
      <span>ad choise</span>
      <span>get the linkedin app</span>
      <span>advritesing</span>
      <span>accessability</span>
      <span>privacy & terms</span>
      <span>ad choise</span>
    </ShowLinks>
  );
};

export default Links;
