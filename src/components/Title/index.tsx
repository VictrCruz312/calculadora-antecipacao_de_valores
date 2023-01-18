import React from "react";
import { IPropsChildren } from "../Description";

import { StyledTitle } from "./style";

const Title: React.FC<IPropsChildren> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
