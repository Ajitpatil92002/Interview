/* 
Implement Bubble Sort in JavaScript
Write a function to sort the given array nums in acending order.

Input : nums = [29,10,14,37,14] ------->>>> output: [10,14,14,29,37]
*/

/* 
Solution : 

- compare adjacent elements in the array and swap the positions if they are not in the intended order
- repeat the instruction as you step through each element in the array
- Once you step through the whole array with no swaps,the array is sorted

*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([29, 10, 14, 37, 14]));

//  Time complexity = O(n)

function bubbleSortDoWhile(arr) {
  let n = arr.length;
  let isSwapped = false;

  do {
    isSwapped = false;
    for (let i = 0; i < n; i++) {
      console.log(i, arr);
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSwapped = true;
      }
    }

    // Reduce n after each pass because the last element is now sorted
    n--;
  } while (isSwapped);
  return arr;
}

console.log(bubbleSortDoWhile([29, 10, 14, 37, 14]));

// time complexity of O(n^2)

/* 

1st iteration
swaped = false
29 10 14 37 14
swaped = true
10 29 14 37 14
swaped = true
10 14 29 37 14
swaped = true
10 14 29 37 14
swaped = true
10 14 29 14 37
swaped = true

2nd iteration
swaped = false
10 14 29 14 37
swaped = true
10 14 14 29 37

3rd iteration
swaped = false
10 14 14 29 37
*/
