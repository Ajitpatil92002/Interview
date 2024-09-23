function findSecondLargestNumber(arr) {
  const newArr = Array.from(new Set(arr)).sort((a, b) => b - a);
  if (newArr.length >= 2) {
    return newArr[1];
  }
  return -1;
}

function optimisedfindSecondLargestNumber(arr) {
  let largest = -1;
  let secondLargest = -1;
  arr.forEach((value, i) => {
    if (value > largest) {
      secondLargest = largest;
      largest = value;
    } else if (value != largest && value > secondLargest) {
      secondLargest = value;
    }
  });
  return secondLargest;
}

// console.log(findSecondLargestNumber([234, 223, 23, 24, 230]));
// console.log(optimisedfindSecondLargestNumber([234, 223, 23, 24, 230]));

// [1,2,3,4,5] - 2

// [4,5,1,2,3]

function rotateArrByK(arr, k) {
  if (k == 0) {
    return arr;
  }

  if (k > arr.length) {
    k = k % arr.length;
  }
  let rotated = arr.splice(arr.length - k, arr.length);
  arr.unshift(...rotated);
  return arr;
}

function optimisedRotateArrByK(arr, k) {
  if (k == 0) {
    return arr;
  }

  if (k > arr.length) {
    k = k % arr.length;
  }
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
}

function reverse(arr, left, right) {
  while (left < right) {
    let c = arr[right];
    arr[right] = arr[left];
    arr[left] = c;
    left++;
    right--;
  }
}

// console.log(rotateArrByK([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(optimisedRotateArrByK([1, 2, 3, 4, 5, 6, 7], 3));

// [0,0,1,1,1,2,2,3,3,4] ---->>> 5 , [0,1,2,3,4,_,_,_,_]

function removeDuplicatesInPlace(arr) {
  return Array.from(new Set(arr)).length;
}

function removeDuplicatesInPlaceWithoutSet(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(removeDuplicatesInPlace([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 55, 33]));
// console.log(
//   removeDuplicatesInPlaceWithoutSet([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 55, 33])
// );

function maxSubArray(arr) {
  let maxSum = arr[0];

  let si = 0;
  let ei = 0;
  for (let i = 0; i < arr.length; i++) {
    let curSum = 0;
    for (let j = i; j < arr.length; j++) {
      curSum += arr[j];
      if (curSum > maxSum) {
        maxSum = curSum;
        si = i;
        ei = j;
      }
    }
  }
  return [maxSum, arr.slice(si, ei + 1)];
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));

function optimisemaxSubArray(arr) {
  let maxSum = arr[0];
  let curSum = 0;
  let si = 0;
  let ei = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    if (curSum > maxSum) {
      maxSum = curSum;
      ei = i;
    }
    if (curSum < arr[i]) {
      curSum = arr[i];
      si = ei;
      ei = i;
    }
  }
  return [maxSum, arr.slice(si, ei + 1)];
}

console.log(optimisemaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(optimisemaxSubArray([5, 4, -1, 7, 8]));
