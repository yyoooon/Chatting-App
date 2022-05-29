import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ChattingListType } from '@/types';
import { ChattingListHeader, ChattingList } from '@/components';
import {
  getChattingList,
  setInitialChattingList,
  removeNoReadCount,
} from '@/api/apis';

const ChattingListPage = (): JSX.Element => {
  const [chattingList, setChattingList] = useState<ChattingListType[]>([]);
  useEffect(() => {
    let data = getChattingList();
    const haveSavedData = data.length;

    if (!haveSavedData) {
      setInitialChattingList();
      data = getChattingList();
    }

    setChattingList(data);
  }, []);

  const handleClickChattingItem = (roomId: string) => {
    removeNoReadCount(roomId);
  };

  return (
    <Container>
      <ChattingListHeader></ChattingListHeader>
      <ChattingList
        data={chattingList}
        onClick={handleClickChattingItem}
      ></ChattingList>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default ChattingListPage;
