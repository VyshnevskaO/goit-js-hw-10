import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Number of milliseconds per unit of time
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const startBtn = document.querySelector(".timer-btn");
const dateInput = document.querySelector("#datetime-picker");
const display = document.querySelectorAll(".value");

let userSelectedDate;
let msSelected;
let dateObj = {};
let delta;
let intervalID;

startBtn.addEventListener("click", onStartClick);
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
          startBtn.disabled = true;
          iziToast.show({ message:'Please choose a date in the future'});
        } else {
          startBtn.disabled = false;
            userSelectedDate = selectedDates[0];
            msSelected = userSelectedDate.getTime();
      }
  },
}

flatpickr(dateInput, options); 

function addLeadingZero({ days, hours, minutes, seconds }) {

  days = days.toString().padStart(2, "0");
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
    
  return dateObj = { days, hours, minutes, seconds };
}

function convertMs(ms) {
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return dateObj = { days, hours, minutes, seconds };
  
}

function onStartClick() {

  intervalID = setInterval(() => {
    
    const date = new Date();
    const dataMs = date.getTime();
    delta = Math.abs(dataMs - msSelected);

    if ((dataMs - msSelected)> 0) {
      clearInterval(intervalID);
      return
    } else {
      startBtn.disabled = true;
      dateInput.disabled = true;
      convertMs(delta);
      addLeadingZero(dateObj);

      display[0].textContent = `${dateObj.days}`;
      display[1].textContent = `${dateObj.hours}`;
      display[2].textContent = `${dateObj.minutes}`;
      display[3].textContent = `${dateObj.seconds}`;
    }
  }, 1000);

}

