//================
// Question 1
/*let massage = "Hello World" ;
console.log(massage); */
//==================
// Question 2
//  2 .Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
/*let myName = "Hello! Nadia Warda";
let massage = "would you like to learn some phyton today?"
console.log(`${myName}, ${massage}`);*/
//=================
// Question 3
//  3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
/*let personName = "Ashir Saleem";
let lowerCase = personName.toLowerCase();
let upperCase = personName.toUpperCase();
console.log(upperCase);
console.log(lowerCase);

 function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
   }
  
   console.log(titleCase('"Ashir Saleem is my best Friend"'));*/

//=================
// Question 4
// 4 .Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//              Albert Einstein once said, “A person who never made a mistake never tried anything .
/*let quote = "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man.";
  let author = "Quaid-e-Azam";
console.log (`${author} once said, "${quote}"`);*/
 
// ==================
// Question 5
//  5 .Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
/*let quote = "Pakistan is proud of its youth, particularly the students.";
let famous_person = "Quaid-e-Azam";
let massage = (`${famous_person}, once said, ${quote}`);
console.log(massage);*/

//==================
// Question 6
// 6 .Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
/* let personName = "      \t Arooba Fatima     ";
 console.log("Person Name with white space:");
 console.log(personName);
 console.log("\nPerson Name after stripping white space:");
 console.log(personName.trim());*/
// =================
// // Question 7
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
/* let bySum = 4 + 4;
 console.log("by Sum:", bySum);
 let byDifference= 10 - 2;
 console.log("by Difference:", byDidderance);
 let byProduct = 4 * 2;
 console.log("by Product:", byProduct);
 let byDivision = 16 / 2;
 console.log("by Division:", byDivision);*/
 
// Another Method
/* function sum(x, y) {
    console.log(x + y);
}
 sum(5, 3); 
 function sub(x, y) {
     console.log(x - y);
 }
 sub(10, 2); 
function mul(x, y) {
    console.log(x * y);
 }
 mul(4, 2);
function div(x, y) {
    console.log(x / y);
}
 div(16, 2);*/

//=================== 
// Question 8
// 8. You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
/*function myFunction (num1, num2) {
    console.log(num1 + num2);
 }
 myFunction(5, 3);
 myFunction(4, 4);
 myFunction(6, 2);
 myFunction(7, 1);*/
 
// ==================
// Question 9
// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
/* let favrtNumber = 7;
 let msg = (`My favorite number is ${favrtNumber}.`);
 console.log(msg);*/
 
// ==================
// Question 10
// 10 .Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// comment..........
//practice 
// Author Nadia warda 
//Date: January 15,2024

//let totalMarks = 1100;
//let obtainedMarks = 970;
//let percentage = (obtainedMarks/totalMarks)*100 +"%";
//alert(percentage);
//alert(`"Total Obtained Marks in Percentage"`)

//=====================
// Question 11
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
/* let friends = ["Aisha Batool","Aizal Khan", "Nosheen", "Nadia Warda","Arooba Fatima"];
 console.log(friends[0]);
 console.log(friends[1]);
 console.log(friends[2]);
 console.log(friends[3]);
 console.log(friends[4]);*/
 
// // Another method
/*for(let i=0; i < friends.length; i++){
    console.log(friends[i]);
}*/

//====================
// // Question 12
// // 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
/*let friends = ["Aisha Batool","Aizal Khan", "Nosheen", ","Arooba Fatima"]; 
 console.log(friends[0], "Anything is possible when you have your bestie there to support you.");
 console.log(friends[1], "Anything is possible when you have your bestie there to support you.");
 console.log(friends[2],  "Anything is possible when you have your bestie there to support you.");
 console.log(friends[3], "Anything is possible when you have your bestie there to support you.");*/
 
 
// Another Method
/*let friends = ["Aisha Batool","Aizal Khan", "Nosheen", "Nadia Warda","Arooba Fatima"];
let massage = "When I have my friend with me, everything becomes easy for me." ;

for(let i=0; i < friends.length; i++) {
      console.log(`${massage} ${friends[i]}`);
};*/
 
 //Another Method 
