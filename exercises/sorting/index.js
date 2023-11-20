// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      const lesser = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
