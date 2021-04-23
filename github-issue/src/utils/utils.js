export const delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, time);
  });
};

export const selectColor = () => {
  const colorCodes = ["#d73a4a", "#a2eeef", "#7057ff", "#148672", "#e4e669"];
  const randomNumber = Math.floor(Math.random() * colorCodes.length);
  return colorCode[randomNumber];
};
