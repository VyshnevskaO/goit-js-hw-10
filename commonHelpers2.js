import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const i=document.querySelector(".form");i.addEventListener("submit",a);function a(o){o.preventDefault();const t=o.currentTarget.elements.delay.value,r=o.currentTarget.elements.state.value;new Promise((e,m)=>{r==="fulfilled"?e(`✅ Fulfilled promise in ${t} ms`):m(`❌ Rejected promise in ${t} ms`)}).then(e=>{setTimeout(()=>{s.show({message:`${e}`,backgroundColor:"#59a10d",messageColor:"#fff"})},t)}).catch(e=>{setTimeout(()=>{s.show({message:`${e}`,backgroundColor:" #ef4040",messageColor:"#fff"})},t)})}
//# sourceMappingURL=commonHelpers2.js.map
