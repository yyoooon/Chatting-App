import React from 'react';
import styled from '@emotion/styled';
import { chattingRoomImages } from '@/assets';

interface ImageListPropsType {
  onClick: (url: string) => void;
  isOpen: boolean;
}

const ImageList = ({
  onClick,
  isOpen,
  ...props
}: ImageListPropsType): JSX.Element => {
  const handleClick = (url: string) => {
    onClick(url);
  };
  return (
    <ImageListTag isOpen={isOpen} {...props}>
      {chattingRoomImages.map(url => (
        <ImageContainer
          key={url}
          onClick={() => {
            handleClick(url);
          }}
        >
          <img src={url} alt="사진첩 사진" />
        </ImageContainer>
      ))}
    </ImageListTag>
  );
};

export default ImageList;

const ImageListTag = styled.ul<{ isOpen: boolean }>`
  display: flex;
  max-height: ${({ isOpen }) => (isOpen ? '68px' : '0')};
  padding: ${({ isOpen }) => (isOpen ? '0.688rem 1rem' : '0 1rem')};
  overflow-x: auto;
  background-color: ${({ theme }) => theme.color.maincolor};
  transition: all 0.4s ease;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ImageContainer = styled.li`
  flex-shrink: 0;
  width: 2.875rem;
  height: 2.875rem;
  margin-right: 0.625rem;
  background-color: gray;
  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
