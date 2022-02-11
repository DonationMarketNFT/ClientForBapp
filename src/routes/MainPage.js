import { Link } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1``;

const P = styled.p``;

function MainPage() {
  return (
    <>
      <H1>MainPage</H1>
      <P>임시 MainPage</P>
      <Link to="/sub">
        <button>sub</button>
      </Link>
    </>
  );
}

export default MainPage;
