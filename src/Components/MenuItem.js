import styled from "styled-components";

function MenuItem(props) {
  const Title = styled.h1`
    color: red;
    text-align: left;
    font-size: 18px;
    padding: 5px;
    @media only screen and (min-width: 768px) {
      font-size: 24px;
    }
  `;

  const Desc = styled.p`
    text-align: left;
    padding: 5px;
    font-size: 14px;
    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }
  `;

  const Price = styled.p`
    text-align: right;
    font-size: 14px;
    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }
  `;

  return (
    <>
      <div style={{ padding: "30px" }}>
        <Title>{props.title}</Title>
        <hr />
        <Desc>{props.desc}</Desc>
        <Price>{props.price}</Price>
      </div>
    </>
  );
}

export default MenuItem;
