import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
  margin: 3rem auto;
  max-width: 1000px;
  width: 100vw;
  display: flex;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', Sans Serif;
  }
  section {
    width: 50%;
  }
  .done {
    height: 70vh;
    border-left: 2px solid #555;
  }
  h2 {
    font-size: 26px;
    margin-left: 5rem;
    font-weight: bolder;
  }
  .preparando {
    margin-left: 1rem;
  }
  @media only screen and (max-device-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
