import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 3rem auto;

  h2 {
    font-size: 16px;
  }

  .categorias {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 2rem 0;
  }
  .categorias--categoria {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 180px;
    flex-shrink: 0;
    width: 180px;
    height: 130px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
  }
  h3 {
    font-size: 18px;
  }
  .categorias--categoria:hover {
    -webkit-animation: shadow-drop-center 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: shadow-drop-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @-webkit-keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
  @keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
  @media only screen and (max-device-width: 1260px) {
    width: 80vw;
    h2,
    p {
      margin-left: 10px;
    }
    .categorias {
      justify-content: center;
      margin: 2rem 12rem;
    }
  }
  @media only screen and (max-device-width: 850px) {
    .categorias {
      justify-content: center;
      margin: 2rem 6rem;
    }
  }
  @media only screen and (max-device-width: 650px) {
    margin: 2rem 0;

    .categorias--categoria {
      margin: 0;
    }
    @media only screen and (max-device-width: 430px) {
      h3 {
        font-size: 14px;
      }
    }
  }
`;
