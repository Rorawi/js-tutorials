///assignment
//Create a new html and js file and do append till you get a div full of text and colors
//also add colors up and assign class names and ids to them
// to append ; create an element using document.createElement, create text using document.createTextNode
//append them using appendChild; assign them to classes using setAttribute; add the class's style using 
// classList.add
// to add an element before a div use insertBefore.

// const motherDiv = document.querySelector('#motherDiv');
// //console.log(motherDiv);

// const newDiv = document.createElement('h1');

// const newText = document.createTextNode('Nothing was in before , i just assigned this');
// newDiv.appendChild(newText);
// motherDiv.appendChild(newDiv);
// console.log(motherDiv);

// newDiv.setAttribute('class','text')


// newDiv.classList.add('text')
// console.log(newDiv);


// const heading  = document.createElement('h1')
// const headingText  = document.createTextNode('I am the heading')

// heading.appendChild(headingText)
// heading.setAttribute('class','heading')
// heading.classList.add('heading')

// console.log(heading);
// document.body.insertBefore(heading,motherDiv)

// const innerTextDivEl = document.querySelector('.innerTextDiv')
// innerTextDivEl.innerHTML = `<ul>
//     <li>Ama</li>
//     <li>Akos</li>
//     <li>Yaa</li>
// </ul>`

// console.log(innerTextDivEl);
// const textContentDivEL = document.querySelector('.textContentDiv')
// textContentDivEL.textContent = `<ul>
// <li>Ama</li>
// <li>Akos</li>
// <li>Yaa</li>
// </ul>`
// console.log(textContentDivEL);
//console.log(motherDiv.children);

//Assign a button to remove and display text

// const btn = document.querySelector('.btn')
// const heading = document.querySelector('h2')

// function changeColors() {
// let hasClass = heading.classList.contains('heading')
//     if(hasClass) {
//         heading.classList.remove('heading')
//     }
//     else {
//         heading.classList.add('heading')
//     }
//     //console.log('hello');
// }


// btn.addEventListener('click', changeColors)


// const btnEl = document.querySelector('.btn')
// btnEl.addEventListener('click',function() {
//     btnEl.innerHTML = "Clicked"
// })

// const showEl = document.querySelector('.show')

// function changeBgColor() {
//     if(showEl.classList.contains('active')) {
//         showEl.classList.remove('active')
//     }
//     else{
//         showEl.classList.add('active')
//     }
// }

// btnEl.addEventListener('click', changeBgColor)

// function addTwoNums(a,b) {
//     return a + b
// }

// addTwoNums()

// function printAll(a) {
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element);
// }
// }

// printAll([1,2,3,4,5])

// var arr = ['a','b','c','d']

// arr.map(function(arrItem) {
//     console.log(arrItem);
// })

// arr.forEach(function(arrItem) {
//     console.log(arrItem);
// })

const btns = document.querySelectorAll('.btn')
 
btns.forEach(function(btn) {
    btn.addEventListener('click',function(e) {
        //e.currentTarget.style.color = 'green'
       console.log( e.target);
       e.target.style.color = 'green'
    })
}) 

const button = document.querySelector("button")
//console.log(button)

button.addEventListener('click',()=> {
    //alert("hello Winifred")
    Notification.requestPermission().then(perm => {
       // alert(perm)
        if(perm === "granted") {
           const notification =  new Notification("I want to send a message to you.", {
                body: Math.random(),
                data: {hello :"world"},
                icon:"google.jpg",
                //The tag property comes in handy when you wanna overwrite something..eg. 
                //with out the tag when you click on the  button it sends the notification the
                // number of times you hit the button. But when the tag is there it overwrites it
                //Nb: the tag will not work if the item passed in is the same; the welcome something.
                tag: "Welcome tag"
            })

            notification.addEventListener("error",(e)=> {
                alert("error")
            })
        }

    })
})

let notify;
document.addEventListener("visibilitychange",()=> {
    if(document.visibilityState === "hidden") {
        //alert("Come back")
       notify = new Notification("Please come back", {
            body: 'We need people like you on our page'
        })
    }
    else {
        if(notify)notify.close()}
})