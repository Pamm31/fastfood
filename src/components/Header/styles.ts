import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 40px;
  padding: 0 20px;
  background: #135c14;
  color: #fff;

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
  }
  .logo img {
    height: 24px;
    width: 24px;
    background-color: #fff;
    border-radius: 50%;
    padding: 4px;
  }
  .logo h1 {
    font-size: 18px;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 15rem;
    margin-right: 26px;
  }
  .nav a {
    text-decoration: none;
    color: #fff;
    font-size: 12px;
  }
  .nav a:active {
    background-color: #0e3f0f;
  }
`;
