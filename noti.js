const button = document.querySelector("button")
//console.log(button)

button.addEventListener('click',()=> {
    const motherDiv = document.querySelector('#motherDiv');

    const element = document.createElement('h1')
    const text = document.createTextNode('Notify me')
    element.appendChild(text)
    motherDiv.appendChild(element);
    document.body.append(motherDiv);
 



    Notification.requestPermission().then(perm => {
       // alert(perm)
        if(perm === "granted") {
           const notification =  new Notification("I want to send a message to you.", {
                body: Math.random(),
                //data: {hello :"world"},
                icon:"google.jpg",
                //The tag property comes in handy when you wanna overwrite something..eg. 
                //with out the tag when you click on the  button it sends the notification the
                // number of times you hit the button. But when the tag is there it overwrites it
                //Nb: the tag will not work if the item passed in is the same; the welcome something.
                tag: "Welcome tag"
            })
            console.log("clicked")
            alert("notified")

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

// const button = document.querySelector("button")
// console.log(button)

// button.addEventListener('click',()=> {
//     //alert("hi")
//     Notification.requestPermission().then(perm => {
//         //alert(perm)

//         if(perm === "granted") {
//             new Notification("Hi there! I'm trying again", {
//                 body: "Please work",
//                 // requireInteraction: true
//             })
//             console.warn("Clicked")
//         }
//     })
// })