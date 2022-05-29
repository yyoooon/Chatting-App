import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface DateLinePropsType {
  date: string;
}

const DateLine = ({ date, ...props }: DateLinePropsType): JSX.Element => {
  return (
    <LineBox {...props}>
      <Date>{date}</Date>
    </LineBox>
  );
};

export default DateLine;

const LineStyle = css`
  content: '';
  width: 100%;
  display: block;
  height: 0.063rem;
  background-color: #e6e6eb;
`;

const LineBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  &::before {
    ${LineStyle}
  }
  &::after {
    ${LineStyle}
  }
`;

const Date = styled.span`
  width: 100%;
  text-align: center;
  ${({ theme }) => theme.font.text_style_small}
`;
