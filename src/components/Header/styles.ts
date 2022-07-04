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
    width: 90px;
    margin-left: 10px;
  }
  .logo img {
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 50%;
    padding: 3px;
  }
  .logo h1 {
    font-size: 17px;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 14.5rem;
    margin-right: 30px;
  }
  .nav a {
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
  }
  .nav a:active {
    background-color: #0e3f0f;
  }
`;
