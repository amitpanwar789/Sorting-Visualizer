function getBubbleSortAnimations(arr) {
  const animations = [];
  bubbleSort(arr, arr.length, animations);
  return animations
}

function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function bubbleSort(arr, n, animations) {
  var i, j;
  for (i = 0; i < n - 1; i++) {
    console.log(32);
    for (j = 0; j < n - i - 1; j++) {
      animations.push([j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        animations.push([j, arr[j + 1]]);
        animations.push([j + 1, arr[j]]);
        swap(arr, j, j + 1);
      } else {
        animations.push([j, arr[j]]);
        animations.push([j + 1, arr[j + 1]]);
      }
      animations.push([j, j + 1]);
    }
  }
}
export  default getBubbleSortAnimations;
