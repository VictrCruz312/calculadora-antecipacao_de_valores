import React from "react";

import { StyledDescription } from "./style";

export interface IPropsChildren {
  children: React.ReactNode;
}

interface IpropsDescription extends IPropsChildren {
  colorText?: string;
  fontSize?: string;
}

const Description: React.FC<IpropsDescription> = ({
  children,
  colorText,
  fontSize,
}) => {
  return (
    <StyledDescription colorText={colorText} fontSize={fontSize}>
      {" "}
      {children}{" "}
    </StyledDescription>
  );
};

export default Description;
