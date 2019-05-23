// 1.
/*
[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
[21, 1, 26, 45, 29, 28, 2, 9,]  ||  [16, 49, 39, 27, 43, 34, 46, 40]
[21, 1, 26, 45]  || [ 29, 28, 2, 9]  ||||  [16, 49, 39, 27]  ||  [43, 34, 46, 40]
[21, 1] || [26, 45] || [29, 28] || [2, 9] |||| [16, 49] || [39, 27] || [43, 34] || [46, 40]

a. [21, 1]
b. []
c. [1, 21], [26, 45]
d. [21, 1, 26, 45, 29, 28, 2, 9,], [16, 49, 39, 27, 43, 34, 46, 40]
 */

// 2.
/*
Quick Sort after one partition:
3 9 1 14 17 24 22 20

a. False. It could have been 14 or 17.
b. Both answers are truthy. Either 14 or 17 could have been pivots
c. False, both 14 and 17 are valid answers
d. False, etc...

Quick Sorting twice:
14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
10, 3, 9, 12, 13,      14, 15, 16, 19, 17 

a. 
1st partition: 10, 3, 9, 12, 14, 17, 13, 15, 19
2nd partition: 3, 9, 10, 12, 14, 17, 13, 15, 19

b.
1st partition: 13, 10, 3, 9, 12, 14, 15, 16, 19, 17 
2nd partition: 3, 9, 10, 12, 13, 14, 15, 16, 19, 17

 */

// 3.
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

const quickSort = require('./QuickSort');

const arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24];
//console.log(quickSort(arr));

// 4.
const merge = require('./MergeSort');
//console.log(merge(arr));

// 5.
/*
[89, 30, 25, 32, 72, 70, 51, 42, 25, 24]
[24, 89] [30, 25, 32, 72, 70, 51, 42, 25]
[24, 89] [25, 72] 

input: array, highest num, lowest num
output: sorted array

 */

function bucketSort(arr, min, max) {
  let buckets = [];
  let sortedOutput = [];
  for (let i = min - 1; i < max; i++) {
    buckets.push( [] );
  }
  //console.log(buckets);

  for (let i in arr) {
    buckets[arr[i] - min].push(arr[i]);
  }
  //console.log(buckets);
  for (let i in buckets) {
    for (let j in buckets[i]) {
      if (buckets[i]) {
        sortedOutput.push(buckets[i][j]);
      }
    }
  }
  return sortedOutput;
}

// function bucketSort(arr, min, max) {

//   const array = [];
//   let i = 0;
//   let j = arr.length - 1;
  
//   while (i < j) {
//     console.log('while 1');
//     while (arr[j] > arr[i]) {
//       console.log('while 2');
//       i++;
//       j--;
//     }
//     if (arr[i] > arr[j]) {
//       swap(arr, i, j);
//     }
//     j--;
//     i++;
//   }
//   return arr;
// }

console.log(bucketSort(arr, 24, 89));

// 6.
