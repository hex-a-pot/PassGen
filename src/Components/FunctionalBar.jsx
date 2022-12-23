import styled from "styled-components";

const Container = styled.div`
  height: 70px;
  background-color: #ffc6d3;
`;

const Top = styled.div`
  height : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Link = styled.h3`
color : #3A4F7A;
margin : 0px 20px;
&:hover{
    color:white;
}
cursor : pointer;
`;
function FunctionalBar() {
  return (
    <Container>
      <Top>
        <Link>GET PGEN PASSWORD MANAGER</Link>
        <Link default = "true">PASSWORD GENERATOR</Link>

      </Top>
    </Container>
  );
}

export default FunctionalBar;
