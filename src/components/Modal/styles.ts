import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  margin: 0;
  widht: 100vw;
  min-height: 250%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  .popUp {
    position: relative;
    width: 65%;
    margin-top: 10%;
    background: #fff;
    border-radius: 10px;
    padding: 2rem;
    font-size: 18px;
    @media screen and (max-width: 850px) {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
  }
  h2 {
    text-align: center;
    padding: 0;
    margin: 2rem;
    font-size: 24px;
  }
  .popUp--header button {
    position: absolute;
    text-align: center;
    right: 2rem;
    top: 2rem;
    font-weight: bold;
    font-size: 18px;
    width: 22px;
    height: 22px;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
  }
  .popUp--header button:hover {
    background: #c13;
    color: #fff;
  }
  .productSection {
    display: flex;
    justify-content: space-between;
    height: 150px;
    margin-bottom: 5%;
    @media only screen and (max-width: 500px) {
      flex-wrap: wrap;
      margin-bottom: 180px;
    }
    @media only screen and (max-width: 400px) {
      margin-bottom: 200px;
    }
  }

  .productSection .picture {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-radius: 10px;
    min-width: 150px;
    min-height: 150px;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 500px) {
      margin: 0 33%;
    }
    @media only screen and (max-width: 400px) {
      margin: 0 auto;
    }
  }

  .productSection .picture img {
    position: absolute;
  }

  #Combo {
    background-color: #f86666;
  }
  #Combo img {
    width: 110px;
    left: 15%;
    top: 15%;
  }
  #Acompanhamento {
    background: #135c13;
  }
  #Acompanhamento img {
    width: 100px;
    left: 15%;
    top: 20%;
  }
  #Bebida {
    background: #ffeb70;
  }
  #Bebida img {
    width: 150px;
    top: 10%;
  }
  #Sobremesa {
    background: #5395d9;
  }
  #Sobremesa img {
    left: 20%;
    top: 20%;
  }

  .productSection .picture p {
    background: #fff;
    color: #fff;
    height: 50%;
    border-radius: 10px;
  }

  .productSection .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5%;
    @media only screen and (max-width: 600px) {
      width: 170px;
    }
    @media only screen and (max-width: 500px) {
      width: 200px;
      margin-top: 5%;
    }
    @media only screen and (max-width: 400px) {
      margin: 5% auto;
      align-items: center;
    }
  }

  .productSection .info p {
    font-size: 16px;
    @media only screen and (max-width: 500px) {
      margin: 5% 0;
    }
  }

  .productSection .info .increment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #125d13;
    border-radius: 25px;
    padding: 0;
    width: 90px;
    height: 30px;
  }

  .productSection .info .increment input {
    margin: 0;
    padding: 0;
    width: 30px;
    background: none;
  }
  .productSection .info .increment input:read-only {
    padding: 0;
    margin: 0;
  }

  .productSection .info .increment button {
    border-radius: 50%;
    font-size: 24px;
    font-weight: lighter;
    color: #fff;
    background: #125d13;
    border: none;
    text-align: center;
    line-height: 0;
    padding: 0;
    margin: 0;
    width: 30px;
    height: 30px;
  }

  .productSection .info .increment button:hover {
    background: black;
  }

  .productSection h3 {
    margin: 0 10%;
    @media only screen and (max-width: 1000px) {
      margin: 0 10% 0 0;
    }
    @media only screen and (max-width: 600px) {
      margin: 0;
    }
    @media only screen and (max-width: 500px) {
      margin-top: 5%;
    }
    @media only screen and (max-width: 400px) {
      margin: 2% 33%;
      width: 100%;
    }
  }

  .adicionais {
    margin-top: 5%;
  }
  .adicionais .ingrediente {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
  }
  .adicionais .ingrediente img {
    width: 80px;
    height: 60px;
    padding: 6px 8px;
    border-radius: 10px;
    margin: 0;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
  }
  .adicionais .ingrediente input {
    all: unset;
    position: relative;
    display: inline-block;
    border: 1px solid #000;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
    background: transparent;
    cursor: pointer;
    &:after {
      content: '';
    }
    &:checked {
      background: green;
      &:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        left: calc(50% - 6px);
        top: calc(50% - 6px);
        border-radius: 50%;
      }
    }
  }
  .obs {
    margin-top: 5%;
  }
  .obs h4 {
    margin-bottom: 2%;
  }
  .obs textarea {
    width: 100%;
    height: 150px;
    border-radius: 5px;
    background: #f4f4f4;
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    resize: none;
  }
`;
