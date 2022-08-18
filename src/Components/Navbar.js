import styled from "styled-components";
import logo from "./media/logo.svg";

function Navbar() {
  const Title = styled.h2`
    font-size: 18px;
    color: #e6e6e6;
    padding: 5px 10px;
  `;

  const Bar = styled.header`
    background-color: #1a1a1a;
    height: 10vh;
    width: 100vw;
    position: absolute;
    z-index: 10;
  `;

  const Link = styled.a`
    color: #e6e6e6;
    font-size: 12px;
    padding: 20px 10px;
  `;

  const Logo = styled.img`
    float: right;
    width: 50px;
    height: auto;
    padding: 10px 10px;
  `;

  return (
    <Bar>
      <Logo src={logo} />
      <Title> Oakshire BBQ</Title>
      <Link>Menu</Link>
      <Link>About</Link>
      <Link>Contact</Link>
    </Bar>
  );
}

export default Navbar;
