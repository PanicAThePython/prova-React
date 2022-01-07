import toNumber from './auxFunctions';

let data = [];
let sons = [];
let dads = [];
let inputs;

// localStorage.removeItem("data");
// localStorage.removeItem("sons");
// localStorage.removeItem("dads");

export function getSons() {
  let sons = [];
  return sons;
}
export function getDads() {
  let dads = [];
  return dads;
}

function settingState(type, items) {
  for (let i = 0; i < items.length; i++) {
    const id = items[i];
    if (type === 'sons') {
      inputs[id].checked = true;
    } else {
      inputs[id].indeterminate = true;
    }
  }
}

function validatingData() {
  data = data.split(',');
  if (data[0] === ',') {
    data.slice(0, 1000);
  }
  localStorage.setItem('data', data);
}

function validatingInputStates(type, string) {
  const info = type.split(',');
  let items = toNumber(info);

  if (items[0] < 0) {
    items = items.splice(0, 1);
  }
  if (items[0] >= 0) {
    settingState(string, items);
  }
}

export function isLocalStorageEmpty(local) {
  if (localStorage.getItem(local) !== null) {
    inputs = document.getElementsByTagName('input');
    if (local === 'data') {
      data = localStorage.getItem(local);
      validatingData();
    } else if (local === 'sons') {
      sons = localStorage.getItem(local);
      validatingInputStates(sons, local);
    } else if (local === 'dads') {
      dads = localStorage.getItem(local);
      validatingInputStates(dads, local);
    }
  }
}
