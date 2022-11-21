//   const result = null;
//   console.log(null);

// function danny() {
//     console.log("hello Danny");
// }

// danny()
// function pruddy() {
//     console.log("hello Pruddy");
// }

// pruddy()

// function orison() {
//     console.log("hello Orison");
// }

// orison()

// function hello(name,secondName) {
//     console.log('Hello ' + name);
//     console.log(secondName);
// }

// hello('Winifred','Danny')
// hello('Orison')
// hello('Danny')

// function calculate(value) {
//     // return value * 50
//     console.log(value * 50);
// }

// calculate(3)

// let returnCalculation = calculate(2)
// console.log(returnCalculation);


// const value = false;
// if(!value) {
//     console.log('value is true');
// }

// const num1 = 6
// const num2 = '6'

// const value1 = num1 != num2
// const value2 = num1 !== num2

// console.log(value1);
// console.log(value2);



// ||(OR sign) , &&(AND sign)

// let firstName = 'Wini';
// const age = "18"

// if( firstName == 'Wini' && age === 18) {
// console.log('the details are correct');
// }
// else {
//     console.log('I guess one is wrong');
// }

//It takes the else because the '===' checks the type and here 
//our age variable is a string and not a number...

// let dice = 1;

// if(dice !== 1) {
//     console.log("I am less than one");
// }
// else if (dice === "1") {
//     console.log("i inspect u every time; you don't tally bcos you are a string girl!");
// }
// else{
//     console.log('I am a number ');
// }

let whileLoop = 5

while (whileLoop > 0) {
    console.log("I'll loop " + whileLoop ); 
    whileLoop--
}

// whileLoop = 0

// do {
//     console.log("I'm doing a do-while loop till " + whileLoop);
//     whileLoop++
// } while (whileLoop < 10);

// let i;

// for( i = 0; i < 5; i++ ){
//     console.log("we are "+ i + " happy");
// }

// for(let people = 10; people >= 0; people--) {
//     console.log("There are " + people + " left");
// }

//let texts = 'Winifred Asante'
// let result = text.length

// console.log(result);
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.charAt(0));
// console.log(text.charAt(text.length-2));
// console.log(text.indexOf('i'));
// console.log(text);
// console.log(text.trim());
// console.log(texts.startsWith("Winifred"));
// console.log(text.trim().toLowerCase().startsWith("wini"));
// console.log(text.includes("sa"));
// console.log(text.slice(0,5));
// console.log(text.slice(-6));

// const greet = "Greet"

// const greetings  = `Hey! I'm Winifred ${greet} me`
// console.log(greetings);

// let names = ['ama','kofi','adwoa']

// console.log(names.length);

//the box bracket ttakes the index of a value in an array so the names.length 
//-1 is the index of the last value in the array so theefore it gets the last value in the array
// console.log(names[names.length - 1]);


//concat adds arrays together - the line of code below explains that the array 'addedArray' should be added to the array 'names'
// let addedArray = ['pampers','dampo','para']
// const  results = names.concat(addedArray)
// console.log(results);

// console.log(results.reverse());

//adds the value to the beginning of an array
// results.unshift('bentwerk');
// console.log(results);

//adds the value at the end of an array
// results.push('Dela')
// console.log(results);

//This removes the first item in the array 
// results.shift();
// console.log(results);

//Removes the last item from an array
// results.pop()
// console.log(results);


//splice Removes elements from an array and, if necessary, 
//inserts new elements in their place, returning the deleted elements in the next console.log
// const spliceName = results.splice(0,1)
// console.log(spliceName);
// console.log(results);



const names = ['micheal', 'trevor', 'franklin']
const lastName = 'poopypants'

let newArray = []


//in the for loop the first statement; the '0' stands for the index
for (i = 0; i < names.length; i++) {
    console.log(names[i]);
    //this line of codes adds the lastName to the names above and the 'push' method adds the values to our newArray
    newArray.push(`${names[i]} ${lastName}`);
}

console.log(names);
console.log(newArray);

let gas = [100, 20, 10]
let schoolFees = [10, 30, 60]

function addTotal(item) {
    let itemTotal = 0
    for (let i = 0; i < item.length; i++) {
        // const value = item[i];
        itemTotal += item[i]
    }

    return itemTotal;
}
//NB: if you use return you can't invoke the function unless you create a variable for the function you want to invoke.
const returnValue = addTotal(schoolFees)
const returnValue2 = addTotal(gas)

console.log(returnValue);
console.log(returnValue2);

// const num1 = 1
// const num2 = num1

// function say(item) {
//     return `I have ${num1} apple`
// }

// const sayIt = say(num1)

// console.log(sayIt);

const number = 1
let number2 = number
number2 = 7
console.log(`the first value is ${number}`);
console.log(`the first value is ${number2}`);

let person = {
    name: 'wini',
    age: 18
}

