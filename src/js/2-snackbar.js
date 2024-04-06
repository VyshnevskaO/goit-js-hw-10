import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector(".form");
form.addEventListener("submit", onBtnSubmit);


function onBtnSubmit(event) {
    event.preventDefault();

    const ms = event.currentTarget.elements.delay.value;
    const stateStatus = event.currentTarget.elements.state.value;

    const promise = new Promise((resolve, reject) => {
       
        if (stateStatus === "fulfilled") {
            resolve(`✅ Fulfilled promise in ${ms} ms`);
        } else {
            reject(`❌ Rejected promise in ${ms} ms`);
        }
    })

   
    promise
        .then(data => {
            setTimeout(() => {
                iziToast.show({ message: `${data}`, backgroundColor: '#59a10d', messageColor: '#fff' });
            }, ms)
        })
        .catch(data => {
            setTimeout(() => {
                iziToast.show({ message: `${data}`, backgroundColor: ' #ef4040', messageColor: '#fff' });
            }, ms)
        });

}
