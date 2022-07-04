import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 3rem;

  h2 {
    font-size: 16px;
  }

  .categorias {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .categorias--categoria {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 13rem;
    height: 8.5rem;
    border-radius: 10px;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
  }
  h3 {
    font-size: 18px;
  }
`;
