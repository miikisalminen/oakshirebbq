import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import styled from "styled-components";
import { findAllByPlaceholderText } from "@testing-library/react";

function Story() {
  const fadeInFirst = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  });

  const fadeInSecond = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2000,
  });

  const fadeInThird = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 3000,
  });

  const Header = styled.h1`
    text-align: center;
    padding: 70px 0;
    font-size: 24px;
  `;

  return (
    <>
      <Parallax pages={4} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={3.5}
          style={{ backgroundColor: "red" }}
        >
          <animated.div style={fadeInFirst}>
            <Header>Hello.</Header>
          </animated.div>

          <animated.div style={fadeInSecond}>
            <Header>I want to tell you a story.</Header>
          </animated.div>
          <animated.div style={fadeInThird}>
            <Header>Go ahead and scroll.</Header>
          </animated.div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "green" }}
        />
        <ParallaxLayer offset={1} speed={0.5}>
          <animated.div style={fadeInFirst}>
            <Header>Page 2</Header>
          </animated.div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={3.5}>
          <Header>Page 3</Header>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={3.5}>
          <Header>Page 4</Header>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Story;
