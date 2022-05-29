import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

interface MessagePropsType {
  user: string;
  type: string;
  content: string;
  time: string | null;
}

const Message = ({
  user,
  content,
  time,
  type,
  ...props
}: MessagePropsType): JSX.Element => {
  return (
    <Container user={user} {...props}>
      <Content user={user}>
        <span>{content}</span>
      </Content>
      <Time visible={time}>{time}</Time>
    </Container>
  );
};

export default Message;

const smoothAppearMessage = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(7%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div<{ user: string }>`
  display: flex;
  align-self: ${({ user }) => user === 'me' && 'flex-end'};
  flex-direction: ${({ user }) => (user === 'me' ? 'row-reverse' : 'row')};
  align-items: flex-end;
  margin-bottom: 0.625rem;
  max-width: 70%;
  min-width: 30%;
  margin-right: 0;
  animation: ${smoothAppearMessage} 400ms ease-out 0s 1 normal forwards;
`;

const receiveContentStyle = css`
  margin-right: 0.25rem;
  background-color: #fff;
`;

const sendContentStyle = css`
  margin-left: 0.25rem;
  background-color: #5b36ac;
`;

const Content = styled.div<{ user: string }>`
  padding: 0.75rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => `0 2px 4px 0 ${theme.color.black_10}`};
  ${({ user }) => (user === 'me' ? sendContentStyle : receiveContentStyle)};

  span {
    ${({ theme }) => theme.font.text_style_2}
    color: ${({ user }) => user === 'me' && '#fff'};
  }
`;

const Time = styled.span<{ visible: string | null }>`
  flex-shrink: 0;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  ${({ theme }) => theme.font.text_style_small};
`;
