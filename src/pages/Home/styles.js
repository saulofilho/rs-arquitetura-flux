import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  li {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      width: 100%;
      max-width: 250px;
    }

    > strong {
      font-size: 14px;
      line-height: 20px;
      color: black;
      margin-top: 5px;
    }

    > span {
      font-size: 20px;
      font-weight: bold;
      margin-top: 5px;
      margin-bottom: 15px;
    }

    button {
      background: darkcyan;
      color: white;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, 'darkcyan')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
