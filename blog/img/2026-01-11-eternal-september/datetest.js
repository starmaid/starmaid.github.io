// THIS IS STUPID

let MILLIS_IN_DAY = 24 * 60 * 60 * 1000;
let BEGINNING = new Date(1993, 8, 0);

let startDate;
let delta;
let newDate;
let parsed
let parsedY;
let parsedM;
let parsedD;
let days;

const sdateEntry = document.querySelector('#sdatedays');
const sdateBtn = document.querySelector('#sdate2date');
const sdateMsg = document.querySelector('#sdateMsgBox');

const dateYear = document.querySelector('#dateyear');
const dateMonth = document.querySelector('#datemonth');
const dateDay = document.querySelector('#dateday');
const dateBtn = document.querySelector('#date2sdate');
const dateMsg = document.querySelector('#dateMsgBox');

function setNormalDateBox(thedate) {
    dateYear.value = thedate.getFullYear().toString();
    dateMonth.value = (thedate.getMonth() + 1).toString();
    dateDay.value = thedate.getDate().toString();
}

function clearerr() {
    sdateMsg.textContent = "";
    dateMsg.textContent = "";
}

setNormalDateBox(new Date());
sdateEntry.value = date2sdate(new Date());


sdateBtn.addEventListener('click', async ev => {
    ev.preventDefault();
    //console.log(sdateEntry.value);
    parsed = Number(sdateEntry.value);
    if (isNaN(parsed) || parsed < 31) {
        sdateMsg.textContent = "Are you stupid?";
        return;
    }

    delta = new Date(parsed * MILLIS_IN_DAY);
    //console.log(delta);

    newDate = new Date(BEGINNING.getTime() + delta.getTime());
    //console.log(newDate);

    setNormalDateBox(newDate);
    clearerr();
})

function date2sdate(indate) {
    delta = indate.getTime() - BEGINNING.getTime();
    return (Math.ceil(delta / MILLIS_IN_DAY));
}


dateBtn.addEventListener('click', async ev => {
    ev.preventDefault();

    parsedY = Number(dateYear.value);
    parsedM = Number(dateMonth.value) - 1;
    parsedD = Number(dateDay.value);

    if (isNaN(parsedY + parsedM + parsedD)) {
        dateMsg.textContent = "Are you stupid?";
        return;
    }

    startDate = new Date(parsedY, parsedM, parsedD);

    if (startDate.getTime() < BEGINNING.getTime()) {
        dateMsg.textContent = "Are you stupid?";
        return;
    } else {
        dateMsg.textContent = "";
    }

    sdateEntry.value = date2sdate(startDate);
    clearerr();
})


// make hitting enter click the button
sdateEntry.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sdateBtn.click();
    }
});

dateday.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        dateBtn.click();
    }
});


