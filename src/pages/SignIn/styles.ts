import styled from 'styled-components';
import { shade } from 'polished';
import backgroundimage from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 148px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;
      text-decoration: none;
      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }

    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      width: 100%;
      color: 312e38;
      padding: 0 16px;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }
  }

  > a {
    color: #ff9900;
    display: block;
    margin-top: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    svg {
      margin-right: 16px;
    }
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#FF9900')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundimage}) no-repeat center;
  background-size: cover;
`;
