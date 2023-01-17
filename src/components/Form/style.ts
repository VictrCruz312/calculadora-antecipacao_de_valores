import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  button {
    align-self: center;
    margin-top: 10px;

    border: 1.5px solid #0030b4;
    box-shadow: -1px 1.5px 4px blue;
    background: #007ee6;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;

    border-radius: 3px;
    font-size: 17px;
    transition: 0.5s;

    :hover {
      background: #0030b4;
      border: 1.5px solid #007ee6;
    }
  }

  .spanForm {
    font-size: 11px;
    color: #919191;
  }
`;
