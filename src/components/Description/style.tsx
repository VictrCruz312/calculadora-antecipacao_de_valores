import styled from "styled-components";

interface IPropsStyling {
  colorText?: string;
  fontSize?: string;
}

export const StyledDescription = styled.p<IPropsStyling>`
  color: ${({ colorText }) => (colorText ? colorText : "var(--GreyText)")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};

  margin-top: 15px;
`;
