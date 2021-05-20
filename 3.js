//Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15];
for (i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
        console.log(arr[i]);
        break;
    }
}
