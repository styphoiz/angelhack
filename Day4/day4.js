//Manually removed 335 bicause of the highest difference.
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
