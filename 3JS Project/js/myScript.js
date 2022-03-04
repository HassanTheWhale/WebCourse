// Use this page if you want to know more!: https://www.w3schools.com/js/

// create a variable called hello that holds the the value of a string "hello" using var.
var hello = "hello";

// create a variable called myName that holds the value of a string "Your Name" using let.
let myName = "Hassan";

// Create a constant called pi that holds the value 3.14.
const pi = 3.14;

// var hello = "hi"; //this code will work, because of var
// let name = "Sami"; //this code will (not) work, name is decalred before

// create a variable called elem that has the element with the id myName
var elem = document.getElementById("myName");

// set the innerhtml of the elem with the value name that has been created before.
elem.innerHTML = myName;

// change the color of the elem to be white.
elem.style.color = "white";

// write a message in the console to let you know that the edits you made are done!
console.log("Done!!");

// alert the user with a welcome message
// alert(hello); //from a variable
// aleart("Hi!!") //directly

// create a variable called test with a value of 0
var test = 0;

// increase the value of test by 10
test = test + 10; //one way
test += 10; //another way

// increase the value of test by 1.
test = test + 1; //first way

// use a different way of increasing the value of test by 1.
test++; //second way

//is there any other way to increase by 1?
test += 1; //third way!!

// create an array that holds 3 of your favorite plates.
let myPlates = ["Pasta", "Soup", "Sandwich"];

// push another plate into the array.
myPlates.push("Wr8 3nb");

// sort that array.
myPlates.sort();

// revrese the array.
myPlates.reverse();

// remove the last plate in the array and save it in a variable named myPop
var myPop = myPlates.pop();

//print myPop and and array to the consol
console.log(myPop + " was removed!");
console.log(myPlates);

// print the elements of the array in the console using for loop.
//for loops need 3 things, 1. init a counter, 2. a condition, 3. and an increase.
for (var i = 0; i < myPlates.length; i++) {
  //if we want to access an element inside of myPlates we use myPlates[i], where i is the number of the index [0, length-1]
  console.log(myPlates[i]);
}

// ask the user to enter 2 numbers using prompt. Save the data inside of two variables, x and y.
var x; //declare x first.
var y; //declate y second.

// x = parseInt(prompt("Enter x")); //set the value of x using propmpt and change it from string to a number
// y = parseInt(prompt("Enter y")); //set the value of y using propmpt and change it from string to a number

console.log("X: " + x); //print x using the normal way
console.log(`Y: ${y}`); //using template litterals.
console.log(`${x}+${y} = ${x + y}`);

//Check if x and y are equal, x is bigger than y, or y is bigger than x. print sutiable messages to the console.
if (x == y) {
  console.log("x == y");
} else if (x > y) {
  console.log("x > y");
} else {
  console.log("x < y");
}

// print a message not equal if x doesn't equal y
if (x != y) {
  console.log("not equal");
} else {
  console.log("equal");
}

// create a variable isON with the value true.
var isON = false;

// print false if the value of isON is false. True, otherwise. using ! operator.
if (!isON) {
  console.log("false");
} else {
  console.log("true");
}

// create an object cat, with the keys: catName, age, color, and cuteLevel.
var cat = { catName: "Kitty", age: 4, color: "Brown", cuteLevel: 10000 };

//print the cat name
console.log(cat.catName);

// create an array that holdes 3 objects. Use cat if you want.
var catArray = [
  { catName: "Kitty", age: 4, color: "Brown", cuteLevel: 10000 },
  { catName: "Meme", age: 2, color: "Grey", cuteLevel: 12000 },
  { catName: "Lily", age: 5, color: "White", cuteLevel: 10000 },
];

var cat2 = catArray[1];

console.log(cat2.catName);

// using for loop, print the numbers in between of 0 and 10. Use continue if we reached 7, break if we reached 9. What do you notice?

for (var i = 0; i <= 10; i++) {
  if (i == 7) {
    continue;
  } else if (i == 9) {
    break;
  }
  console.log(i);
}

// Create a function called Hi that alert the user with a message.
function Hi() {
  alert("Hello User! Welcome");
}

// Hi(); //call the prevoius function

// Create a function called add that accept 2 parameters and return the sum of them.
function add(x, y) {
  var sum = x + y;
  return sum;
}

// use the function in a good way.
var result = add(4, 6);
console.log("Result = " + result);

console.log("Result = " + add(10, 10));

// Create a function called saveData, link it with the Save function in index.html.
// Save the data inside of inputs, check if all of the data are available (you may create another function).
// print the data to the console.
// use local storage
function getData() {
  //declare variables
  var userName;
  var userEmail;
  var userType;
  var userMSG;

  //get the html elements
  userName = document.getElementById("formName").value;
  userEmail = document.getElementById("formEmail").value;

  var typeElem = document.querySelector('input[name="formType"]:checked');
  if (typeElem == (undefined || null)) userType = "";
  else userType = typeElem.value;
  // another way for radio elements.

  // var userTypeArray;
  // userTypeArray = document.getElementsByName("formType");
  // for (var i = 0; i < userTypeArray.length; i++) {
  //   if (userTypeArray[i].checked) userType = userTypeArray[i].value;
  // }
  // if (userType == undefined || userType == null) userType = "Null";

  userMSG = document.getElementById("formMSG").value;

  //print the data
  console.log(`
  ------ [ Form Data ] ------
  Name: ${userName}
  Email: ${userEmail}
  Type: ${userType}
  MSG: ${userMSG}
  ---------------------------
  `);

  //make the result as object
  var result = {
    name: userName,
    email: userEmail,
    type: userType,
    msg: userMSG,
  };

  //return the result
  return result;
}

function saveData() {
  //get information from another function. Note We made getData return us a function
  var form = getData();

  //check if there is any missing information
  if (form.name == "" || form.email == "" || form.type == "" || form.msg == "")
    alert("Missing Information");
  else {
    //save in local storage
    localStorage.setItem("name", form.name);
    localStorage.setItem("email", form.email);
    localStorage.setItem("type", form.type);
    localStorage.setItem("msg", form.msg);
  }
}
