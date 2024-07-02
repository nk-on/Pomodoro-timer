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
const clockTime = document.querySelector('[data-time="clock"]');
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
}
;
const timeMannager = new TimeMannager(0, 25);
breakPlusSign === null || breakPlusSign === void 0 ? void 0 : breakPlusSign.addEventListener('click', () => {
    timeMannager.increaseBreakTime();
    if (breakNumber) {
        breakNumber.textContent = String(timeMannager.breakMinutes);
    }
});
sessionPlusSign === null || sessionPlusSign === void 0 ? void 0 : sessionPlusSign.addEventListener('click', () => {
    timeMannager.increaseSessionTime();
    if (sessionNumber) {
        sessionNumber.textContent = String(timeMannager.sessionMinutes);
    }
});
