const bubbleSort = (arr: number[]) => {
  const array = [...arr];
  const comparisions = [];
  const swaps = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      comparisions.push([j, j + 1]);
      if (array[j] > array[j + 1]) {
        swaps.push([j, j + 1]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

export default bubbleSort;
