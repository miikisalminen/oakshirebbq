import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "react-spring";

import MenuItem from "./MenuItem";

import friends1 from "./media/friends1.svg";
import friends2 from "./media/friends2.svg";

function Landing() {
  const Container = styled.div`
    background-image: url("https://wallpapercrafter.com/th800/255128-barbecue-bbq-grill-and-cook-hd.jpg");
    background-size: auto 150vh;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
  `;

  const Header = styled.h1`
    font-size: 18px;
    @media only screen and (min-width: 768px) {
      font-size: 24px;
    }
  `;

  const Paragraph = styled.p`
    font-size: 12px;
    padding-top: 5px;
    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }
  `;

  const Welcome = styled.div`
    width: 100vw;
    height: 30vh;
    background-color: #1a1a1a;
    border-radius: 2px;
    color: white;
    position: absolute;
    z-index: 2;
    margin: 5vh 0;
    padding: 0px 0 0px;

    text-align: center;
  `;

  const About = styled.div`
    width: 100vw;
    height: 20vh;
    background-color: #1a1a1a;
    border-radius: 2px;
    color: white;
    position: absolute;
    bottom: -20vh;
    z-index: 2;
    margin: 20vh 0;
    padding: 0px 0 0px;

    text-align: center;
  `;

  const Menu = styled.div`
    width: 100vw;
    height: 80vh;
    background-color: #1a1a1a;
    border-radius: 2px;
    color: white;
    position: absolute;
    z-index: 2;
    margin: 5vh 0;
    padding: 0px 0 0px;

    text-align: center;
  `;

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
  `;

  const Friends1 = styled.img`
    z-index: 10;
    margin: 60vh 10px;
    height: 25%;
    width: auto;
    @media only screen and (min-width: 768px) {
      height: 40%;
      width: auto;
      margin: 50vh 10px;
    }
  `;
  const Friends2 = styled.img`
    z-index: 10;
    margin: 60vh 10px;
    float: right;
    height: 25%;
    width: auto;
    @media only screen and (min-width: 768px) {
      height: 40%;
      width: auto;
      margin: 50vh 10px;
    }
  `;

  const fadeIn = useSpring({
    config: { mass: 1, tension: 200, friction: 70 },
    to: { opacity: 1, margin: "25px 0" },
    from: { opacity: 0, margin: "0 0" },
    delay: 200,
  });
  return (
    <Container>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={2.5}>
          <div
            style={{
              width: "100vw",
              height: "50vh",
              backgroundColor: "#1a1a1a",
              opacity: 0.5,
              zIndex: 11,
              margin: "60vh 0",
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <Friends1 src={friends1} />
          <Friends2 src={friends2} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2}>
          <animated.div style={fadeIn}>
            <Welcome>
              <br />
              <Header>Welcome to Oakshire BBQ</Header>
              <Paragraph>
                Here we strive to be the best when it comes to barbeque.
                <br /> With us, there is no half assing it.
                <br /> We go the extra mile for that fucking meat.
              </Paragraph>
            </Welcome>

            <About>
              <Header>
                Good ol' fashioned BBQ
                <br />
                Since 1932
              </Header>
              <Paragraph>Scroll down further to see our menu! </Paragraph>
            </About>
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2}>
          <Menu>
            <Header>Menu</Header>
            <GridContainer>
              <MenuItem
                title="Smoked Beef Steak"
                desc="Lightly smoked beef steak with the side of delicious potatoes"
                price="23,99€"
              />
              <MenuItem
                title="Smoked Beef Steak"
                desc="Lightly smoked beef steak with the side of delicious potatoes"
                price="23,99€"
              />
              <MenuItem
                title="Smoked Beef Steak"
                desc="Lightly smoked beef steak with the side of delicious potatoes"
                price="23,99€"
              />
              <MenuItem
                title="Smoked Beef Steak"
                desc="Lightly smoked beef steak with the side of delicious potatoes"
                price="23,99€"
              />
              <MenuItem
                title="Smoked Beef Steak"
                desc="Lightly smoked beef steak with the side of delicious potatoes"
                price="23,99€"
              />
              <MenuItem
                title="Smoked Beef Steak"
                desc="Lightly smoked beef steak with the side of delicious potatoes"
                price="23,99€"
              />
            </GridContainer>
          </Menu>
        </ParallaxLayer>
      </Parallax>
    </Container>
  );
}

export default Landing;
