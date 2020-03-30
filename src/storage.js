export const updateStorage = (value, index) => {
  const answers = getStorage();
  answers[index] = value;
  setStorage(answers);
};

export const setStorage = answers => {
  localStorage.setItem("braidData", JSON.stringify(answers));
};

export const getStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("braidData"));
  } catch (e) {}
};
