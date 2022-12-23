import styled from "styled-components";
import FunctionalBar from "../Components/FunctionalBar";
import Navbar from "../Components/Navbar";
import PasswordBox from "../Components/PasswordBox";

const Container = styled.div``;
const Wrapper = styled.div``;
function Home() {
  return <Container>
    <Wrapper>
        <Navbar/>
        <FunctionalBar/>
        <PasswordBox/>
    </Wrapper>
  </Container>;
}

export default Home;
