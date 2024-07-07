const breakLengthContainer = document.querySelector<HTMLDivElement>('[data-role="break-length"]');
const sessionLengthContainer = document.querySelector<HTMLDivElement>('[data-role="session-length"]');
const clockElement = document.querySelector<HTMLDivElement>('[data-role="clock"]');
const breakPlusSign = document.querySelector<HTMLSpanElement>('[data-action="increase-break"]');
const breakNumber = document.querySelector<HTMLDivElement>('[data-value="break-time"]');
const breakMinusSign = document.querySelector<HTMLSpanElement>('[data-action="decrease-break"]');
const sessionPlusSign = document.querySelector<HTMLSpanElement>('[data-action="increase-session"]');
const sessionNumber = document.querySelector<HTMLDivElement>('[data-value="session-time"]');
const sessionMinusSign = document.querySelector<HTMLSpanElement>('[data-action="decrease-session"]');
const clockContainer = document.querySelector<HTMLDivElement>('[data-role="clock"]')
const clockTime = document.querySelector<HTMLHeadingElement>('[data-time="clock"]');
const minutesContainer = document.querySelector<HTMLSpanElement>('[data-minutes]');
const secondsContainer = document.querySelector<HTMLSpanElement>('[data-seconds]');
const switchButton = document.querySelector<HTMLButtonElement>('[data-switchButton]');
const modePlaceHolder = document.querySelector<HTMLSpanElement>('[data-mode]');
const pauseButton = document.querySelector<HTMLButtonElement>('[data-pause]');
let mode:string = "session";
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
const timeMannager: TimeMannager = new TimeMannager(5, 25);
let interval:number;
breakPlusSign?.addEventListener('click', (): void => {
    if (timeMannager.breakMinutes < 5) {
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
});
function switchMode():void{
    //create global variable which will either hold break mode or session  mode 
    mode = mode === 'session' ? 'break':'session';
    if(modePlaceHolder){
        modePlaceHolder.textContent = mode;
    }
    timeMannager.sessionMinutes = Number(breakNumber?.textContent); 
    timeMannager.breakMinutes = Number(breakNumber?.textContent);
}
function countTime():()=>void {
    let seconds: number = 0;
    return ():void=>{
        if (seconds === 0) {
            mode === 'session' ? timeMannager.decreaseSessionTime() : timeMannager.decreaseBreakTime();
            seconds = 60;
        };
        if (minutesContainer) {
            minutesContainer.textContent = mode === 'session'? `${String(timeMannager.sessionMinutes)}:`: `${String(timeMannager.breakMinutes)}:`;
        };
        if (secondsContainer) {
            seconds--;
            secondsContainer.textContent = String(seconds)
        };
        if ((timeMannager.sessionMinutes === 0 || timeMannager.breakMinutes === 0) && seconds === 0) {
            clearInterval(interval);
            switchMode();
        };
    }
};
const countTimeFun = countTime();
function startTimer(): void {
    interval = setInterval(countTimeFun,1000);
};
pauseButton?.addEventListener('click',()=>{
    clearInterval(interval);
})
switchButton?.addEventListener('click', startTimer);