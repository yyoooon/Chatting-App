import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { ChattingListType } from '@/types';
import { formatTime, formatDate } from '@/utils';
import { profileImages } from '@/assets';

interface ChattingListPropsType {
  data: ChattingListType[];
  onClick: (roomId: string) => void;
}

const ChattingList = ({
  data,
  onClick,
}: ChattingListPropsType): JSX.Element => {
  const navigate = useNavigate();
  const todayTimeStemp = +new Date();

  const handleClickChattingItem = (roomId: string) => {
    navigate(`/room/${roomId}`);
    onClick && onClick(roomId);
  };
  return (
    <ChattingListTag>
      {data.map(
        ({ id, user, lastMessageContent, updatedAt, noReadMessageLength }) => {
          const isImage = lastMessageContent.slice(-3) === 'png';
          const isSameDay =
            formatDate(todayTimeStemp) === formatDate(updatedAt);
          return (
            <ChattingItem
              key={id}
              onClick={() => {
                handleClickChattingItem(id);
              }}
              className=".openAnimation"
            >
              <ProfileImage>
                <img src={profileImages[Number(id)]} alt="프로필 이미지"></img>
              </ProfileImage>
              <Content>
                <h1>{user}</h1>
                <span>{isImage ? '사진' : lastMessageContent}</span>
              </Content>
              <Infor>
                <Time>
                  {isSameDay
                    ? formatTime(updatedAt)
                    : formatDate(updatedAt, { noYear: true })}
                </Time>
                <MessageLength visible={noReadMessageLength}>
                  <span>{noReadMessageLength}</span>
                </MessageLength>
              </Infor>
            </ChattingItem>
          );
        },
      )}
    </ChattingListTag>
  );
};

const smoothAppearContent = keyframes`
  from {
    opacity: 5;
    transform: translateX(-7%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const smoothAppearProfile = keyframes`
  0% {
    opacity: 5;
    transform: translateX(-20%);
  }
  30% {
    opacity: 5;
    transform: translateX(-20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ChattingListTag = styled.ul`
  display: flex;
  flex-direction: column;
`;
const ChattingItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 4.625rem;
  padding: 0.563rem 1rem;
  margin: 0.625rem 0 0;
  background-color: #fff;
  transition: background-color 250ms ease-out;
  cursor: pointer;
  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.color.pale_lilac};
  }
`;

const ProfileImage = styled.div`
  flex-shrink: 0;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 0.938rem 0 0;
  border-radius: 28px;
  background-color: #d8d8d8;
  animation: ${smoothAppearProfile} 400ms ease-out 0s 1 normal forwards;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  animation: ${smoothAppearContent} 400ms ease-out 0s 1 normal forwards;
  cursor: pointer;
  h1 {
    margin-bottom: 0.188rem;
    ${({ theme }) => theme.font.text_style_3}
  }
  span {
    font-size: 0.813rem;
    font-weight: 500;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.color.cool_grey};
    ${({ theme }) => theme.mixin.two_line_ellipsis}
  }
`;

const Infor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  animation: ${smoothAppearContent} 350ms ease-in-out 0s 1 normal forwards;
`;

const Time = styled.span`
  width: 3.5rem;
  opacity: 0.4;
  font-size: 0.688rem;
  font-weight: 500;
  text-align: right;
  color: #363a42;
  margin-bottom: 0.375rem;
`;

const MessageLength = styled.strong<{ visible: number }>`
  display: flex;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  justify-content: center;
  align-items: center;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 10.5px;
  background-color: #5b36ac;
  span {
    font-family: AppleSDGothicNeo;
    font-size: 0.625rem;
    font-weight: bold;
    line-height: normal;
    letter-spacing: -0.08px;
    text-align: center;
    color: #fff;
  }
`;

export default ChattingList;
