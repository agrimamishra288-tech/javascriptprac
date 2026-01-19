// let obj = {
//     name: "agrima",
//     phone: 1234567890,
//     address: "india"
// }
// let obj2 = {
//     name: "agrim",
//     phone: 1234567890,
//     address: "india"
// }
// 
// const button = document.querySelector('button');
// button.classList.add('btn');
// function message()
// {
//     alert("u have clicked the button")

// }
// button.addEventListener('click',message);
// button.removeEventListener('click',message);
// button.addEventListener('click',message);
//     alert("stop button clicked")
// button.addEventListener('click',message);


const handleSubmit = (event) => (
    event.preventDefault()
    console.log("Form submitted")
)
const Form=document.querySelector('form');
Form.addEventListener('submit',handleSubmit);