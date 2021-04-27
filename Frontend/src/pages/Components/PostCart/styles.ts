import styled, { css } from 'styled-components';


export const Cart = styled.div`
  margin: 37px 0 0 30px;
  background-color: #dcdcdc;
  border-radius: 10px;

  @media (max-width: 600px) {
    margin: 37px 0 0 0;
    width: 400px;
  }

  > div {
    display: flex;
    place-items: center;
    padding: 8px 16px;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  div:nth-child(2) {
    display: block;
    max-width: 600px
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: visible;


    a {
      color: #000;
      text-decoration: none;
    }
  }
`;
