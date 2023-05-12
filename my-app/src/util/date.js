export const getDate = (inputDate) => {
  inputDate = new Date(inputDate);
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth() + 1;
  const date = inputDate.getDate();
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();
  const seconds = inputDate.getSeconds();
  return `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`;
};
