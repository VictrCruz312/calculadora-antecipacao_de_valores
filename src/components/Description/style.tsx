import styled from "styled-components";

interface IPropsStyling {
  colorText?: string;
  fontSize?: string;
}

export const StyledDescription = styled.p<IPropsStyling>`
  color: ${({ colorText }) => (colorText ? colorText : "#313131")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
`;
