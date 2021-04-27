import styled from 'styled-components';
import { shade } from 'polished';

export const Section = styled.section`
  display: flex;
  background-color: #fff9;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 400px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top : -30px;

  h1 {
    text-align: center;
    margin-bottom: 10px;
  }

  input,
  textarea {
    margin: 5px 2px;
    padding: 10px 24px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
    border: 2px solid black;
  }

  button {
    background-color: #04d361;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    padding: 8px 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
