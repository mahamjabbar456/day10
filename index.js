// Question 28
let age = 66;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question 29
let favoruite_fruit = ["Mango", "Orange", "Kewi"];
if (favoruite_fruit[1] == "Orange") {
    console.log("You really like Orange.");
}
if (favoruite_fruit[2] == "orange") {
    console.log("You really like Orange.");
}
if (favoruite_fruit[0] == "Mango") {
    console.log("You really like Mango.");
}
if (favoruite_fruit.includes("Apple")) {
    console.log("You really like Apple.");
}
if (favoruite_fruit.includes("Kewi")) {
    console.log("You really like Kewi.");
}
// Question 30
let username = ["Maham", "Sabar", "admin", "Taimoor", "Daniyal"];
for (let i = 0; i < username.length; i++) {
    if (username[i] == "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username[i]},thank you for logging in again.`);
    }
}
export {};