//... the spread operator returns the copy of the object in person so 
//therefore when person2 assigns a new value to its copy now, it doesn't
// affect the person object because person2 just makes changes in it's own and not the person.
// but if the spread operator is removed the changes done in person2 will affect person.
let person2 = { ...person }
person2.name = 'Ronda'

console.log(person.name);
console.log(person2.name);

let boolean1 = true
let string = ''

if (boolean1) {
    console.log(`I'm indeed a boolean`);
}
//According to javascript ,it sees all('',"",``,null,undefined,false and NaN) as a false statement as to there is nothing in the string
if (string) {
    console.log(`I'm a string`);
}
else {
    console.log(`I'm a string but I'm empty so javascript sees me as a false statement 🍉`);
}


//ternary operator

let sum = 10 > 0

sum ? console.log(`I'm correct! 10 is greater than 0`) : console.log(`You failed`);

let text = 'Winifred'
let checker = (text.startsWith("ama"))

checker ? console.log(`You're right the text starts with win`) : console.log(`you're a liar`)

// let persona  = 'Candra';
// persona = 'Erica';

// function fruit() {
//     console.log(persona);
//     persona = 'orange'

//     function inner() {
//         persona = 'Kate'
//         console.log(`The parent is ${persona}`);
//     }
//     inner()
// }

// fruit()
// if(true) {
//     console.log(persona);
//     persona = 'Ethel'
// }

// console.log(`I have a sister whose name is ${persona}`);
let persona = 'Candra';


function fruit() {
    const persona = 'Winifred'
}

fruit()
//in this if statement, when you remove the keyword const it becomes a global
//variable and can therefore be accessed anywhere in the codes.
// to disable others codes from using a variable or to stop making variables global ,always add the keywords.

if (true) {
    const persona = 'Janet';
}

console.log(`I have a sister whose name is ${persona}`);


const globalNumber = 5

function add(num1, num2) {
    const result = num1 + num2 + globalNumber
    return result
}


console.log(add(3, 4))


//CALL BACK FUNC
function morning() {
    console.log(`Good morning Bob`);
}

function greet(name, callbackFunc) {
    callbackFunc()
    console.log(`Hi I'm ${name}`);
}

greet('Lordia', morning)
greet('Etonam', morning)

function addition(a, b) {
    return a + b
}

addition(1, 2)


//ASSIGNMENT 

//create an array and loop through it assigning a variable to each item looped
//log a variable using three methods you remember.
//Splice an array into 2
//Play with the operators and assignments
//Use a tenary operator
//use a global variable and local variable

//      Q1
let objects = ['pen', 'pencil', 'ruler', 'marker']

let adjective = 'a'

for (let i = 0; i < objects.length; i++) {
    const element = objects[i];
    // console.log(element);
    let add = adjective + ' ' + element

    console.log(add);
}

//      Q2

let word = 'Windows'

console.log(word.length);
console.log(word.toLowerCase());// returns lowercase
console.log(word.toUpperCase());// returns uppercase
console.log(word.indexOf('W'));// returns 0
console.log(word.startsWith('O')); //returns false
let newWordArr = []
newWordArr.push(['Mac', 'Lenovo', 'hp'])
console.log(newWordArr); //adds values to the end of the array
console.log(word.concat(newWordArr));

//       Q3: SPLICE

let spliceArr = ['Tomatoes', 'Onion', 'Okro', 'Garden_eggs', 'Ginger']
console.log(spliceArr.splice(0, 3));
console.log(spliceArr); // this is to show the items which weren't spliced😎


//       Q4: Assignments and Operators
//Assignments
var x = 5
let y = 10

let result = x /= y
console.log(result);


//OPERATORS
let score = '0'
//the if statement says if score is equal to zero AND score is not identical to an empty string; 
//here our score has a value inside the variable  and since the second condition is saying score 
//is not an empty string, it will return the if statement's log and therefore print in the console 'your score is ${score};
if (score == '0' && score !== '') {
    console.log(`your score is ${score}`);
}
else {
    console.log(`Play game`);
}

//    Q5 Tenary operators.nb: use the saame logic in Q4 to write a tenary operator
score == '0' && score !== '' ? console.log(`your score is ${score}`) : console.log(`Play game`);

//   Q6 :use a global variable and local variable

//GLOBAL
let globalAssignment = 'global Assignment'
globalAssignment = 'my own'
function global() {
    globalAssignment = 'inside a function'
    console.log(globalAssignment);
}
global()
console.log(`I'm a ${globalAssignment}`);

//LOCAL & CALLBACK FUNCTION
let localAssignment = 'global Assignment'

function hey() {
    console.log(`hey you`);
}
function globals(name, pass) {
    pass()
    console.log(`${name}`);
    const localAssignment = `I'm local variable because of my keyword const`
    console.log(localAssignment);
    console.log(`Hi I'm ${name}`);
}
globals('Wini', hey)
console.log(`I'm a ${localAssignment}`);


