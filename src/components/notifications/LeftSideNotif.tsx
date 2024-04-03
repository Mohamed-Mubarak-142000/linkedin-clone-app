import styled from "styled-components"

const ContentSide = styled.div`
width:250px;
margin-left:2rem;
border: 1px solid;
padding:10px;
border-color: ${(props) => props.theme.colors.border};
background-color: ${(props) => props.theme.colors.block};
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); /* Shadow effect */
border-radius:10px;
display:flex;
flex-direction:column;
gap:10px;
text-transform:capitalize;

h5{
    color:#006aff;
    &:hover{
        cursor:pointer;
        text-decoration:underline;
        transition:all .2s ease-in-out;
    }
}
`
const LeftSideNotif = () => {
  return (
    <ContentSide>
        <h3>manage your</h3>
        <h3>notifications</h3>

        <h5>view setting</h5>
    </ContentSide>
  )
}

export default LeftSideNotif