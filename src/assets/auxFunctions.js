function toNumber(array) {
    const items = array;
    for (let i = 0; i < items.length; i ++) {
      const teste = parseInt(items[i], 10);
      items[i] = teste;
    }
    return items;
  }
  
  export default toNumber;
  