///ASSIGNMENT 
//create an array and loop through it assigning a variable to each item looped and push the array to a new arr

let bestFriends = ['Peter', 'Crowder', 'Zutah']

let surname = ' Allo'

newContainer = []

for (let i = 0; i < bestFriends.length; i++) {
    const element = bestFriends[i];
    const added = `${surname} ${element} `
    console.log(added);
    newContainer.push(`${surname} ${element}`)
}

console.log(newContainer);

console.log(newContainer.splice(0, 1));
console.log(newContainer);

//GOOD JOB!!!
//for each

const ordvelPeople = [
    {
        name: 'Danny',
        age: 19,
        position: 'the boss'
    },
    {
        name: 'Wini',
        age: 18,
        position: 'Secretary'
    },
    {
        name: 'Joe',
        age: 20,
        position: 'UI designer'
    }
]

// function showPerson(ordvelPeople){
//     console.log(ordvelPeople.position.toUpperCase( ));
// }

//ordvelPeople.forEach(showPerson)
ordvelPeople.forEach(function (item) {
    console.log(item.position);
})

//map

const mapOrdvelPeople = [
    {
        name: 'Kelvin',
        age: 24,
        position: 'Programmer'
    },
    {
        name: 'Vandyke',
        age: 18,
        position: 'Treasurer'
    },
    {
        name: 'Vievie',
        age: 20,
        position: 'Assist lead'
    }
]

const ages = mapOrdvelPeople.map(function (item) {
    console.log(item);
    return item
})
console.log(ages);
//ASSIGNMNET
//use for each to loop through an array
//use map   to loop through an array

const arr = [
    {
        name: 'Dave',
        age: 9
    },
    {
        name: 'Stormzy',
        age: 50
    },
    {
        name: 'ArrDee',
        age: 23
    }

]

arr.forEach(function (item) {
    console.log(item.name);
})


arr.map(function (item) {
    console.log(item);
})


const youngPeople = arr.filter(function (item) {
    // if(item.age <= 10) {
    //     console.log('I have been filtered out since I am less than 10😭');
    // }

    return item.age <= 10
})
console.log(youngPeople);



const developers = mapOrdvelPeople.filter(function (item) {
    return item.position === "Programmer"
})

console.log(developers);

//find returns an object

//reduce ; it is compulsory to return the first parameter which is the total items in the array
//it takes 2 params

//use for each to loop through an array
//use map   to loop through an array, get the name of the person ,set it to upper case and the age -5
//log to the console the result.

//use filter,reduce and find; assignment
//You have a number of students going for an excursion.Unfortunately some students were not able to pay.
//With the idea in filter help remove the students who haven't made payments an those who have made half payment
//using find since the question made will have only one who made half payment


const totalAmount = 500
const students = [
    {
        name: 'Ama Rejoice',
        payment: 0
    },
    {
        name: 'Anna Amor',
        payment: 300
    },
    {
        name: 'Leticia Greyham',
        payment: 500
    },
    {
        name: 'Godfreda Heaven',
        payment: 600
    },
    {
        name: 'William Burrito',
        payment: 200
    },
    {
        name: 'Roland Taco',
        payment: 500
    },
    {
        name: 'Raymond Sushi',
        payment: 500
    },
]

const filter = students.filter(function (money) {
    return money.payment >= totalAmount
})

console.log(filter);

const filterHalfPayment = students.filter(function (money) {
    let halfPayment = money.payment < totalAmount
    return halfPayment
})

console.log(filterHalfPayment);

const find = students.find(function (money) {
    return money.payment >= totalAmount
})

console.log(find);

//So I guess filter returns an array always whilst 
//find returns an object and returns the first match of what you are 
//looking for.

//reduce

const workers = [
    {
        name: 'Worker 1',
        salary: 300
    },
    {
        name: 'Worker 2',
        salary: 500
    },
    {
        name: 'Worker 1',
        salary: 200
    },
    {
        name: 'Worker 1',
        salary: 500
    },
    {
        name: 'Worker 1',
        salary: 100
    },
]

const reduceMethod = workers.reduce(function(totalOfAll,Current) {
    console.log(Current.salary);
    console.log(totalOfAll);
    const addedSalary = totalOfAll += Current.salary
    console.log(`So when I added the totalOfAll to the Current ${addedSalary}`);
    return totalOfAll
},0)

//floor:Runs down(Goes by its name🤣 the floor is its limit)
// const MathNumber = 3.548373
// const MathResult = Math.floor(MathNumber)

// console.log(MathResult);

//ceil:Runs up(ceil; as in celing; ceiling as in sky. Goes by its name🤣 the sky is its limit)
// const MathNumber = 3.548373
// const MathResult = Math.ceil(MathNumber)