/*let bestFriend = ["Aizal Fatima", "Aamina Noor", "Ashir Saleem", "Arooba Fatima"];

for (let person of bestFriend) {
    console.log(`When I have my friend ${person}, with me, everything becomes easy for me.`);
};*/

//===================== 
// Question 13
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
/*let favTransportation = [
    { brand: "Honda CG 125",type: "Motorcycle"},
    {brand: "Toyota Corolla", type: "Car"},
    { brand: "BMX",type: "Bicycle"},
    {brand: "Vespa" ,type: "Scooter"}
];
let massage = "I would like to"
favTransportation.forEach(transport => {
    console.log(`${massage} ${transport.type}, ${transport.brand}.`);
});*/

// for loop method 
/*let favTransportation = ["Motorcycle", 
"Car", "Bicycle", "Scooter"];

for (let i = 0; i < favTransportation.length; i++) {

    console.log(`I would like to own a  \n ${favTransportation[i]}.`);
};*/

//====================
// Question 14
// 14 .Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
/*let guest =  ["Meerab","Alishba", "Zoha","Saba"];
let massage = "You are invited to a great dinner. Please must come and join us."
// Using forEach loop
guest.forEach((guestName) => {
    console.log(`Respected! Mr/Mrs. \n${guestName},\n ${massage} \n Thank You.`);
});*/

// Using for loop

/*let guest =  ["Meerab","Alishba", "Zoha","Saba"];
let massage = "You are invited to a great dinner. Please must come and join us."

for(let i=0; i < guest.length; i++) {
    console.log(`${guest[i]}, ${massage}`);
};*/

// ====================
// Question 15
// 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
/*let guestList = ["Ayaz", "Shabir", "Azeem", "Mehmood"];

console.log(".     Guests List:");
for (let name of guestList) {
    console.log(name);
}
let notCame = ["Shabir"];
console.log("\n" + notCame + " not coming. He's out of the city.");
let newGuest = ["Fahad"];
console.log("\nI invited a new guest: " + newGuest + ".");
let removedGuest = guestList.splice(1, 1);
console.log("\nRemoved guest: " + removedGuest + ".");
guestList.splice(1, 0, "Fahad");
console.log("\nUpdated Guest List:");
for (let guest of guestList) {
    console.log(guest! + ", you are invited to dinner at my place on Saturday");
};*/

//======================
// Question 16
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
/*let oldGuest = ["Ayaz", "Shabir", "Azeem", "Mehmood"];
console.log("  Old Guest Of Question 15")
for (let i = 0; i < oldGuest.length; i++) {
    console.log(i + 1 + ":" +oldGuest[i]);
}
console.log("\n" + " Information Message:")
console.log("\n" + "Hello Friends! Great news we found a bigger dinner table, so more space available here. I invited three more friends.")

console.log("\n" + "  Add one guest in the beginning:")
oldGuest.unshift("Umair")
for (let i = 0; i < oldGuest.length; i++) {
    console.log(i + 1 + ":" + oldGuest[i]);
}
oldGuest.splice(2, 0, "Asif");
console.log("\n" + "   Add one guest in the Middle :");
for (let i = 0; i < oldGuest.length; i++) {
    console.log(i + 1 + ":" + oldGuest[i]);
}
console.log("\n" + "   Add one guest in the End:")
oldGuest.push("Dur-e-Shawar")
for (let i = 0; i < oldGuest.length; i++) {
    console.log(i + 1 + ":" + oldGuest[i]);
}
console.log("\n" + " ` New Invitation Message:`")
let invitation = " You're cordially invited to our intimate dinner gathering! Join us for delicious food and delightful company. It promises to be a relaxed evening brimming with laughter and shared stories."
for (let i = 0; i < oldGuest.length; i++) {
    console.log(i + 1 + ":" + " " + "Hello" + " " + oldGuest[i] + "," + invitation);
}*/

