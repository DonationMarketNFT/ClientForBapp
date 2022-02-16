import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles/theme";

const Head = styled(motion.header)`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  z-index: 9;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  width: 935px;
  height: 100%;
  z-index: 9;
  ${media.tablet} {
    width: 100%;
  }
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

const SearchForm = styled.form`
  position: relative;
  svg {
    height: 20px;
  }
  ${media.mobile} {
    display: none;
  }
`;
const SearchInput = styled(motion.input).attrs({ autoComplete: "off" })`
  all: unset;
  transform-origin: right center;
  position: absolute;
  top: -3px;
  right: 0px;
  padding: 3px 10px 3px 40px;
  box-sizing: border-box;
  padding-left: 40px;
  z-index: -1;
  border: 1px solid lightgray;
`;

const MyBalance = styled.div`
  margin-left: 15px;
`;

const Mypage = styled.div`
  margin-left: 15px;
`;
const ConnectWallet = styled.div`
  margin-left: 15px;
`;

const headVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
};

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const inputAnimation = useAnimation();
  const headAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 60) {
        headAnimation.start("scroll");
      } else {
        headAnimation.start("top");
      }
    });
  }, [scrollY, headAnimation]);

  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };

  return (
    <Head variants={headVariants} animate={headAnimation} initial={"top"}>
      <Container>
        <Col>
          <Link to="/">
            <Logo>Logo</Logo>
          </Link>
        </Col>
        <Col>
          <SearchForm>
            <motion.svg
              onClick={toggleSearch}
              animate={{ x: searchOpen ? -185 : 0 }}
              transition={{ type: "linear" }}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </motion.svg>
            <SearchInput
              animate={inputAnimation}
              initial={{ scaleX: 0 }}
              transition={{ type: "linear" }}
              placeholder="Search for Campaign..."
            />
          </SearchForm>
          {isLogined ? (
            <>
              <MyBalance>10 Klay</MyBalance>
              <Mypage>Mypage</Mypage>
            </>
          ) : (
            <ConnectWallet>Connect Wallet</ConnectWallet>
          )}
        </Col>
      </Container>
    </Head>
  );
}

export default Header;
