import { MONTH } from "./constants";

export const delay = (time) =>
  new Promise((resolve, reject) => setTimeout(() => resolve("Success"), time));

export const changeDateToDueDate = (date) => {
  const [year, month, day] = date.split(".");
  return `${MONTH[Number(month)]} ${day}, ${year}`;
};

export const selectColor = () => {
  const colorCodes = [
    "#bfd4f2",
    "#d73a4a",
    "#a2eeef",
    "#7057ff",
    "#148672",
    "#e4e669",
  ];
  const randomNumber = Math.floor(Math.random() * colorCodes.length);
  return colorCodes[randomNumber];
};
