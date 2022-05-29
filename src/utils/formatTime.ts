const formatTime = (timeStamp: number) => {
  return new Intl.DateTimeFormat('ko', { timeStyle: 'short' }).format(
    new Date(timeStamp),
  );
};
// '오후 10:58'

export default formatTime;
