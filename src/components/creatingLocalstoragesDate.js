
import { SWEETS_DATA } from "../service/data"
import { FOODS_DATA } from "../service/data"
import { DRINK_DATA } from "../service/data"



export default function LocalStoragesDates() {
  if (localStorage.getItem('SWEETS_DATA_loc') === null) {
    localStorage.setItem('SWEETS_DATA_loc', JSON.stringify(SWEETS_DATA));
  }

  if (localStorage.getItem('FOODS_DATA_loc') === null) {
    localStorage.setItem('FOODS_DATA_loc', JSON.stringify(FOODS_DATA));
  }

  if (localStorage.getItem('DRINK_DATA_loc') === null) {
    localStorage.setItem('DRINK_DATA_loc', JSON.stringify(DRINK_DATA));
  }

  if (localStorage.getItem('usersArray') === null) {
    localStorage.setItem('usersArray', JSON.stringify([]));
  }

  if (localStorage.getItem('rezervStatus') === null) {
    localStorage.setItem('rezervStatus', 'notRezerved');
  }

  if (localStorage.getItem('loginStatus') === null) {
    localStorage.setItem('loginStatus', 'tologin');
  }

  if (localStorage.getItem('rezervStatus1') === null) {
    localStorage.setItem('rezervStatus1', 'notRezerved');
  }

  if (localStorage.getItem('rezervStatus2') === null) {
    localStorage.setItem('rezervStatus2', 'notRezerved');
  }

  if (localStorage.getItem('rezervStatus3') === null) {
    localStorage.setItem('rezervStatus3', 'notRezerved');
  }

  if (localStorage.getItem('rezervStatus4') === null) {
    localStorage.setItem('rezervStatus4', 'notRezerved');
  }

  return '';
}