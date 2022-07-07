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
  h2 {
    margin-top: 3rem;
    font-weight: bold;
  }

  input {
    background: #f4f4f4;
    border: none;
    width: 250px;
    height: 35px;
    border-radius: 5px;
    margin-top: 1rem;
    font-weight: bold;
    &:focus {
      font-weight: bold;
      padding: 10px;
    }
  }

  input::placeholder {
    font-weight: bold;
    opacity: 50%;
    padding: 10px;
  }
  @media only screen and (max-device-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    input {
      width: 80vw;
    }
  }
  @media only screen and (max-device-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
