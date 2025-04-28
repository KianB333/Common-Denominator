const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const add1 = document.querySelector(".add1");
const add2 = document.querySelector(".add2");
const add3 = document.querySelector(".add3");

const rem1 = document.querySelector(".remove1");
const rem2 = document.querySelector(".remove2");
const rem3 = document.querySelector(".remove3");

const resultsBtn = document.querySelector(".results-btn");
const resultsList = document.querySelector(".results-list");

let day1 = [];
let day2 = [];
let day3 = [];


add1.addEventListener("click", (e) => {
    if(input1.value) {
        day1.push(input1.value);
        input1.value = "";
        console.log(day1);
    }
})
add2.addEventListener("click", (e) => {
    if(input2.value) {
        day2.push(input2.value);
        input2.value = "";
        console.log(day2);
    }
})
add3.addEventListener("click", (e) => {
    if(input3.value) {
        day3.push(input3.value);
        input3.value = "";
        console.log(day3);
    }
})
//Adds plate#s to the internal log for each day

const wholePage = document.querySelector("html");
wholePage.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        switch(document.activeElement) {
            case input1:
                add1.click();
                break;

            case input2:
                add2.click();
                break;

            case input3:
                add3.click();
                break;

            default:
                console.log("None of the inputs were selected when you hit enter");
        }
    }
})
//Simulates clicking the add button if a day input is focused

rem1.addEventListener("click", (e) => {
    day1.pop();
});

rem2.addEventListener("click", (e) => {
    day2.pop();
});

rem3.addEventListener("click", (e) => {
    day3.pop();
});
//Removes most recent plate# from that day