function getQuickSortAnimations(arr) {
  const animations = [];
  quickSort(arr, 0, arr.length - 1, animations);
  return animations;
}

function partition(arr, low, high, animations) {
  let pivot = arr[high],
    left = low,
    right = high - 1;
  while (left <= right) {
    animations.push([left, high, true]);
    animations.push([right, high, true]);
    if (arr[left] > pivot && arr[right] < pivot) {
      animations.push([left, arr[right]]);
      animations.push([right, arr[left]]);
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      animations.push([left, high, false]);
      animations.push([right, high, false]);
    } else if (arr[left] <= pivot) {
      animations.push([left, high, false]);
      animations.push([right, high, false]);
      left++;
    } else if (arr[right] >= pivot) {
      animations.push([left, high, false]);
      animations.push([right, high, false]);
      right--;
    }
  }
  animations.push([right + 1, high, true]);
  animations.push([high, arr[right + 1]]);
  animations.push([right + 1, pivot]);
  animations.push([right + 1, high, false]);
  arr[high] = arr[right + 1];
  arr[right + 1] = pivot;
  return right + 1;
}
function quickSort(arr, low, high, animations) {
  if (low < high) {
    let p = partition(arr, low, high, animations);
    quickSort(arr, low, p - 1, animations);
    quickSort(arr, p + 1, high, animations);
  }
}

export default getQuickSortAnimations