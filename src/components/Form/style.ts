import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  button {
    align-self: center;
    margin-top: 10px;
    padding: 5px 10px;

    border: 1.5px solid var(--Blue);
    box-shadow: -1px 1.5px 4px blue;
    background: var(--BlueLight);
    color: var(--White);
    font-weight: bold;
    cursor: pointer;

    border-radius: 3px;
    font-size: 17px;
    transition: 0.5s;

    :hover {
      background: var(--Blue);
      border: 1.5px solid var(--BlueLight);
    }
  }

  .spanForm {
    font-size: 11px;
    color: var(--GreyTextLight);
  }
`;
