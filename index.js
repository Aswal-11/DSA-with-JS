// search the particular number in a array

const prompt = require("prompt-sync")();

let arr = [1, 4, 12, 56, 45, 78, 3];

let value = prompt("Enter the value you want to find in array: ");
console.log("value: "+value);

for( let i=0; i<arr.length;i++){
    if(arr[i]==value){
        console.log("value present at the "+ i+" index");
        return;// when we found the value it break the code from here and below code wont execute
    }
}

console.log('value not found');
