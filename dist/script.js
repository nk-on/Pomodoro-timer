"use strict";
const breakLengthContainer = document.querySelector('[data-role="break-length"]');
const sessionLengthContainer = document.querySelector('[data-role="session-length"]');
const clockElement = document.querySelector('[data-role="clock"]');
const breakPlusSign = breakLengthContainer === null || breakLengthContainer === void 0 ? void 0 : breakLengthContainer.querySelector('[data-action="increase-break"]');
const breakNumber = breakLengthContainer === null || breakLengthContainer === void 0 ? void 0 : breakLengthContainer.querySelector('[data-value="break-time"]');
const breakMinusSign = breakLengthContainer === null || breakLengthContainer === void 0 ? void 0 : breakLengthContainer.querySelector('[data-action="decrease-break"]');
const sessionPlusSign = sessionLengthContainer === null || sessionLengthContainer === void 0 ? void 0 : sessionLengthContainer.querySelector('[data-action="increase-session"]');
const sessionNumber = sessionLengthContainer === null || sessionLengthContainer === void 0 ? void 0 : sessionLengthContainer.querySelector('[data-value="session-time"]');
const sessionMinusSign = sessionLengthContainer === null || sessionLengthContainer === void 0 ? void 0 : sessionLengthContainer.querySelector('[data-action="decrease-session"]');
const clockTime = clockElement === null || clockElement === void 0 ? void 0 : clockElement.querySelector('[data-time="clock"]');
//user should be able to increase session length of decrease it (from 1 to 25)
//when they click start time should pass in reverse
class TimeMannager {
    constructor(breakMinutes, sessionMinutes) {
        this.breakMinutes = breakMinutes;
        this.sessionMinutes = sessionMinutes;
    }
    increaseSessionTime() {
        this.breakMinutes++;
    }
    increaseBreakTime() {
        this.breakMinutes++;
    }
}
;
const timeMannager = new TimeMannager(0, 0);
breakPlusSign === null || breakPlusSign === void 0 ? void 0 : breakPlusSign.addEventListener('click', () => {
    timeMannager.increaseBreakTime();
    if (breakNumber) {
        breakNumber.textContent = String(timeMannager.breakMinutes);
    }
});
