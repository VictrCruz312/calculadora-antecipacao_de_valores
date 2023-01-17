import styled from "styled-components";

export const InputStyled = styled.div`
  input {
    padding: 6px 10px;
    width: 100%;
    font-size: 17px;
    border-radius: 3px;
    border: 0.5px solid #818181;
    font-weight: 700;

    :focus {
      border: 0.5px solid #006ac0;
      outline: 0.5px solid #006ac0;
    }
  }

  span {
    font-size: 11px;
    color: red;
  }
`;
