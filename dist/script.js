"use strict";
const breakLengthContainer = document.querySelector('[data-role="break-length"]');
const sessionLengthContainer = document.querySelector('[data-role="session-length"]');
const clockElement = document.querySelector('[data-role="clock"]');
const breakPlusSign = document.querySelector('[data-action="increase-break"]');
const breakNumber = document.querySelector('[data-value="break-time"]');
const breakMinusSign = document.querySelector('[data-action="decrease-break"]');
const sessionPlusSign = document.querySelector('[data-action="increase-session"]');
const sessionNumber = document.querySelector('[data-value="session-time"]');
const sessionMinusSign = document.querySelector('[data-action="decrease-session"]');
const clockContainer = document.querySelector('[data-role="clock"]');
const clockTime = document.querySelector('[data-time="clock"]');
const minutesContainer = document.querySelector('[data-minutes]');
const secondsContainer = document.querySelector('[data-seconds]');
//user should be able to increase session length of decrease it (from 1 to 25)
//when they click start time should pass in reverse
class TimeMannager {
    constructor(breakMinutes, sessionMinutes) {
        this.breakMinutes = breakMinutes;
        this.sessionMinutes = sessionMinutes;
    }
    increaseSessionTime() {
        this.sessionMinutes++;
    }
    increaseBreakTime() {
        this.breakMinutes++;
    }
    decreaseSessionTime() {
        this.sessionMinutes--;
    }
    decreaseBreakTime() {
        this.breakMinutes--;
    }
}
;
const timeMannager = new TimeMannager(5, 25);
let interval;
breakPlusSign === null || breakPlusSign === void 0 ? void 0 : breakPlusSign.addEventListener('click', () => {
    if (timeMannager.breakMinutes < 5) {
        timeMannager.increaseBreakTime();
    }
    else {
        return;
    }
    if (breakNumber) {
        breakNumber.textContent = String(timeMannager.breakMinutes);
    }
});
sessionPlusSign === null || sessionPlusSign === void 0 ? void 0 : sessionPlusSign.addEventListener('click', () => {
    if (timeMannager.sessionMinutes < 25) {
        timeMannager.increaseSessionTime();
    }
    else {
        return;
    }
    if (sessionNumber) {
        sessionNumber.textContent = String(timeMannager.sessionMinutes);
    }
});
breakMinusSign === null || breakMinusSign === void 0 ? void 0 : breakMinusSign.addEventListener('click', () => {
    if (timeMannager.breakMinutes > 0) {
        console.log('i work');
        timeMannager.decreaseBreakTime();
    }
    else {
        return;
    }
    if (breakNumber) {
        breakNumber.textContent = String(timeMannager.breakMinutes);
    }
});
sessionMinusSign === null || sessionMinusSign === void 0 ? void 0 : sessionMinusSign.addEventListener('click', () => {
    if (timeMannager.sessionMinutes > 0) {
        timeMannager.decreaseSessionTime();
    }
    else {
        return;
    }
    if (sessionNumber) {
        sessionNumber.textContent = String(timeMannager.sessionMinutes);
    }
});
function countTime() {
    let seconds = 60;
    return () => {
        if (seconds === 0) {
            timeMannager.decreaseSessionTime();
            seconds = 60;
        }
        ;
        if (minutesContainer) {
            minutesContainer.textContent = `${String(timeMannager.sessionMinutes)}:`;
        }
        ;
        if (secondsContainer) {
            seconds--;
            secondsContainer.textContent = String(seconds);
        }
        ;
        if (timeMannager.sessionMinutes === 0 && seconds === 0) {
            clearInterval(interval);
        }
        ;
    };
}
function startTimer() {
    //it should grab session length and run decrease length method untill it reacher 0 in every second 
    timeMannager.decreaseSessionTime();
    const countTimeFun = countTime();
    interval = setInterval(countTimeFun, 1000);
}
;
clockContainer === null || clockContainer === void 0 ? void 0 : clockContainer.addEventListener('click', startTimer);
