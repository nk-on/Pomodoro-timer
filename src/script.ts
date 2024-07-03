const breakLengthContainer = document.querySelector<HTMLDivElement>('[data-role="break-length"]');
const sessionLengthContainer = document.querySelector<HTMLDivElement>('[data-role="session-length"]');
const clockElement = document.querySelector<HTMLDivElement>('[data-role="clock"]');
const breakPlusSign = document.querySelector<HTMLSpanElement>('[data-action="increase-break"]');
const breakNumber = document.querySelector<HTMLDivElement>('[data-value="break-time"]');
const breakMinusSign = document.querySelector<HTMLSpanElement>('[data-action="decrease-break"]');
const sessionPlusSign = document.querySelector<HTMLSpanElement>('[data-action="increase-session"]');
const sessionNumber = document.querySelector<HTMLDivElement>('[data-value="session-time"]');
const sessionMinusSign = document.querySelector<HTMLSpanElement>('[data-action="decrease-session"]');
const clockTime = document.querySelector<HTMLHeadingElement>('[data-time="clock"]');
//user should be able to increase session length of decrease it (from 1 to 25)
//when they click start time should pass in reverse
class TimeMannager {
    breakMinutes: number;
    sessionMinutes: number;
    constructor(breakMinutes: number, sessionMinutes: number) {
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
};
const timeMannager: TimeMannager = new TimeMannager(0, 25);
breakPlusSign?.addEventListener('click', (): void => {
    if (timeMannager.breakMinutes > 5) {
        timeMannager.increaseBreakTime();
    } else {
        return;
    }
    if (breakNumber) {
        breakNumber.textContent = String(timeMannager.breakMinutes);
    }
});
sessionPlusSign?.addEventListener('click', (): void => {
    if (timeMannager.sessionMinutes < 25) {
        timeMannager.increaseSessionTime();
    } else {
        return;
    }
    if (sessionNumber) {
        sessionNumber.textContent = String(timeMannager.sessionMinutes);
    }
})
breakMinusSign?.addEventListener('click', () => {
    if (timeMannager.breakMinutes > 0) {
        timeMannager.decreaseBreakTime();
    } else {
        return;
    }
    timeMannager.decreaseBreakTime();
    if (breakNumber) {
        breakNumber.textContent = String(timeMannager.breakMinutes);
    }
});
sessionMinusSign?.addEventListener('click', () => {
    if (timeMannager.sessionMinutes > 0) {
        timeMannager.decreaseSessionTime();
    } else {
        return;
    }
    if (sessionNumber) {
        sessionNumber.textContent = String(timeMannager.sessionMinutes);
    }
})