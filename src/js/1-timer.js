import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"

const startBtn = document.querySelector(".timer-btn");
const dateInput = document.querySelector("#datetime-picker");
const display = document.querySelectorAll(".value");
const transformedDisplay = [...display];

  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


startBtn.addEventListener("click", onStartClick);


let userSelectedDate;
let msSelected;
let dateObj = {};
let delta;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            startBtn.disabled = true;
            alert("Please choose a date in the future");
           
        } else {
            startBtn.disabled = false;
            userSelectedDate = selectedDates[0];
            msSelected = userSelectedDate.getTime();
      }
  },
}; 

flatpickr(dateInput, options); 



function convertMs(ms) {
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  dateObj = { days, hours, minutes, seconds };
    
}

// function addLeadingZero({ days, hours, minutes, seconds }) {
//     const date = new Date();
//     dateObj.daysLeft = date.getDate() - days;
//     dateObj.hoursLeft = date.getHours() - hours;
//     dateObj.minutesLeft = date.getMinutes() - minutes;
//     dateObj.secondsLeft = date.getSeconds() - seconds;
//      dateObj = { daysLeft, hoursLeft, minutesLeft, secondsLeft };
// }



function onStartClick() {

     setInterval(() => {
        
            const date = new Date();
            const dataMs = date.getTime();
            delta = Math.abs(dataMs - msSelected);
            
        convertMs(delta);
        // addLeadingZero(dateObj)
        display[0].textContent = `${dateObj.days}`;
        display[1].textContent = `${dateObj.hours}`;
        display[2].textContent = `${dateObj.minutes}`;
        display[3].textContent = `${dateObj.seconds}`;
    }, 1000)

}

