import styled from "styled-components";

import friends from "./media/friends3.svg";

function Contact() {
  const Container = styled.div`
    width: 100vw;
    min-height: 50vh;
    background-color: #1a1a1a;
    border-radius: 2px;
    color: white;
    position: absolute;
    margin: 30vh 0;
    padding: 0px 0 0px;
    text-align: center;
    box-shadow: 18px 19px 0px 0px rgba(26, 26, 26, 0.62);
    -webkit-box-shadow: 18px 19px 0px 0px rgba(26, 26, 26, 0.62);
    -moz-box-shadow: 18px 19px 0px 0px rgba(26, 26, 26, 0.62);

    @media only screen and (min-width: 768px) {
      margin: 10vh 0;
    }
  `;

  const Header = styled.h1`
    font-size: 18px;
    @media only screen and (min-width: 768px) {
      font-size: 32px;
    }
  `;

  const Paragraph = styled.p`
    font-size: 14px;
    padding: 40px;
    @media only screen and (min-width: 768px) {
      font-size: 28px;
    }
  `;

  const Friends = styled.img`
    z-index: -1;
    margin: -15vh 0;
    position: absolute;
    float: right;
    height: 30%;
    width: auto;
    @media only screen and (min-width: 768px) {
      height: 40%;
      width: auto;
      margin: -15vh 10px;
    }
  `;

  return (
    <Container>
      <Friends src={friends} />
      <br />
      <Header>Visit us today!</Header>
      <br />
      <div style={{ width: "50vw", float: "left" }}>
        <Header style={{ color: "red" }}>Open times</Header>
        <Paragraph>
          Monday - Friday <br /> 09:00 - 23:00
        </Paragraph>
        <Paragraph>
          Saturday <br /> 10:00 - 01:00
        </Paragraph>
        <Paragraph>
          Sunday <br /> Closed
        </Paragraph>
      </div>
      <div style={{ width: "50vw", float: "right" }}>
        <Header style={{ color: "red" }}>Address</Header>
        <Paragraph>
          1536 Jame Avenue <br />
          Newton USA
        </Paragraph>
        <Header style={{ color: "red" }}>Call</Header>
        <Paragraph>316-282-3875</Paragraph>
      </div>
    </Container>
  );
}

export default Contact;
