/* 
Insertion sort :

- virtually split the array into a sorted and an unsorted part
- Assume that the first element is already sorted and remaining elements are unsorted
- Select an unsorted element and compare with all elements in the sorted part
- if the element in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part, Else, shift larger elements in the sorted part towards the right.
- Insert the selected element at the right index
- Repeat till all the unsorted elements are placed in the right order.

*/

function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let NTI = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > NTI) {
      arr[j + 1] = arr[j];
      console.log(NTI, arr);
      j = j - 1;
    }
    arr[j + 1] = NTI;
  }
  return arr;
}

console.log(InsertionSort([29, 10, 14, 37, 14]));
// console.log(InsertionSort([0, 20, -2, 4, -6]));

/* 

Best Case: O(n) when the array is already sorted (minimal shifts). 
Average and Worst Case: 𝑂 ( 𝑛^2 ) when the array is in reverse order.

[29, 10, 14, 37, 14]

29  - 10 14 37 14
NTI = 10 j = 0

29 - 29 14 37 14 j = -1
10 - 29 14 37 14

10 29 - 14 37 14 
NIT = 14 j = 1

10 29 - 29 37 14 j = 0

10 14 - 29 37 14 

10 14 29 - 37 14

NIT = 37 j = 2

NIT = 14 j = 3

10 14 29 37 - 14
10 14 29 37 - 37 j = 2
10 14 29 29 - 37 j = 1
10 14 14 29 - 37

10 14 14 29 37


*/
