// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

function exercise1() {
let i = 1;
while (i <= 5) {
console.log(i);
i++;
}
} console.log(exercise1());

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
function exercise2() {
  let i = 1;

  do {
    console.log(i); 
    i++; 
  } while (i <= 5);
}

exercise2();

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
function exercise3() {
  let i = 1;
  for (let i = 1; i <= 5; i++) {
  console.log(i);
  }
}
exercise3();

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//WHILE
function exercise4() {
  let i = 10;
  while(i >= 1) {
    console.log(i);
    i--;
  }
} exercise4();

//DO WHILE
function exercise4() {
  let i = 10;
  do {
    console.log(i);
    i--;
  } while (i >= 1);
} exercise4();

//FOR
function exercise4() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
} exercise4();

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//WHILE
function exercise5() {
  let i = 7;
  while(i <= 27) {
    console.log(i);
    i++;
  }
} exercise5();

//DO WHILE
function exercise5() {
  let i = 7;
  do {
    console.log(i);
    i++;
  } while (i <= 27);
} exercise5();

//FOR
function exercise5() {
  for (let i = 7; i <= 27; i++) {
    console.log(i);
  }
} exercise5();

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//WHILE
function exercise6() {
  let i = 10;
  while(i <= 100) {
    console.log(i);
    i += 10;
  }
} exercise6();

//DO WHILE
function exercise6() {
  let i = 10;
  do {
    console.log(i);
    i += 10;
  } while (i <= 100);
} exercise6();

//FOR
function exercise6() {
  for (let i = 10; i <= 100; i += 10) {
    console.log(i);
  }
} exercise6();

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
//The counter starts at 1 which is less than 2, and the loop will only count down (counterFour--) so it will always be less than 2 and infinitely loop.
let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour++;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

function excercise7() {
  let variable = 12;
  for(let i = 0; i <= variable; i++)
    console.log(i);
} excercise7();


// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
function exercise8() {
  let favNumber = 12;
  for(let i = 0; i <= 100; i++)
  if(i != favNumber) {
    console.log(i + " not my favorite number!");
  } else {
    console.log(i + "my favorite number");
  }
} exercise8();


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//A for loop is best used for a known number of iterations, a while loop is best used for when the number of iterations is unknown and depends on a condition, and a do while loop is best used for when the loop should execute at least once regardless of the condition

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//This was fairly easy - I needed a refresher on nested loops.

// Email your file to us or commit your file to GitHub and email us a link.
