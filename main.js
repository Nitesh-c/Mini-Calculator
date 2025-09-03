"use strict"
let inputBox = document.querySelector("#input-display");
let storedNums = "";
function displayNum(nums){
    inputBox.value+=nums;
    if(nums !== "clear" && nums !== "="){
        storedNums += nums; 
    }
    if(nums === "clear"){
        storedNums = "";
        inputBox.value = ""
        
    }
    if(nums === "="){
        inputBox.value = eval(storedNums)
    }
}