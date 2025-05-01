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

let instance1 = [];
let instance2 = [];
let instance3 = [];

let actualinstance1 = ["V0030U", "U62E", "SVN7226", "SAWDT", "S0DAK2", "MK4D", "M06489", "L776416", "KV1450", "HS6SAR", "GUPYS", "FL5679", "FL5616", "FL343", "EB513U", "DV2WV", "D5815AW", "CYXUAA", "CHX7699", "CFE6556", "C726416", "BMS1327", "AKILI", "9HJR575", "93BUV", "9122F", "8PVC523", "8BTJ", "815JE", "7FLM8", "754UDT", "738BRM", "6C2541U", "5679", "491BLU", "438982D", "339W59", "325BVE", "2THW61U", "2CVE745", "2CUB734", "2CTS108", "2CRZ302", "2CRG513", "2CPC415", "2CN371P", "2CMS906", "2CMG778", "2CME82P", "2CH220P", "2CGH768", "2CDY2P", "2CDV84P", "2CDF07P", "2CCH157", "290BSB", "2324E", "2192", "20C271U", "2075537", "1GS825", "1GA495U", "1G9482U", "1G5097U", "1D2288ZD", "1AZZ98U", "1AZZ980", "1AZEK6U", "1AZ435T", "1AXWX5U", "1AWSK8U", "1AWII2U", "1AUX45U", "1AUI79U", "1ATZZ1U", "1ATW16U", "1ATEA0U", "1ASX33U", "1ASUM8U", "1ASUD7U", "1ARL05U", "1APLZ1U", "1AMF35R", "1ALKN1U", "1ALAG2U", "1AKPW6U", "1AK089V", "1AJH04U", "1AHDX7U", "1AGS825", "1AFMA8U", "1AEFS6U", "1ACVK7U", "1ACGE8U", "1ACGC1U", "1ACG54T", "1ABZ14U", "1ABH98T", "1A967EF", "1A860DF", "1A802JS", "1A754FK", "1A687LX", "1A5K597", "1A4378D", "1A405GN", "1A358CP", "1A353CP", "1A334HB", "1A329HC", "1A1330G", "1A058GA", "1A003KK", "12CMG778", "11ATW16U", "1047UBH", "02PL4E", "02G92D", "02FEYE", "02F1FD", "02CZ1E", "01D6BR", "007993", "006BAF", "005LKG"];
let actualinstance2 = ["Z16UWX", "YJ9832", "V995T", "V61062", "UNR34L", "TCJ2545", "T3ZD", "T0YHLR", "RIBAR", "PF61W1", "N222948", "MXU367", "MK4D", "MAULE", "M15498", "KAT670", "JD0799ZC", "G1625", "FN143", "FL6116", "FL6068", "FL5895", "FL5616", "FL4420", "FL4302", "FL3473", "EE409U", "CYGNSX1", "CLV3755", "CHEH00", "BR4BBIT", "BMS1327", "BLTZBRG", "BI1127", "BANSAED", "AWS2475", "9MNJ174", "9BVU834", "815JE", "68ED", "647NUU", "4BJ352U", "465UCY", "3PGF66", "374BWS", "3562QJ", "2THW61U", "2CXL77P", "2CVN560", "2CTS108", "2CTG37P", "2CSN656", "2CSH772", "2CS887T", "2CRL914", "2CPY396", "2CNB96P", "2CMM428", "2CFS82P", "2CDF07P", "2CCME1P", "2CCH157", "2C1790R", "274UDB", "20I4E", "20B386U", "2067515", "205251U", "201IZ", "1PB512U", "1GA495U", "1BU6098", "1BD8094", "1AZY236", "1AZ435T", "1AYIZ2U", "1AUX45U", "1ASUM8U", "1ASUD7U", "1AR411T", "1APV176", "1AP781U", "1AP645T", "1AMEB9U", "1AKPW6U", "1AK719U", "1AHVN5U", "1AHDX7U", "1AFV53U", "1AFLS4U", "1AFES6U", "1AF319V", "1ADA89T", "1ACVK7U", "1ACJ68T", "1ACG04T", "1ACC16T", "1ABCU4U", "1AAW38T", "1AAB10T", "1A9999L", "1A842JA", "1A7974D", "1A792DZ", "1A773", "1A73", "1A713MC", "1A6569F", "1A542NP", "1A5370", "1A4917L", "1A479JC", "1A399FS", "1A366DN", "1A349FU", "1A329HC", "1A3231F", "1A321LH", "1A317CG", "1A2833X", "1A1Z858", "1A1849L", "1A153LV", "1A0487Z", "1A047DX", "1A011KF", "1A002JK", "198BSP", "17BRX", "14917L", "06PEF", "047UBH", "02PL4E", "02D5LD", "02CZ1E", "0263ZE", "02421E", "01D6BR", "018987", "007993", "006PEF"];
let actualinstance3 = ["THEWEY", "T0YHLR", "SCHMIDT", "RYFUAA", "ND4247AY", "MUS1RUN", "MKL419", "M0EKI8", "LUSTK", "LNZ906", "L0DB", "KX2484", "KBK2509", "KAZ050", "KAC720", "HA1DY", "GETREKD", "FSV986", "FN143", "FL5616", "FL5201", "FL2707", "FL10156", "FL08778", "EE409U", "EC075U", "E157088", "E155041", "E1291U", "DWM176", "DV354", "DNZ906", "CYXUAA", "CLN04", "CHEH00", "CCX2146", "CARPMAN", "C56732G", "BMS1327", "BEEK1ND", "BANSAED", "AWS2475", "ACG54T", "A92UAB", "9S6D", "979BKD", "93BUV", "9271V", "9122F", "8L6UAA", "844BVG", "821CD", "7NDE723", "7C8236D", "744BPK", "740UBE", "6B4799U", "8B29975", "67BRX", "625UEB", "61BSV", "580BUE", "534BWF", "5323S", "50HV8", "509BVE", "4BK3146", "4968N", "468BWE", "3471699", "36421", "357MAG", "334BSB", "315CD", "2TFX91U", "2TEM14U", "2TAZ239", "2CWI64P", "2CVL451", "2CUZ718", "2CTZ127", "2CTT643", "2CTS108", "2CTG37P", "2CSY008", "2CSN656", "2CRL914", "2CPZ12P", "2CPY396", "2CNV162", "2CME829", "2CHW140", "2CH220P", "2CFT994", "2CEHW3P", "2CCME1P", "2CBH07P", "2CAH39P", "2867U", "264BWP", "2288ZD", "211AD", "205881U", "1J7UAB", "1G8604U", "1G4576U", "1BU6098", "1AZY236", "1AZJABU", "1AZJA8U", "1AZCB1U", "1AZ435T", "1AYN68U", "1AY840T", "1AXL70U", "1AWPA1U", "1AWL44U", "1AUS357", "1AUH53U", "1AUH530", "1AUFG9U", "1AU820T", "1ATZ400", "1ATEP3U", "1ATD578", "1ASR831", "1ASLA3U", "1AS505T", "1ART56U", "1ARS39U", "1AREL8U", "1ARCA9U", "1APZG8U", "1AP645T", "1ANL40U", "1ALTJ9U", "1ALN811", "1ALIR7U", "1AKX90U", "1AK388U", "1AK232U", "1AHVN5U", "1AHIX1U", "1AH939V", "1AGSF1U", "1AGJS6U", "1AGA96U", "1AFY61U", "1AFV53U", "1AFMA8U", "1AFLS4U", "1AFAT1U", "1AF319V", "1AF152U", "1AEFS6U", "1AEBL4U", "1AD836V", "1ACJ68T", "1ACG54T", "1ACE760", "1ABM64U", "1ABCU4U", "1AAW38T", "1AA344V", "1A965NF", "1A9019V", "1A8498J", "1A7974D", "1A758FF", "1A7339V", "1A6J106", "1A622MK", "1A6105D", "1A5907Z", "1A5233F", "1A4968N", "1A479JC", "1A471LK", "1A4378D", "1A430GS", "1A3G421", "1A323NS", "1A3231F", "1A2S451", "1A286KX", "1A277NJ", "1A2657X", "1A243ZZ", "1A193ML", "1A1913V", "1A153LV", "1A1441Z", "1A0850W", "1A0738K", "1A058GA", "1A047DX", "1A025GX", "1A003KN", "18F693", "1723BTK", "143231F", "0L2UAB", "0HSIT", "0629ADA", "02LNPE", "02FHCD", "02E9DD", "02E6KD", "02D5LD", "02CZ1E", "02CRDD", "028X2D", "02421E", "023240", "022F2D", "022F20", "01HHDR", "01D6BR", "019EUR", "0073UF", "005887"];
let onlyAllThree = ["FL5616", "BMS1327", "2CTS108", "1AZ435T", "02CZ1E", "01D6BR"];