//====================
// Question 17
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
/*let guestList = ["Aizel Fatima", "Alishba","Zoha", "Ashir Saleem", "Arooba", "M.Saleem", "Saba"];
let massage = "You are invited to a great dinner in someone's home. Please must come and join us.";
guestList.push("Meerab", "Dur-e-Shahwar");
console.log(guestList);

// informing people that you found a bigger dinner table.
console.log("I found a Bigger Dinner Table.");

// • Add one new guest to the beginning of your array.
guestList.unshift("Uzma Rizwan");
console.log(guestList);

// • Add one new guest to the middle of your array.
guestList.splice(3, 0, "Kinza Danish");
console.log(guestList);

// • Use push() to add one new guest to the end of your list.
guestList.push("Ahmed Bilal");
console.log(guestList);

// • Print a new set of invitation messages, one for each person in your list.
guestList.forEach((guestListName) => {
    console.log(`${guestListName} ,${massage}.`);
});*/

//=================== 
// Question 18
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// places you'd like to visit
// console.log("\tplaces you'd like to visit\n");
/*let placesLiked = ["Saudia Arabia", "Turkey", "Korea", "Australia", "Japan", "Canada", "Europe", "Palestine"];
let fvrtPlaces = [...placesLiked]; // Copying the array without nesting it within another array

console.log("Original Order:");
console.log(placesLiked);

// Order Alphabetically
console.log("\nAlphabetical Order:");
console.log(fvrtPlaces.sort());

console.log("\nArray Is still In its Original Order:");
console.log(placesLiked);

// Print array in reverse alphabetical order
console.log("\nReverse Alphabetical Order:");
console.log([...fvrtPlaces].sort((a, b) => b.localeCompare(a)));

console.log("\nArray Is still In its Original Order:");
console.log(placesLiked);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse the Order of Array.\nSo, its order has Changed");
console.log(fvrtPlaces.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nReversed Order:");
console.log(fvrtPlaces.reverse());

// Order Alphabetically
console.log("\nReversed Order Again to Original:");
console.log(fvrtPlaces.reverse());

// Print array in reverse alphabetical order
console.log("\nAlphabetical Order:");
console.log(fvrtPlaces.sort());

console.log("\nReverse Alphabetical Order:");
console.log(fvrtPlaces.sort((a, b) => b.localeCompare(a)));*/



//===================
// Question 19
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner. 
 // Example code from Exercise 14 through 18
// Assuming the program is about inviting guests to dinner

/*let guestInvited = ["Zoha","M.Ali","Maryam","Alishba", "Meerab","Maila", "Saba","M.Saleem"];
console.log(`I am Invited  ${guestInvited.length} Guests to Dinner`);*/
 
// ==================
// Question 20
// 20 .Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Creating arrays for different categories
/*let mountains = ["Ghar e Soor", "Ghar e Hira", "Kooh-e-Toor","K-2","Mount Everst"];
let rivers = ["Ravi", "Punjab", "Satlaj", "gehlem", "Chenab"];
let countries = ["Pakistan", "Turkey", "South Korea", "Australia", "Saudi Arabia"];
let cities = ["Faisalabad", "Islamabad", "Murree", "Sawat", "Occupied Kashmir"];
let languages = ["Urdu", "English", "Turkish", "Persian", "Arabic"];

console.log("Mountains:", mountains);
console.log("Rivers:", rivers);
console.log("Countries:", countries);
console.log("Cities:", cities);
console.log("Languages:", languages);*/

//================
// Question 21
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

/* let person={};
 person.Name = "Nadia Warda ";
 person.Age = "28";
 person.rollNumber ="1657";
 Course: "Web Developement",
 person.University = "NED";
 person.Study  = "Master Of Science";

console.log(person);*/

// Another Method 

 /*for(let detail in person){
     console.log(detail + ": " + person[detail])
 }
console.log(person);*/

//=====================
// Question 22
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

/*let fruits  = ["Mango","Apple","Orange ","Banana","Strawberry","Gave"];

// //Comment Error
  console.log("\n" + " Error:")
 console.log(fruits[6]);

// // Comment Correcting the Error
 console.log("\n" +" Correcting the Error:");
  console.log(fruits[3]);*/

//===================
// Question 23
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

