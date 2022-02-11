import { Link } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1``;

const P = styled.p``;

function SubPage() {
  return (
    <>
      <H1>SubPage</H1>
      <P>임시 SubPage</P>
      <Link to="/">
        <button>home</button>
      </Link>
    </>
  );
}

export default SubPage;
