const arr1 = [1, 3, 4, 2, 7, 9, 10, 6, 8];

const arr2 = [1, 3, 9, 11, 5, 7, 13];
const arr = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
    if (!arr.includes(arr1[i])) {
      arr.push(arr1[i]);
    }
  }
}

console.log(arr);