/* let car = 'subaru';
 console.log("Is car === 'subaru'? I predict True.")
 console.log(car === 'subaru')*/
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// 1. test
/*let car = "subaru";
console.log("is car == `sabaru`? i predict true.");
console.log(car ==`honda`);
//2. test
let number = 8;
console.log("is number > 10? i predict true.");
console.log(number>10);
//3.
let fruit=`apple`;
console.log("is fruit!=`banana`? ipredict false.");
console.log(fruit!=`banana`);
//4.
let age =17;
console.log("is age < 25? i predict true.");
console.log(age<25);
//5.
let isRaining = true;
console.log("is it raining? i predent true.");
console.log(isRaining);
//6.
let day = "friday";
console.log("is day==`sunday`?i predict false");
console.log(day ===`sunday`);
//7.
let temperature =100;
console.log("is tempeature <=50?i predict false.");
console.log(temperature<=50);
//8.
let time = `morning`;
console.log("is time !==`nignt`? i predict true.");
console.log(time!==`night`);
//9.
let isSunny =false;
console.log("is it sunny? i predict false.");
console.log(isSunny);
//10.
let month =`May`;
console.log("is month===`May`?i predict false.");
console.log(month===`May`);*/

//======================
// Question 24
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

//Equality and Inequality
/*let name1 = "Meerab";
 let name2 = "Saba";
 
   console.log(name1 === name2)
   console.log(name1 !== name2)*/
 
// // lowercase Function
 /*let city = "KARACHI";
console.log(city.toLowerCase() == "karachi");*/
// // numerals equality & inequality, greater than and less than, greater than or equal to, and less than or equal to

/*let ageKid = 30;
 let ageChild = 25;
 console.log(ageKid == ageChild);
 console.log(ageKid != ageChild);
 console.log(ageKid > ageChild);
 console.log(ageKid < ageChild);
 console.log(ageKid >= ageChild);
 console.log(ageKid <= ageChild);*/

// // • Tests using "&&" and "||" operators
/* let fruit = "mango";
 let veg = "tomato";
 console.log(fruit == "mango" && veg == "tomato");
 console.log(fruit == "tomato" && veg == "mango");
 console.log(fruit == "mango" || veg == "tomato");
 console.log(fruit == "tomato" || veg == "mango");*/
 
// • Test whether an item is in a array
/*let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'Banana' in the fruits array? I predict True.");
console.log(fruits.includes('Orange'));
console.log("Is 'Mango' in the fruits array? I predict False.");
console.log(!fruits.includes('Mango'));*/

//======================
// Question 25
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.
// let alien_color = "green";
// // • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// passes version 
/* let alien_color = "green";
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}*/
// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// fails version 
/*let alien_color = 'red';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}*/

//==================
// Question 26
// 26 .Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
/*console.log(" Runing if Block:");
 let alien_Color=["green"];
 if(alien_Color == "green"){
     console.log("The player just earned 5 points for shooting the alien.");
 }else{
     console.log("The player just earned 10 points for shooting the alien.");
 }
 console.log("Runing else Block:");
 alien_Color=["red"];
 if(alien_Color == "green"){
     console.log("The player just earned 5 points for shooting the alien.");
 }else{
    console.log("The player just earned 10 points for shooting the alien.");
 };*/

//=====================
// Question 27
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-elif_else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// 1. version 
/*let alienColor = 'green';

if (alienColor === 'green') {
    console.log("Player earned 5 points.");
} else if (alienColor === 'yellow') {
    console.log("Player earned 10 points.");
} else {
    console.log("Player earned 15 points.");
}*/
// • If the alien is yellow, print a message that the player earned 10 points.
// 2. version 

/*let alien_color1 = 'yellow';

if (alien_color1 === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color1 === 'yellow') {
    console.log("Player earned 10 points.");
} else {
    console.log("Player earned 15 points.");
}*/
// • If the alien is red, print a message that the player earned 15 points.
// 3. version
/*let alien_color = 'red';

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else {
    console.log("Player earned 15 points.");
}*/

//============================
// Question 28
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
/*let age = 13;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}*/

