const prompt = require("prompt-sync")();

// search the larget number is a array

let arr = [1, 4, 12, 56, 45, 78, 3];
let num;

for(let i=0 ; i<arr.length;i++){
    for(let j=0 ; j<arr.length;j++){
        if(arr[i]<arr[j]){
            num = arr[j];
        }
    }
}

console.log('largest num ' + num);