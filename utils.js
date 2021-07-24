const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const filteredSearch = (arr, person) => {
  let res = [];
  for(let i = 0; i < arr.length; i++){
    if (arr[i].person === person){
      res.push(arr[i].quote);
    }
  }

  return res;
}

module.exports = {
  getRandomElement,
  filteredSearch
};
