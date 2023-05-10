//Manually removed 335 because of the highest difference between it's neighbors.
let arr = [1, 3, 54, 712, 52, 904, 113, 12, 135, 32, 31, 56, 23, 79, 611, 123, 677, 232, 997, 101, 111,
123, 2, 7, 24, 57, 99, 45, 666, 42, 104, 129, 554, 876, 35, 15, 93, 13]

arr.sort((a,b) => a-b)
console.log(arr)
let sum = 0
for (let i=0;i<arr.length-1;i=i+2){
    sum += arr[i+1]-arr[i]
    console.log("Difference",arr[i],arr[i+1]-arr[i], sum)
}

console.log(sum)
const arr = [1, 3, 54, 712, 52, 904, 113, 12, 135, 32, 31, 56, 23, 79, 611, 123, 677, 232, 997, 101, 111, 123, 2, 7, 24, 57, 99, 45, 666, 42, 104, 129, 554, 335, 876, 35, 15, 93, 13];
const sortedArr = [...arr];  // Copy the array to avoid modifying the original

sortedArr.sort((a, b) => a - b);  // Sort the array in ascending order

const newArray = [];
for (let i = 0; i < sortedArr.length; i++) {
  const currentValue = sortedArr[i];
  const filteredArray = sortedArr.filter((value, index) => index !== i);
  newArray.push(filteredArray);
}

//console.log(newArray);
let sumArr = []
newArray.forEach((arr)=> {
let sum = 0
for (let i=0;i<arr.length-1;i=i+2){
    sum += arr[i+1]-arr[i]
    //console.log("Difference",arr[i],arr[i+1]-arr[i], sum)
}
sumArr.push(sum)
})
console.log(sumArr.sort((a,b) => a-b))