//======================
// Question 29
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
/*let fvrtFruits = ["Apple", "Mango", "Pineapple", "Stawberry", "Banana"]

     console.log(fvrtFruits);
// // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if(fvrtFruits[0] === 'Apple') {
   console.log("I really Like Apples.\n");
}
 if(fvrtFruits[1] === 'Mango') {
  console.log("I really Like Mangoes.\n");
 }
 if(fvrtFruits[2] === 'Pineapple') {
  console.log("I really Like Pineapples.\n");
 }
 if(fvrtFruits[3] === 'Stawberry') {
         console.log("I really Like Stawberries.\n"); 
 }
 if(fvrtFruits[4] === 'Banana') {
   console.log("I really Like Bananas.\n");
 }*/
 
// Another Method
 /*let fvrtFruits = ["Apple", "Mango", "Pineapple", "Stawberry", "Orange","Cherry"];
 console.log(fvrtFruits.includes('Apple'));
// // Or
if(fvrtFruits.includes('Apple')) {
  console.log("I Really Like Apples.")
 }
if(fvrtFruits.includes('Mango')) {
  console.log("I Really Like Mangoes.")
}
 if(fvrtFruits.includes('Stawberry')) {
   console.log("I Really Like Stawbeeries.")
}
 if(fvrtFruits.includes('Pineapple')) {
  console.log("I Really Like Pineapples.")
 };*/

//====================
// Question 30
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
/*let userNames = ["Zoha", "Saba", "Nadia Warda","Alishba" 
,"Meerub"];
console.log(userNames);

userNames.forEach((name) => {
    if (name === 'Nadia Warda') {
        console.log("Hello! Admin, would you like to see a status report?");
    } else {
        console.log(`Hello! ${name}, Thank You For Logging in Again.`);
    }
});*/

//=======================
// Question 31
// 31 .No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
/* let list=[""];
 if (list==""){
     console.log("We need to find some users!");
 }else if (list=="admin"){
     console.log("Hello admin,would you like to see a status report");
 }else{
 console.log("Hello " + list +","+ " thank you for logging in again." )
}*/

// Another Method
/*let users = [];
if (users.length === 0) {
    console.log("We need to find some users!\n");
}*/

//=====================
// Question 32
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
/*const  current_users = ["Aizal Fatima", "Javeria", "Nadia Warda", "Arooba", "Ashir Saleem"];
const  new_users = ["M.Saleem", "Shahwar", "Hira", "Mahwish", "Muneeza"];

function checkUsername(currentUsers, newUsers) {
    let lowerCurrentUsers = currentUsers.map(user => user.toLowerCase());
    newUsers.forEach(user => {
        let lowerNewUser = user.toLowerCase();
        let message = lowerCurrentUsers.includes(lowerNewUser) ?
            `Username "${user}" is already taken. Please enter a new username.` :
            `Username "${user}" is available.`;
        console.log(message);
    });
}

checkUsername(current_users, new_users);*/

//==================
// Question 33
// 33 .Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
 /*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   for(const num of numbers) {
     let OrdinalNumbers: string;
    if(num === 1) {
       OrdinalNumbers = "st";
    } else if(num === 2) {
       OrdinalNumbers = "nd"; 
     } else if(num === 3) {
       OrdinalNumbers = "rd";
    } else {
       OrdinalNumbers = "th";
    }
     console.log(`${num}${OrdinalNumbers}`);
   };*/


//=====================
// Question 34
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// pizza names
/*console.log("\n" +"   Pizza Names:")
let favrPizzas = ["Pepperoni", "Fagita", "BBQ Chicken"];
console.log(favrPizzas)
// statement 
console.log("\n" +"  Output  Statement:")
for (let i = 0; i < favrPizzas.length; i++){
    console.log(`I like ${favrPizzas[i]} Pizzas .`);
}
//additional Sentence 
console.log("\n" +"  Additional Sentence:")
console.log("Pizza is the one thing that I will never get tired of....");*/

//===================
// Question 35
// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//  • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
/*console.log("\n" +"  Common Three animals charcteristics:")
 let animals=["Cat","Dog","Rabbit"];
 let x =""
 for (let i=0; i<animals.length; i++){
     console.log(x+animals[i] )
 }
//Comment Print  statement about each animal
 console.log("\n" +"   Print  statement :")
 animals=["Cat","Dog","Rabbit"];
  x =""
for (let i=0; i<animals.length; i++){
    console.log(x+animals[i]+" would make a great pet." )
 }
// Print common characteristic
console.log("\t These animals have in common\n");
console.log("These animals would make a great pet. Pets are animals that we love to keep. Pets are kept for community and entertainment.");*/

