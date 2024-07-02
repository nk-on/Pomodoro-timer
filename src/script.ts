const breakLengthContainer = document.querySelector<HTMLDivElement>('[data-role="break-length"]');
const sessionLengthContainer = document.querySelector<HTMLDivElement>('[data-role="session-length"]');
const clockElement = document.querySelector<HTMLDivElement>('[data-role="clock"]');
const breakPlusSign = breakLengthContainer?.querySelector<HTMLSpanElement>('[data-action="increase-break"]');
const breakNumber = breakLengthContainer?.querySelector<HTMLDivElement>('[data-value="break-time"]');
const breakMinusSign = breakLengthContainer?.querySelector<HTMLSpanElement>('[data-action="decrease-break"]');
const sessionPlusSign = sessionLengthContainer?.querySelector<HTMLSpanElement>('[data-action="increase-session"]');
const sessionNumber = sessionLengthContainer?.querySelector<HTMLDivElement>('[data-value="session-time"]');
const sessionMinusSign = sessionLengthContainer?.querySelector<HTMLSpanElement>('[data-action="decrease-session"]');
const clockTime = clockElement?.querySelector<HTMLHeadingElement>('[data-time="clock"]');
//user should be able to increase session length of decrease it (from 1 to 25)
//when they click start time should pass in reverse
class TimeMannager {
    breakMinutes: number;
    sessionMinutes: number;
    constructor(breakMinutes: number, sessionMinutes: number) {
        this.breakMinutes = breakMinutes;
        this.sessionMinutes = sessionMinutes;
    }
    increaseSessionTime(){
        this.breakMinutes++;
    }
    increaseBreakTime(){
        this.breakMinutes++;
    }
};
const timeMannager:TimeMannager = new TimeMannager(0,0);
breakPlusSign?.addEventListener('click',(): void =>{
    timeMannager.increaseBreakTime();
    if(breakNumber){
        breakNumber.textContent = String(timeMannager.breakMinutes)
    }
});
