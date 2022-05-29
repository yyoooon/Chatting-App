import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

interface ImageMessagePropsType {
  user: string;
  type: string;
  content: string;
  time: string | null;
}

const ImageMessage = ({
  user,
  content,
  time,
  type,
  ...props
}: ImageMessagePropsType): JSX.Element => {
  return (
    <Container user={user} {...props}>
      <Content user={user}>
        <img src={content} alt="" />
      </Content>
      <Time visible={time}>{time}</Time>
    </Container>
  );
};

export default ImageMessage;

const loadImage = keyframes`
  0% {
    filter: brightness(50%);
  }
  97% {
    filter: brightness(50%);
  }
  to {
    filter: brightness(100%);
  }
`;

const Container = styled.div<{ user: string }>`
  position: relative;
  display: flex;
  flex-direction: ${({ user }) => (user === 'me' ? 'row-reverse' : 'row')};
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 0.625rem;
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
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => `0 2px 4px 0 ${theme.color.black_10}`};
  ${({ user }) => (user === 'me' ? sendContentStyle : receiveContentStyle)};

  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${loadImage} 0.8s ease-out 0s 1 normal forwards;
  }
`;

const Time = styled.span<{ visible: string | null }>`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  ${({ theme }) => theme.font.text_style_small}
`;
