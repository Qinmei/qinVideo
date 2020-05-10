import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { hexToRgb } from "../../utils/util";
import { ColorContext } from "../Context";

const Wrapper = styled.div`
  background-color: ${props => props.color};
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    background-color: ${props => hexToRgb(props.color, 0.8)};
  }
`;

const reactComponent = props => {
  const { onChange } = props;
  const value = useContext(ColorContext);
  const color = useMemo(() => value, [value]);
  return (
    <Wrapper color={color} onClick={onChange}>
      {props.children}
    </Wrapper>
  );
};

export default reactComponent;
