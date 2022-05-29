export interface ChattingListType {
  id: string;
  user: string;
  lastMessageContent: string;
  createdAt: number;
  updatedAt: number;
  noReadMessageLength: number;
}

export interface ChattingRoomType {
  chattingRoomId: string;
  targetUser: string;
  messages: ChattingMessageType[];
}

export interface ChattingMessageType {
  id: string;
  user: string;
  content: string;
  type: string;
  createdAt: number;
  updatedAt: number;
}