add1.addEventListener("click", (e) => {
    if(input1.value) {
        instance1.push(input1.value);
        input1.value = "";
    }
});
add2.addEventListener("click", (e) => {
    if(input2.value) {
        instance2.push(input2.value);
        input2.value = "";
    }
});
add3.addEventListener("click", (e) => {
    if(input3.value) {
        instance3.push(input3.value);
        input3.value = "";
    }
});
//Adds items to the internal log for each instance

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
    instance1.pop();
});
rem2.addEventListener("click", (e) => {
    instance2.pop();
});
rem3.addEventListener("click", (e) => {
    instance3.pop();
});
//Removes most recent item from that instance

let potentialMatches = [];
let matches = [];
function checkmatches() {
    potentialMatches = [];
    matches = [];
    instance1.forEach(function(instance1Item) {
        for(let itemCounter = 0; itemCounter < instance2.length; itemCounter++) {
            if(instance1Item.toUpperCase() == instance2[itemCounter].toUpperCase()) {
                potentialMatches.push(instance1Item);
            }
        }
    });
    //compares instance1 to instance2

    potentialMatches.forEach(function(potentialItem) {
        for(let itemCounter = 0; itemCounter < instance3.length; itemCounter++) {
            if(potentialItem.toUpperCase() == instance3[itemCounter].toUpperCase()) {
                matches.push(potentialItem);
            }
        }
    });
    //compares results from previous comparison to instance3

    let matchesListed = "";
    for(let itemCounter = 0; itemCounter < matches.length; itemCounter++ ) {
        matchesListed += `${matches[itemCounter]}, `;
    }
    resultsList.textContent = matchesListed.slice(0, -2);
    //Compiles results in a viewable manner, trims the excess punctuation
};
//Filters only the items that were present in all three instances.

resultsBtn.addEventListener("click", (e) => {
    resultsList.textContent = "";
    checkmatches();
});