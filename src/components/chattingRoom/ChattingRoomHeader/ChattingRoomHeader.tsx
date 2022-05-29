import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { backIcon, uploadIcon, searchIcon } from '@/assets';
import { HeaderLayout, Icon, ImageList } from '@/components';
import { useToggle } from '@/hooks';

interface ChattingRoomHeaderPropsType {
  userName: string;
  onClickImage: (url: string) => void;
}

const ChattingRoomHeader = ({
  userName,
  onClickImage,
}: ChattingRoomHeaderPropsType): JSX.Element => {
  const navigate = useNavigate();
  const [state, toggle] = useToggle(false);

  const handleClickBackIcon = () => {
    navigate(`/list`);
  };

  const handleClickImage = (url: string) => {
    onClickImage && onClickImage(url);
  };

  const handleClickUploadIcon = () => {
    toggle();
  };

  return (
    <>
      <HeaderLayout>
        <Icon src={backIcon} alt="back icon" onClick={handleClickBackIcon} />
        <Title>{userName}</Title>
        <UtilContainer>
          <Icon
            src={uploadIcon}
            alt="upload icon"
            onClick={handleClickUploadIcon}
          />
          <Icon src={searchIcon} alt="search icon" />
        </UtilContainer>
      </HeaderLayout>
      <ImageList onClick={handleClickImage} isOpen={state}></ImageList>
    </>
  );
};

export default ChattingRoomHeader;

const Title = styled.h1`
  height: 1.25rem;
  margin-left: 2.3rem;
  font-family: AppleSDGothicNeo;
  font-size: 1.063rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.12px;
  text-align: center;
  color: #fff;
`;

const UtilContainer = styled.div`
  display: flex;
  div:first-of-type {
    margin-right: 1.063rem;
  }
`;
