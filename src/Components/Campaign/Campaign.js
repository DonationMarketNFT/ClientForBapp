import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import { data } from "../../api/allpresentdata";
import { media } from "../../styles/theme";
import { makeNewImagePath } from "../../utils";

const CampaignBox1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 935px;
  margin: 0 auto;
  box-sizing: border-box;
  ${media.tablet} {
    width: 100%;
  }
`;

const CampaignImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgphoto});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
`;

const CamPaignTitle = styled.h2`
  ${(props) => props.theme.font.large}
  margin-bottom: 50px;
`;

const Bars = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 100px;
  ${media.tablet} {
    width: 100%;
  }
`;

const PercentBar = styled.div`
  width: 100%;
  height: 10px;
  background: lightgray;
  border-radius: 5px;
`;

const CurrentBar = styled.div`
  position: absolute;
  top: 0;
  width: ${(props) => props.width};
  height: 10px;
  background: gray;
  border-radius: 5px;
`;

const Percent = styled.div`
  ${(props) => props.theme.font.medium}
  margin-top: 20px;
  text-align: right;
`;

const Klay = styled.div`
  ${(props) => props.theme.font.small}
  margin-top: 10px;
  text-align: right;
`;

const CampaignBox = styled.div`
  display: flex;
  width: 935px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 10px;
  ${media.tablet} {
    width: auto;
    margin: 0 30px;
    padding: 0 30px;
  }
`;

const CampaignRow = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;

const ParticipantBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
`;

const ParticipantRow = styled.div`
  display: flex;
`;

const ParticipantTitle = styled.h3`
  margin: 10px 0;
  ${(props) => props.theme.font.medium}
`;

const Participant = styled.div`
  margin-right: 10px;
  width: 70px;
  height: 70px;
  background: black;
  border-radius: 50%;
  ${media.tablet} {
    width: 50px;
    height: 50px;
  }
`;

const DescriptionBox = styled.div`
  padding: 50px 30px;
  height: 100vh;
`;
const DescriptionTitle = styled.h3`
  margin: 10px 0;
  ${(props) => props.theme.font.medium}
`;

const DonationBox = styled.div`
  position: sticky;
  top: 70px;
  padding: 50px 20px 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 4px 12px 20px 6px rgb(0 0 0 / 18%);
`;

const CampaignName = styled.h2`
  ${(props) => props.theme.font.large}
  text-align:center;
  margin-bottom: 30px;
  ${media.tablet} {
    ${(props) => props.theme.font.medium}
  }
`;

const CampaignDesc = styled.p`
  margin-bottom: 30px;
  height: 150px;
`;

const DonationForm = styled.form`
  position: relative;
  label {
    position: absolute;
    top: 2px;
    right: 5px;
  }
`;

const DonationInput = styled.input.attrs({ required: true })`
  all: unset;
  border-bottom: 1px solid lightgray;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0 40px 5px 0;
  text-align: right;
`;

const DonationButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border: 0;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: gray;
  }
  /* all: unset; */
`;

function Campaign() {
  const location = useLocation();
  const params = useParams();

  return (
    <>
      <CampaignBox1>
        <CampaignImage bgphoto={makeNewImagePath(data[params.camId - 1].id)} />
        <CamPaignTitle>{data[params.camId - 1].name}</CamPaignTitle>
        <Bars>
          <PercentBar />
          <CurrentBar width={"80%"} />
          <Percent>80%</Percent>
          <Klay>(800Klay / 1000Klay)</Klay>
        </Bars>
      </CampaignBox1>
      <CampaignBox>
        <CampaignRow width={"70%"}>
          <ParticipantBox>
            <ParticipantRow>
              <ParticipantTitle>participant</ParticipantTitle>
            </ParticipantRow>
            <ParticipantRow>
              <Participant />
              <Participant />
              <Participant />
              <Participant />
            </ParticipantRow>
          </ParticipantBox>
          <DescriptionBox>
            <DescriptionTitle>Description</DescriptionTitle>
          </DescriptionBox>
        </CampaignRow>
        <CampaignRow width={"30%"} style={{ padding: "50px 0" }}>
          <DonationBox>
            <CampaignName>{data[params.camId - 1].name}</CampaignName>
            <CampaignDesc>{data[params.camId - 1].description}</CampaignDesc>
            <DonationForm>
              <DonationInput type="number" id="klay" step={10} />
              <label htmlFor="klay">Klay</label>
              <DonationButton>Donate</DonationButton>
            </DonationForm>
          </DonationBox>
        </CampaignRow>
      </CampaignBox>
    </>
  );
}

export default Campaign;
