import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChattingListPage, ChattingRoomPage } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ChattingListPage></ChattingListPage>} />
      <Route path="/list" element={<ChattingListPage></ChattingListPage>} />
      <Route
        path="/room/:roomId"
        element={<ChattingRoomPage></ChattingRoomPage>}
      />
    </Routes>
  );
};

export default Router;
