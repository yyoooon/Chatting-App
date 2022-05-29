const formateDateRemoveYear = (dateString: string) => {
  return dateString.slice(6);
};

interface OptionType {
  noYear: boolean;
}

const formatDate = (
  timeStamp: number,
  option: OptionType = { noYear: false },
) => {
  const formatedValue = new Intl.DateTimeFormat('ko', {
    dateStyle: 'long',
  }).format(new Date(timeStamp));
  return option?.noYear ? formateDateRemoveYear(formatedValue) : formatedValue;
};
// '2022년 3월 8일'

export default formatDate;
