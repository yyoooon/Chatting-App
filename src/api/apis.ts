import { getItem, setItem } from '@/utils/localStorage';
import { ChattingMessageType, ChattingListType } from '@/types';
import chattingListData from '@/data/chattingList.json';
import chattingRoomData from '@/data/chattingRoom.json';

// 초기 데이터 세팅
const setInitialChattingList = () => {
  setItem('chatting-list', chattingListData.chattingList);
};

const setInitialChattingRoom = (roomId: string | undefined) => {
  setItem(
    `chatting-room-${roomId}`,
    chattingRoomData.chattingRoomList[Number(roomId)]
  );
};

// 데이터 가져오기
const sortByRecentUpdateTime = (chattingList: ChattingListType[]) => {
  return chattingList.sort(
    (a: ChattingListType, b: ChattingListType) => b.updatedAt - a.updatedAt
  );
};

const getChattingList = () => {
  const chattingList = getItem('chatting-list', []);
  return sortByRecentUpdateTime(chattingList);
};

const getChattingRoom = (roomId: string | undefined) => {
  return getItem(`chatting-room-${roomId}`, {});
};

// 데이터 추가, 삭제하기
const addChattingMessageToStorage = (
  roomId: string,
  newData: ChattingMessageType
) => {
  const chattingRoomData = getChattingRoom(roomId);
  chattingRoomData.messages = [...chattingRoomData.messages, newData];
  setItem(`chatting-room-${roomId}`, chattingRoomData);
};

const upDateChattingListToStorage = (
  roomId: string,
  newData: ChattingMessageType
) => {
  const chattingListData = getChattingList();
  chattingListData.map((chatting, index) => {
    if (roomId === chatting.id) {
      chattingListData[index].lastMessageContent = newData.content;
      chattingListData[index].updatedAt = newData.createdAt;
    }
  });
  setItem('chatting-list', chattingListData);
};

const postChatting = ({
  roomId,
  newData,
}: {
  roomId: string | undefined;
  newData: ChattingMessageType;
}) => {
  if (roomId === undefined) return;
  addChattingMessageToStorage(roomId, newData);
  upDateChattingListToStorage(roomId, newData);
};

const removeNoReadCount = (roomId: string) => {
  const chattingListData = getChattingList();
  chattingListData.map((chatting, index) => {
    if (roomId === chatting.id) {
      chattingListData[index].noReadMessageLength = 0;
    }
  });
  setItem('chatting-list', chattingListData);
};

export {
  setInitialChattingList,
  setInitialChattingRoom,
  getChattingList,
  getChattingRoom,
  postChatting,
  removeNoReadCount,
};
