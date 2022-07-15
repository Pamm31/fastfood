import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-shrink: 1;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  height: 40px;
  padding: 0 2rem;
  background: #135c14;
  color: #fff;

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90px;
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
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 16em;
    margin-right: 1rem;
  }
  .navBar a {
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    padding: 5px;
  }
  .navBar button {
    display: none;
  }
  .ativo {
    background-color: #0e3f0f;
    border-radius: 5px;
  }
  @media only screen and (max-device-width: 600px) {
    .logo {
      margin-left: 0;
    }
    .navBar {
      position: relative;
    }
    .navBar button {
      display: initial;
      position: absolute;
      right: 30px;
      top: 0;
      background: none;
      border: none;
      color: #fff;
      line-height: 1px;
      font-weight: bold;
      z-index: 10;
      cursor: pointer;
    }
    .menuNav {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: scroll;
      list-style: none;
      position: fixed;
      margin: 0;
      top: 0;
      background: #135c14;
      right: 0;
      bottom: 0;
      height: 100vh;
      width: 0;
      overflow: hidden;
      max-width: 290px;
      z-index: 9;
    }

    .menuNav.showMenu {
      width: 50%;
    }

    li {
      display: block;
      padding: 10px 40px;
      text-decoration: none;
      color: #3fffd2;
      text-transform: uppercase;
      font-weight: bold;
    }

    .menuNav li:first-child {
      margin-top: 7rem;
    }
  }
`;
