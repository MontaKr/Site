import styled from "styled-components";
import bg1 from "../../assets/background/bg1.jpg";

export const Wrap = styled.div`
  min-height: 100vh;
  background: url(${bg1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const Box = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4.5em;
    font-weight: 700;
    color: ${(props) => `#${props.color}`};
    text-shadow: -5px 5px 20px #000;
  }

  h2 {
    font-size: 2.5em;
    font-weight: 500;
    color: ${(props) => `#${props.color}`};
    text-shadow: -5px 5px 10px #000;
  }
`;
