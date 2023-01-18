import styled from "styled-components";

export const InputStyled = styled.div`
  input {
    padding: 6px 10px;
    width: 100%;
    font-size: 17px;
    border-radius: 3px;
    border: 0.5px solid var(--GreyTextLight);
    font-weight: 700;

    :focus {
      border: 0.5px solid var(--BlueLight);
      outline: 0.5px solid var(--BlueLight);
    }
  }

  span {
    font-size: 11px;
    color: var(--Error);
  }
`;
