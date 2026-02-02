// function print(name){   // callback function : the function which is passed as an argument to another function
//     console.log("Hello Students!!", name)
// }
//     function greet(num){ // higher order function : the function which takes another function as an argument
//         console.log("Welcome to the class!!")
//         setTimeout(() => {
//             console.log("Inside setTimeout")
//             let firstName="Alex"
//             num(firstName);  // invoking the callback function
//     },2000);
//     greet(print)

    console.log("Starting Homework...");

    setTimeout(() => {
        console.log("Homework Completed");
         console.log("starting dinner...");

    setTimeout(() => {
        console.log("Dinner Completed");
        console.log("getting ready to go out...");

    setTimeout()(() => {
        console.log("Going to the playground!");
    }, 1000); //after dinner

}, 1500); //dinner time 

    },2000);//homework time

function finishHomework(callback) {
    console.log("Starting Homework");
    setTimeout(() => {
        console.log("Homework Completed");
        callback();
    }, 2000);   
}   

function eatDinner(callback) {
    console.log("Starting Dinner");
    setTimeout(() => {
        console.log("Dinner Completed");
        callback();
    }, 1500); 
}
function goToPlayground(){
    console.log("Going to the Playground!");
}
finishHomework(() => {
    eatDinner(() => {
        goToPlayground();
    }); 
});





    const input=document.querySelector("task")
    const btn= document.querySelector(".btn")
    const lists=document.querySelector(".list")

    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        const li= document.createElement('li')
        const deleteButton=document.createElement('button')

        deleteButton.innerText="Delete"
        li.innerText = input.Value
     lists.appendChild(li)
    input.value=""
    })