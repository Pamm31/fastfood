import styled from 'styled-components';

export const Container = styled.div`
  .products {
    width: 200px;
    height: 220px;
    margin: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    transition: all-ease transform 0.5s;
  }
  .products img {
    margin-top: 3rem;
  }
  .products h5 {
    margin-bottom: 3rem;
  }
  .products:hover {
    -webkit-animation: shadow-drop-center 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: shadow-drop-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
