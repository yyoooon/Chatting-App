import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import {
  ChattingRoomHeader,
  ChattingContainer,
  ChattingForm,
} from '@/components';
import {
  setInitialChattingRoom,
  getChattingRoom,
  postChatting,
} from '@/api/apis';
import { ChattingMessageType } from '@/types/chatting';

const ChattingRoomPage = (): JSX.Element => {
  const { roomId } = useParams();
  const [title, setTitle] = useState('');
  const [messages, setMessages] = useState<ChattingMessageType[]>([]);

  useEffect(() => {
    let data = getChattingRoom(roomId);
    const haveSavedData = Object.keys(data).length;

    if (!haveSavedData) {
      setInitialChattingRoom(roomId);
      data = getChattingRoom(roomId);
    }

    setTitle(data.targetUser);
    setMessages(data.messages);
  }, []);

  const handleSubmit = ({
    type,
    content,
  }: {
    type: string;
    content: string;
  }) => {
    const newMessage = {
      id: String(Math.random()),
      user: 'me',
      type: type,
      content: content,
      createdAt: +new Date(),
      updatedAt: +new Date(),
    };

    postChatting({ roomId, newData: newMessage });
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
  };

  const handleClickImage = (url: string) => {
    const newMessage = {
      id: String(Math.random()),
      user: 'me',
      type: 'image',
      content: url,
      createdAt: +new Date(),
      updatedAt: +new Date(),
    };
    postChatting({ roomId, newData: newMessage });
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
  };

  return (
    <Container>
      <ChattingRoomHeader
        userName={title}
        onClickImage={handleClickImage}
      ></ChattingRoomHeader>
      <StyledChattingContainer messages={messages}></StyledChattingContainer>
      <ChattingForm onSubmit={handleSubmit}></ChattingForm>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.pale_grey};
`;

const StyledChattingContainer = styled(ChattingContainer)`
  flex-grow: 1;
`;

export default ChattingRoomPage;
