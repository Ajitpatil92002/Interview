/* 
Quick Sort

Pivot element =  last element of array

Put everything that's smaller than the pivot into a left array and everything that's greater than the pivot into a right array

Repeate the process for the individual left and right arrays till you have an array of length 1 which is sorted by definition

Repeatedly concatenate the left array,pivot and right array till one sorted array remains

*/

function QuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

console.log(QuickSort([29, 10, 14, 37, 14]));
/*
Best and Average Case: O(nlogn)
Worst Case: O(n^2 ) when already sorted

[29, 10, 14, 37, 14]

29 10 14 37 -  14
10 14 - 14 - 29 37

10 - 14 - 14 - 29 - 37
10 14 24 29 37

*/