//====================
// Question 36
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
/* function make_shirts(size,message){
    console.log("The size of the shirt is "+ size + " and print the message on shirt is \n"   +  "     " + message)
 }
 make_shirts(40, "💓 Im a Programmer 💓");*/

//==================
// Question 37
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
/*function make_shirts(size="large",messages = "I love Typescript"){
    console.log("The size of the shirt is "+ size + " and print the message on shirt is "+messages)
}make_shirts();
 make_shirts("medium","best programing");
 make_shirts("small ","Im a good learner.");*/

//==================
// Question 38
// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
/*function describe_city(city,country){
    console.log(city+ " is in "+country)
 } describe_city('"Karachi','Pakistan."');
 describe_city('"Tokyo', 'Japan."');
 describe_city('"Beijing', 'China."');
 describe_city('"Bombay','India."');*/

//==================
// Question 39
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
 /*function city_country(city,country){
        console.log(city +" " + country)
    } 
city_country(`"Karachi"`,`"Pakistan"`);
city_country(`"Tokyo"`,`"Japan"`);
 city_country(`"Istanbul"`,` "Turkey"`);
 city_country(`"Beijing"`,`"China"`);*/

//==================
// Question 40
// 40. Album: Write a function called make_album() that builds a Object describing a music album.
// •The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. 
// •Print each return value to show that Objects are storing the album information correctly.
// •Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// •If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
/*function make_album(artist, album_title, num_tracks) {
    let album = {
        artist: artist,
        album_title: album_title,
        num_tracks: num_tracks
    };
   return album;
}

let album1 = make_album("The Weeknd", "After Hours", 14);
let album2 = make_album("Billie Eilish", "When We All Fall Asleep, Where Do We Go?", 12);
let album3 = make_album("Taylor Swift", "Folklore", 16);

console.log(album1);
console.log(album2);
console.log(album3);*/

//===================
// Question 41
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
/*let magicians = ["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"];

function show_magicians() {
    for(let magician of magicians) {
        console.log(magician);
    }
}
show_magicians();*/

//=================
// Question 42
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 /* function showMagicians(magicians){
         magicians.forEach(magician => {
             console.log(magician);
         });
     }  
     function make_great(magicians){
         for(let i=0; i<magicians.length; i++){
        magicians[i]="The Great "+magicians[i];
         }
     }
      let magiciansNames=["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"];
    make_great(magiciansNames);
    showMagicians(magiciansNames);*/

//==================
// Question 43
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
/*function showMagicians(magicians){
    magicians.forEach(magician => {
        console.log(magician);
     });
 }
 function makeGreat(magicians){
     let greatMagicians =[];
     for (let i=0; i<magicians.length; i++){
         greatMagicians.push("The great "+magicians[i]);
     }
     return greatMagicians;
 }
 let magicianNames = ["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"];
 let greatMagicians=makeGreat([...magiciansNames]);
 console.log("     Orignal Magicians:");
 showMagicians(magiciansNames);
 console.log("     Great Magicians:");
 showMagicians(greatMagicians)*/
 
//==================
// Question 44
// 44. Sandwiches: Write a  function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
/*function makeSandwich(...items) {
         console.log("Making a Sandwich with:", items.join(", "));
    }  
//  Call the function with different numbers of arguments
    makeSandwich("Tamato", "Cheese", "Lettuce.");
    makeSandwich("Turkey", "Olives.");
    makeSandwich("Hum", "Mayo.");*/
   

//====================
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
/*function carInfo(manufacturer,model, ...arbitrary){
        let carObject = {
             manufacturer: manufacturer,
            model: model
        };
         for (let i = 0; i < arbitrary.length; i += 2) {
            let key = arbitrary[i];
             let value = arbitrary[i + 1];
            carObject[key] = value;
        }
        return carObject;
     }
    let myCar = carInfo('Toyota', 'Corolla', 'color', 'blue', 'year', 2021);
     console.log(myCar);*/
