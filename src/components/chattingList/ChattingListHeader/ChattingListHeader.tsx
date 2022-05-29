import React from 'react';
import styled from '@emotion/styled';
import { userIcon, menuIcon } from '@/assets';
import { HeaderLayout, Icon } from '@/components';

const ChattingListHeader = (): JSX.Element => {
  return (
    <HeaderLayout>
      <Icon src={menuIcon} alt="menu icon" />
      <Title>채팅</Title>
      <Icon src={userIcon} alt="user icon" />
    </HeaderLayout>
  );
};

const Title = styled.h1`
  width: 1.875rem;
  height: 1.25rem;
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

export default ChattingListHeader;
