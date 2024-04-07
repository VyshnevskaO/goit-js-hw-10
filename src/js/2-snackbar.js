import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector(".form");
form.addEventListener("submit", onBtnSubmit);


function onBtnSubmit(event) {
    event.preventDefault();

    const ms = event.currentTarget.elements.delay.value;
    const stateStatus = event.currentTarget.elements.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => { 
        if (stateStatus === "fulfilled") {
            resolve(ms);
        } else {
            reject(ms);
        }
    }, ms)
    })

   
    promise
        .then(ms => {
                iziToast.show({ message: `✅ Fulfilled promise in ${ms} ms`, backgroundColor: '#59a10d', messageColor: '#fff' });
            }
        )
        .catch(ms => {
                iziToast.show({ message: `❌ Rejected promise in ${ms} ms`, backgroundColor: ' #ef4040', messageColor: '#fff' });
            }
        );

}
