import styled from "styled-components";

const Wrapper = styled.div`
  margin: 100px 0;
`;

const PastTitle = styled.h3`
  margin: 30px 0;
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 180px;
  height: 150px;
  margin: 10px 0;
  background: black;
`;

function Past() {
  return (
    <Wrapper>
      <PastTitle>완료된 캠페인</PastTitle>
      <FlexBox>
        {/* 실제 데이터 map 함수 */}
        <Box />
        <Box />
        <Box />
        <Box />
      </FlexBox>
    </Wrapper>
  );
}

export default Past;
