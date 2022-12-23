import styled from "styled-components";
import { SecurityOutlined, SupervisedUserCircle } from "@material-ui/icons";

const Container = styled.div`
  background-color: #3A4F7A;
  height: 50px;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
`;

const LeftIcon = styled.span`
  margin-right: 5px;
  cursor: pointer;
  color : #FFC6D3;
`;
const Logo = styled.h2`
  font-weight: 500;
  font-size: 30px;
  cursor: pointer;
  color : #FFC6D3;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;

const RightIcon = styled.span`
  margin-left: 10px;
  color : #FFC6D3;
`;
const UserStatus = styled.h3`
  font-weight: 400;
  cursor: pointer;
  color : #FFC6D3;
`;
function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LeftIcon>
            <SecurityOutlined />
          </LeftIcon>
          <Logo>PGEN</Logo>
        </Left>
        <Right>
          <UserStatus>Sign in</UserStatus>
          <RightIcon>
            <SupervisedUserCircle style={{ fontSize: 30 }} />
          </RightIcon>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
