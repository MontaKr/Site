import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  inset: 50px 50px 50px 150px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const Wrap = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 360px;
  height: 360px;
  border: 1px solid #fff;

  .neon,
  .border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }

  .neon {
    filter: blur(10px);
    opacity: 0.5;
    z-index: 1;
  }

  .border {
    z-index: 2;
  }

  .gradient {
    position: absolute;
    inset: -200px;
    background: conic-gradient(
      from 0deg at var(--gradient-pos-x) var(--gradient-pos-y),
      #1e87ff,
      #5c13c4,
      #ff0033,
      #ffda00,
      #64bc26,
      #1e87ff
    );
    border-radius: 50%;
    animation: rotate 4s linear infinite;
  }

  .imgContainer {
    position: relative;
    width: 350px;
    height: 350px;
    z-index: 3;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
