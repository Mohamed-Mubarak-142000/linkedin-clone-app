import styled from "styled-components"

const FooterStyle = styled.div`
border-top:1px solid gray;
width:80%;
margin:0rem auto;
display:flex;
justify-content:center;
`
const Footer = () => {
  return (
    <FooterStyle>
      <span>&copy;2024 all right reversed.</span>
    </FooterStyle>
  )
}

export default Footer