// console.log(MathResult);

// square root of the number
// const MathNumber = 36
// const MathResult = Math.sqrt(MathNumber)

// console.log(MathResult);

//Returns the smaller number in the array
// const MathResult = Math.min(1,2,3,4,5)

// console.log(MathResult);

//Returns the larger number in the array
// const MathResult = Math.max(1,2,3,4,5)

// console.log(MathResult)

//Returns a (pseudo) random number between 0 and 1.
const MathResult = Math.random()

console.log(MathResult);


//DATE

const months = [
    'January',//index 0month  month 1
    'February',//index 1 month 2
    'March',//index 2 month 3
    'April',//index 3 month 4
    'May',//index 4 month 5
    'June',//index 5 month 6
    'July',//index 6 month 7
    'August',//index 7 month 8
    'September',//index 8 month 9
    'October',//index 9 month 10
    'November',//index 10 month 11
    'December'//index 11 month 12
]

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

//You could also assign your own date in the parenthesis 
//the first number : Month, Second number: day,Third number: Year
//const date = new Date('3/22/2004')
const date = new Date()
console.log(date);

const dateNum = date.getDate()
console.log(dateNum);

const month = date.getMonth()
console.log(months[month]);

const day = date.getDay()
console.log(days[day]);

const year = date.getFullYear()
console.log(year);

const fullDate = `${days[day]}, ${dateNum} ${months[month]} ${year}`

console.log(fullDate);

//document.body.innerHTML = fullDate
//document.body.style.backgroundColor = 'blue'
//getElementById
// const h1 = document.getElementById('h1')
// h1.style.color = 'yellow'
// const btn = document.getElementById('btn')

// btn.style.backgroundColor = 'blue'




//getElementsByTagName 
//getElementsByTagName returns an array-like objets of items you are selecting and therefore 
//should be targeted with thier indexes
// const headings = document.getElementsByTagName('h2')
// headings[0].style.color = 'green'

// const items = document.getElementsByTagName('li')

// const betterItems = [...items];
//why forEach here? 
//ans: so ... in the getElementsByTagName, it
 //returns an array-like objets and since forEach works with arrays it can't access it
 // therefore I'm making a copy of the state wich will be returned
 // as an array and use my forEach method
// betterItems.forEach(function(item) {
//     console.log(item);
// })


//getElementsByClassName
//Query Selectors
//ChildNode *children *first child *last child
//parentElements
//previousElementSibling
//nextElementSibling
//textContent
//getAttribute 

// const vegiesEl = document.getElementsByClassName('vegies')
// console.log(vegiesEl);

// const heading = document.querySelector('h2')
// console.log(heading.parentElement);


// const first = document.querySelector('.first')
// const second = first.nextSibling.nextSibling.style.color = 'red'
// console.log(second);

// const lastEl = document.querySelector('.last')
// const last = lastEl.previousSibling.previousSibling.style.color = 'blue'
// console.log(last);
//in your index.html you will be given a line of codes with 2 h2 tags
// style them with different colors.
// set a whole div with the color red

// const linkEl = document.querySelector('#link')
// const nextEl = linkEl.nextElementSibling
// nextEl.setAttribute('class','.newAssignedAtr')
// nextEl.textContent = 'I have a newly assigned content with the help of the textContent method'
// console.log(nextEl);
// nextEl.style.color = 'green'

// nextEl.previousElementSibling.style.color = 'red'

// const secondEl = document.querySelector('#second')
// const thirdEl = secondEl.nextElementSibling
// thirdEl.setAttribute('id','#third')
// thirdEl.textContent = 'I assigned this an id of third.'

//So i guess append just help to create new element and add things up
// const appendDiv = document.querySelector('#append')
// console.log(appendDiv);

// const newDiv = document.createElement('div')
// console.log(newDiv);

// const newDivText = document.createTextNode('I have added a new div to the append div')
// newDiv.appendChild(newDivText)
//console.log(newDiv);

// appendDiv.appendChild(newDiv)
// console.log(appendDiv);
// document.body.appendChild(appendDiv)

//console.log(appendDiv.children);

///assignment
//Create a new html and js file and do append till you get a div full of text and colors
//also add colors up and assign class names and ids to them
//use the replaceElement

//ANS : ASSIGNMENT.HTML


//Prepend
//assignment
//state when ,where and why we use use textContent and innerText
//ANS : ASSIGNMENT.HTML


const btn = document.querySelector('.btn')
const h2 = document.querySelector('h2')
function changeColors() {
    //console.log('hello');
    let hasClass = h2.classList.contains('red'); 
    if(hasClass) {
        h2.classList.remove('red')
    }
    else{
        h2.classList.add('red')
    }
}

btn.addEventListener('click',changeColors)


//CSS 
//Assign a button to remove and display text