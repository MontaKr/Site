import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
`

export const Wrap = styled.div`
  font-family: Poppins;
  margin: 0;
  background-color: #010101;
  color: #eee;

  header {
    position: relative;
    width: 1200px;
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    grid-template-rows: 50px;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .logo {
      font-weight: bold;
    }

    .menu {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      gap: 20px;
      justify-content: center;
      font-weight: 500;
    }
  }

  svg {
    width: 25px;
  }

  .slider {
    position: relative;
    height: 100vh;
    margin-top: -50px;

    .list {
      .item {
        position: absolute;
        inset: 0 0 0 0;
        overflow: hidden;
        opacity: 0;
        transition: 0.5s;

        &.active {
          opacity: 1;
          z-index: 10;

          p:nth-child(1),
          h2,
          p:nth-child(3) {
            transform: translateY(30px);
            filter: blur(20px);
            opacity: 0;
            animation: showContent 0.5s 0.7s ease-in-out 1 forwards;
          }

          h2 {
            animation-delay: 1s;
          }

          p:nth-child(3) {
            animation-delay: 1.3s;
          }

          @keyframes showContent {
            to {
              transform: translateY(0);
              filter: blur(0);
              opacity: 1;
            }
          }
        }

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          background-image: linear-gradient(to top, #000 40%, transparent);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content {
          position: absolute;
          left: 10%;
          top: 20%;
          width: 500px;
          max-width: 80%;
          z-index: 1;

          p {
            margin: 16px 0;
          }

          p:nth-child(1) {
            text-transform: uppercase;
            letter-spacing: 10px;
          }

          h2 {
            font-size: 100px;
            font-weight: 700;
            margin: 0;
          }
        }
      }
    }

    .arrows {
      position: absolute;
      top: 30%;
      right: 50px;
      z-index: 100;

      button {
        background-color: #eee5;
        border: none;
        font-family: monospace;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: x-large;
        color: #eee;
        transition: 0.5s;
        margin-right: 10px; 

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          background-color: #eee;
          color: black;
        }
      }
    }

    .thumbnail {
      position: absolute;
      bottom: 50px;
      z-index: 11;
      display: flex;
      gap: 10px;
      width: 100%;
      height: 250px;
      padding: 0 50px;
      box-sizing: border-box;
      overflow: auto;
      justify-content: center;

      &::-webkit-scrollbar {
        width: 0;
      }

      .item {
        width: 150px;
        height: 220px;
        filter: brightness(0.5);
        transition: 0.5s;
        flex-shrink: 0;

        &.active {
          filter: brightness(1.5);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }

        .content {
          position: absolute;
          inset: auto 10px 10px 10px;
        }
      }
    }
  }

  @media screen and (max-width: 678px) {
    .thumbnail {
      justify-content: start;
    }

    .slider .list .item .content h2 {
      font-size: 60px;
    }

    .arrows {
      top: 10%;
    }
}
`