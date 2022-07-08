import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', Sans Serif;
  }
  .app {
    position: relative;
    margin: 0 auto;
    max-width: 1000px;
    height: 100vh;
    width: 100vw;
  }
  .container {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  .welcome {
    font-size: 24px;
  }
  h2 {
    margin-top: 3rem;
    font-weight: bold;
    font-size: 16px;
  }

  input {
    background: #f4f4f4;
    border: none;
    width: 250px;
    height: 35px;
    border-radius: 5px;
    margin: 1rem 0;
    font-weight: bold;
    transition: all 1s;
    &:focus {
      font-weight: bold;
      padding: 10px;
      width: 50%;
    }
  }

  input::placeholder {
    font-weight: bold;
    opacity: 50%;
    padding: 10px;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    margin: 3rem 0;
  }
  button {
    width: 200px;
    padding: 10px 40px;
    border: 2px solid #9f9f9f;
    border-radius: 15px;
    font-weight: bold;
    color: #9f9f9f;
    margin-left: 2rem;
    cursor: pointer;
  }
  button.cancelar {
    background: transparent;
  }
  button.cancelar:hover {
    background: red;
    border: 2px solid red;
    color: #fff;
  }
  button.finalizar {
    background: #9f9f9f;
    color: #fff;
  }
  button.finalizar:hover {
    background: green;
    border: 2ps solid green;
  }
  @media only screen and (max-device-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    input {
      width: 80vw;
      &:focus {
        width: 80vw;
      }
    }
    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      position: relative;
      height: 100px;
      width: 100%;
    }
    .button {
      width: 70%;
    }
  }
  @media only screen and (max-device-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Show = styled.div`
  .products {
    position: relative;
    width: 170px;
    height: 210px;
    margin: 2rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all-ease transform 0.5s;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
  }
  .products:hover {
    -webkit-animation: shadow-drop-center 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: shadow-drop-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  #Combo {
    background-color: #f86666;
  }
  #Acompanhamento {
    background: #135c13;
  }
  #Acompanhamento img {
    width: 120px;
    left: 25px;
  }
  #Bebida {
    background: #ffeb70;
  }
  #Bebida img {
    width: 150px;
    left: 10px;
  }
  #Sobremesa {
    background: #5395d9;
  }
  .description {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 100%;
    height: 65%;
    bottom: 0;
    border-radius: 10px;
  }
  .products img {
    position: absolute;
    top: 20px;
    left: 35px;
    width: 100px;
    z-index: 2;
  }
  .products h4 {
    margin-bottom: 1rem;
    font-size: 14px;
  }
  .products h5 {
    margin-top: 2.5rem;
    font-size: 14px;
  }
  p {
    font-size: 11px;
    margin: 5px 20px;
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
`;
