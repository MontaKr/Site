import styled from "styled-components";
import "boxicons";

export const Wrap = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 5%;
    background: transparent;
    display: flex;
    align-items: center;
    z-index: 100;

    .logo {
      font-size: 30px;
      color: #fff;
      text-decoration: none;
      font-weight: 700;
    }

    .social-media {
      margin: 0 auto 0 50px;

      a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        background: transparent;
        border: 2px solid #fff;
        border-radius: 6px;
        text-decoration: none;
        transition: 0.5s;

        i {
          font-size: 20px;
          color: #fff;
          transition: 0.5s;
        }
      }

      a:hover {
        background: #fff;

        i {
          color: #444;
        }
      }
    }

    .navbar a {
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      margin-left: 30px;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }

  .banner {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;

    .slider {
      .slide {
        position: absolute;
        width: 100%;
        height: 100%;

        &:nth-child(1) .penetrate-blur h1,
        &:nth-child(4) .penetrate-blur h1 {
          margin-right: -10px;
        }

        &:nth-child(2) .right-info h1,
        &:nth-child(4) .right-info h1 {
          margin-left: 10px;
        }

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
          opacity: 0;
          transition: 0.3 ease;
        }

        .left-info {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          transform: translateX(-100%);
          transition: 0s;

          .penetrate-blur {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            display: flex;
            justify-content: flex-end;
            align-items: center;
            -webkit-mask: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
            -webkit-mask-clip: text, padding-box;
            -webkit-mask-composite: xor;
            padding-right: 20px;

            h1 {
              font-size: 250px;
              /* font-weight: 400; */
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            }
          }

          .content {
            position: absolute;
            bottom: 8%;
            left: 10%;
            color: #fff;

            h3 {
              font-size: 20px;
            }

            p {
              font-size: 16px;
              margin: 10px 0 15px;
            }

            .btn {
              display: inline-block;
              padding: 13px 28px;
              background: #fff;
              border: 2px solid #fff;
              border-radius: 6px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              font-size: 16px;
              text-decoration: none;
              color: #444;
              font-weight: 600;
              transition: 0.5s;
            }

            .btn:hover {
              background: transparent;
              color: #fff;
            }
          }
        }

        .right-info {
          position: absolute;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          transform: translateX(100%);
          transition: 0s;

          h1 {
            font-size: 250px;
            font-weight: 400;
            color: #fff;
            text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb,
              0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
              0 0px 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
              0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
          }

          h3 {
            position: absolute;
            font-size: 80px;
            color: #fff;
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transform: translateY(200%);
            margin-left: 13px;
          }
        }
      }

      .slide.active {
        img {
          opacity: 1;
        }

        .left-info {
          transform: translateX(0);
          z-index: 1;
          transition: 0.5s ease;
        }

        .right-info {
          transform: translateX(0);
          z-index: 1;
          transition: 0.5s ease;
        }
      }
    }
  }

  .navigation {
    position: absolute;
    bottom: 8%;
    right: 5%;
    z-index: 99;

    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background: #fff;
      border: 2px solid #fff;
      border-radius: 6px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      margin-left: 25px;
      transition: 0.5s;

      &:nth-child(1) {
        background: transparent;

        i {
          color: #fff;
        }
      }

      &:nth-child(1):hover {
        background: #fff;

        i {
          color: #444;
        }
      }

      i {
        font-size: 45px;
        color: #444;
        transition: 0.5s;
      }
    }
  }
`;
