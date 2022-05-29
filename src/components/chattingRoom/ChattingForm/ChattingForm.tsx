import React, { useState } from 'react';
import styled from '@emotion/styled';
import { sendIcon } from '@/assets';
import { darken } from 'polished';

interface ChattingFormPropsType {
  onSubmit: (data: { type: string; content: string }) => void;
}

const ChattingForm = ({
  onSubmit,
  ...props
}: ChattingFormPropsType): JSX.Element => {
  const [message, setMessage] = useState({
    type: 'text',
    content: '',
  });

  const submitContent = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.content === '') return;

    onSubmit && onSubmit(message);
    setMessage({
      type: 'text',
      content: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target instanceof HTMLTextAreaElement) {
      const trimmedText = e.target.value.trim();
      setMessage({ ...message, content: trimmedText });
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.key === 'Enter' && e.shiftKey) return;
    if (e.key === 'Enter') {
      submitContent(e);
    }
  };
  return (
    <Form {...props}>
      <TextArea
        id="content"
        name="content"
        placeholder="메세지를 입력해주세요"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={message.content}
      />
      <SubmitButton onClick={submitContent}>
        <img src={sendIcon}></img>
      </SubmitButton>
    </Form>
  );
};

export default ChattingForm;

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  margin-bottom: 1.25rem;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 3.125rem;
  padding: 1rem;
  border-radius: 25px;
  margin-right: 0.75rem;
  box-shadow: ${({ theme }) => `0 2px 4px 0 ${theme.color.black_10}`};
  background-color: #fff;
`;
const SubmitButton = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.maincolor};
  transition: background-color 250ms ease-out;
  &:active,
  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.color.maincolor)};
  }
`;
