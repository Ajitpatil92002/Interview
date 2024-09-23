/*
merge sort
 
- divide the array into sub array, each containing only one element (An array with one element is considered sorted)
- repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. Thar will be the sorted array.
*/

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] >= rightArr[0]) {
      sortedArr.push(rightArr.shift());
    } else {
      sortedArr.push(leftArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort([29, 10, 14, 37, 14]));
/*
Time Complexity: Best, Average, and Worst Case:  O(nlogn) 
Merge Sort consistently has a time complexity of  O(nlogn) due to its divide-and-conquer nature. 
Space Complexity: O(n): 
Merge Sort requires additional space proportional to the size of the input array for the merging process.

*/
