import React from 'react';
import styled from '@emotion/styled';
import { Message, ImageMessage, DateLine } from '@/components';
import { ChattingMessageType } from '@/types';
import { formatTime, formatDate } from '@/utils';
import { useScrollToBottom } from '@/hooks';

interface ChattingContainerProps {
  messages: ChattingMessageType[];
}

const ChattingContainer = ({
  messages,
  ...props
}: ChattingContainerProps): JSX.Element => {
  const ref = useScrollToBottom([messages]);

  return (
    <Container ref={ref} {...props}>
      {messages?.map(({ id, user, content, type, createdAt }, index) => {
        let nextMessageCreatedAt = 0;
        let viewDateLine = false;
        let viewTime = true;

        // 다음 메세지가 있는 경우, 생성 시간을 구해서 이전 메세지와 시간/날짜를 비교한다
        if (messages[index + 1]) {
          nextMessageCreatedAt = messages[index + 1].createdAt;

          const isChangeDate =
            formatDate(createdAt) !== formatDate(nextMessageCreatedAt);
          if (isChangeDate) {
            viewDateLine = true;
          }

          const isSameMinute =
            formatTime(createdAt) === formatTime(nextMessageCreatedAt);
          if (isSameMinute) {
            viewTime = false;
          }
        }
        return (
          <Wrap key={id}>
            {type === 'image' ? (
              <ImageMessage
                user={user}
                type={type}
                content={content}
                time={viewTime ? formatTime(createdAt) : null}
              ></ImageMessage>
            ) : (
              <Message
                user={user}
                type={type}
                content={content}
                time={viewTime ? formatTime(createdAt) : null}
              ></Message>
            )}
            {viewDateLine && (
              <DateLine date={formatDate(nextMessageCreatedAt)}></DateLine>
            )}
          </Wrap>
        );
      })}
    </Container>
  );
};

export default ChattingContainer;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 1.25rem 1rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
