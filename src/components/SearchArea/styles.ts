import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 3rem;

  h2 {
    font-weight: bold;
  }

  input {
    background: #f4f4f4;
    border: none;
    width: 250px;
    height: 35px;
    border-radius: 5px;
    margin-top: 1rem;
  }

  input::placeholder {
    font-weight: bold;
    opacity: 50%;
    padding: 10px;
  }
`;
