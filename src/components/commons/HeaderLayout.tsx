import React from 'react';
import styled from '@emotion/styled';

export interface HeaderPropsType {
  children: React.ReactNode[];
}

const HeaderLayout = ({ children, ...props }: HeaderPropsType): JSX.Element => {
  return <HeaderTag {...props}>{children}</HeaderTag>;
};

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.75rem;
  padding: 0.5rem 0.75rem;
  background-color: ${({ theme }) => theme.color.maincolor};
`;

export default HeaderLayout;
