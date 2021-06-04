export const saveState = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    alert("Please, activate local storage!");
  }
};

export const loadState = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    alert("Please, activate local storage!");
  }
};

export const SWEETS_DATA_FROM_LOCAL_STORAGE = JSON.parse(localStorage.getItem('SWEETS_DATA_loc'));
export const FOODS_DATA_FROM_LOCAL_STORAGE = JSON.parse(localStorage.getItem('FOODS_DATA_loc'));
export const DRINKS_DATA_FROM_LOCAL_STORAGE = JSON.parse(localStorage.getItem('DRINK_DATA_loc'));


console.log(SWEETS_DATA_FROM_LOCAL_STORAGE, "SWEETS_DATA_FROM_LOCAL_STORAGE:::");

export const DATA = { SWEETS_DATA_FROM_LOCAL_STORAGE, FOODS_DATA_FROM_LOCAL_STORAGE, DRINKS_DATA_FROM_LOCAL_STORAGE};

// the second version 
export const DATA_FROM_LOCAL_STORAGE = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    alert("Please, activate local storage!");
  }
};