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

//     console.log("Starting Homework...");

//     setTimeout(() => {
//         console.log("Homework Completed");
//          console.log("starting dinner...");

//     setTimeout(() => {
//         console.log("Dinner Completed");
//         console.log("getting ready to go out...");

//     setTimeout()(() => {
//         console.log("Going to the playground!");
//     }, 1000); //after dinner

// }, 1500); //dinner time 

//     },2000);//homework time

// function finishHomework(callback) {
//     console.log("Starting Homework");
//     setTimeout(() => {
//         console.log("Homework Completed");
//         callback();
//     }, 2000);   
// }   

// function eatDinner(callback) {
//     console.log("Starting Dinner");
//     setTimeout(() => {
//         console.log("Dinner Completed");
//         callback();
//     }, 1500); 
// }
// function goToPlayground(){
//     console.log("Going to the Playground!");
// }
// finishHomework(() => {
//     eatDinner(() => {
//         goToPlayground();
//     }); 
// });



document.getElementById("btn").addEventListener("click", function() {
    alert("Button Clicked!");
});

let card = document.querySelectorAll(".card");
card.forEach(card => {
console.log(card.textContent)
})

function orderFood(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("food ordered")
            resolve("foodd ordered")
        },1000)
    })
}

function prepareFood(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("food prepared")
            resolve("foodd prepared")
        },1000)
    })
}

function deliverFood(){
return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("food delivered")
            resolve("foodd delivered")
        },1000)
    })
}

orderFood().then(data)=>{
    console.log(data)
    return prepareFood()
}).then(data)=>{
    console.log(data)
    return deliverFood()
}).then(data)=>{
    console.log(data)
}).catch(err)=>{
    console.log(err)
})
async function order(){
    const data=await orderFood()
    console.log(data)
    await prepareFood()
    await deliverFood()
}

order()


console.log("First line")
try{
    let age=19
    if(age<18){
        throw new Error("Access denied")
    }
}catch(Error){
    console.log(error)
}finally{
    console.log("finally block")
}
console.log("Last line")


