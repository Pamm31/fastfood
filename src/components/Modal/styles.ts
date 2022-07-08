import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  widht: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  .popUp {
    position: relative;
    width: 65%;
    height: 80%;
    background: #fff;
    border-radius: 10px;
    padding: 2rem;
    font-size: 18px;
  }
  h2 {
    margin: 2rem;
  }
  p {
    position: absolute;
    right: 2rem;
    top: 2rem;
    font-weight: bold;
    cursor: pointer;
  }
`;
