import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  ${(props) => props.theme.flexCenter}
  flex-direction:column;
`;

const H1 = styled.h1`
  ${(props) => props.theme.font.large};
  color: ${(props) => props.theme.color.main_color};
`;

const P = styled.p`
  ${(props) => props.theme.font.small}
  color: ${(props) => props.theme.color.sub_color1};
`;

function MainPage() {
  return (
    <>
      <Container>
        <H1>MainPage</H1>
        <P>임시 MainPage</P>
        <Link to="/sub">
          <button>sub</button>
        </Link>
      </Container>
    </>
  );
}

export default MainPage;
