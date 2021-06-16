export const saveState = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    alert("Please, activate local storage!");
  }
};


export const loadState = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    alert("Please, activate local storage!");
  }
};

// console.log(loadState('SWEETS_DATA_loc'));
// console.log(loadState('FOODS_DATA_loc'));
// console.log(loadState('DRINK_DATA_loc'));




