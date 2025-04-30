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
let resultsList = document.querySelector(".results-list");

let day1 = ["1A 56646", "2C 54664", "3G 53442"];
let day2 = ["1A 55371", "2C 55466", "3g 53442"];
let day3 = ["1A 86995", "2C 88694", "3G 53442"];

let actualDay1 = ["V0030U", "U62E", "SVN7226", "SAWDT", "S0DAK2", "MK4D", "M06489", "L776416", "KV1450", "HS6SAR", "GUPYS", "FL5679", "FL5616", "FL343", "EB513U", "DV2WV", "D5815AW", "CYXUAA", "CHX7699", "CFE6556", "C726416", "BMS1327", "AKILI", "9HJR575", "93BUV", "9122F", "8PVC523", "8BTJ", "815JE", "7FLM8", "754UDT", "738BRM", "6C2541U", "5679", "491BLU", "438982D", "339W59", "325BVE", "2THW61U", "2CVE745", "2CUB734", "2CTS108", "2CRZ302", "2CRG513", "2CPC415", "2CN371P", "2CMS906", "2CMG778", "2CME82P", "2CH220P", "2CGH768", "2CDY2P", "2CDV84P", "2CDF07P", "2CCH157", "290BSB", "2324E", "2192", "20C271U", "2075537", "1GS825", "1GA495U", "1G9482U", "1G5097U", "1D2288ZD", "1AZZ98U", "1AZZ980", "1AZEK6U", "1AZ435T", "1AXWX5U", "1AWSK8U", "1AWII2U", "1AUX45U", "1AUI79U", "1ATZZ1U", "1ATW16U", "1ATEA0U", "1ASX33U", "1ASUM8U", "1ASUD7U", "1ARL05U", "1APLZ1U", "1AMF35R", "1ALKN1U", "1ALAG2U", "1AKPW6U", "1AK089V", "1AJH04U", "1AHDX7U", "1AGS825", "1AFMA8U", "1AEFS6U", "1ACVK7U", "1ACGE8U", "1ACGC1U", "1ACG54T", "1ABZ14U", "1ABH98T", "1A967EF", "1A860DF", "1A802JS", "1A754FK", "1A687LX", "1A5K597", "1A4378D", "1A405GN", "1A358CP", "1A353CP", "1A334HB", "1A329HC", "1A1330G", "1A058GA", "1A003KK", "12CMG778", "11ATW16U", "1047UBH", "02PL4E", "02G92D", "02FEYE", "02F1FD", "02CZ1E", "01D6BR", "007993", "006BAF", "005LKG"];
let actualDay2 = [];
let actualDay3 = [];


/*add1.addEventListener("click", (e) => {
    if(input1.value) {
        day1.push(input1.value);
        input1.value = "";
        console.log(day1);
    }
})*/
resultsList.textContent = "";
add1.addEventListener("click", (e) => {
    if(input1.value) {
        resultsList.textContent += `"${input1.value}", `;
        input1.value = "";        
    }
});
//New add1 to give me an actual list to work with.
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
//Clicks the add button when hitting Enter

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

let partial = [];
let suspects = [];
function checkSuspects() {
    day1.forEach(function(day1Plate) {
        for(let plateCounter = 0; plateCounter < day2.length; plateCounter++) {
            if(day1Plate.toUpperCase() == day2[plateCounter].toUpperCase()) {
                partial.push(day1Plate);
            }
        }
    });

    partial.forEach(function(partialPlate) {
        for(let plateCounter = 0; plateCounter < day3.length; plateCounter++) {
            if(partialPlate.toUpperCase() == day3[plateCounter].toUpperCase()) {
                suspects.push(partialPlate);
            }
        }
    });

    resultsList.textContent = suspects;
};
//Compiles plate#s and filters only those that were there all three days.

resultsBtn.addEventListener("click", (e) => {
    checkSuspects();
})
//Executes plate compilation