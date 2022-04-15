
//### Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = ('Aleix');

// 1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = ('Iker');

//	1.4 Print `"The navigator's name is YYYY"`.

console.log(`The driver's name is ${hacker2}`);


// Iteration 2: Conditionals

/*2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
<br>
    - `The driver has the longest name, it has XX characters.` or <br>
    - `It seems that the navigator has the longest name, it has XX characters.` or <br>
    - `Wow, you both have equally long names, XX characters!`.
*/

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`); 
} 
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`); 
}

// Iteration 3: Loops

/*3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
i.e. `"J O H N"` */

// Solution 1
console.log(hacker1.toUpperCase().split("").join(" "));


// Solution 2

let driverName = " ";

for (let characters = 0; characters < hacker1.length; characters++) {
    driverName += hacker1[characters].toUpperCase() + " ";
}

console.log (driverName.trim());


/*3.2 Print all the characters of the navigator's name, in reverse order. 
i.e. `"nhoJ"`
*/

// Solution 1
console.log(hacker2.split('').reverse().join(''));


// Solution 2 

let navigatorName = "";

for (let characters = hacker2.length - 1; characters >= 0; characters--) {
  navigatorName += hacker2[characters];
}

console.log(navigatorName);


/*
3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
  - `The driver's name goes first.` <br>
  - `Yo, the navigator goes first definitely.` <br>
  - `What?! You both have the same name?`
*/

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 

/*
### Bonus Time!

#### Bonus 1:
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 paragraphs. Store the text in a variable type of string.
  - Make your program count the number of words in the string.
*/

const paragraph ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit sapien sed blandit euismod. Nulla feugiat est vel lorem accumsan pharetra. Sed vel pellentesque risus, sed sagittis leo. Morbi non tortor felis. Fusce pharetra, felis ac auctor posuere, libero ligula convallis turpis, vel convallis nulla augue vitae ligula. Etiam eget semper ex. Donec suscipit, lacus sed condimentum suscipit, diam ex mattis dolor, sed consequat massa mi quis nunc. Proin elementum, nisl at pharetra lobortis, sapien velit lobortis neque, ut luctus nisi augue a purus.

Mauris tempor vehicula velit, id vulputate quam. Nulla ac commodo nulla. Nullam volutpat velit id lorem tincidunt, non ultricies elit pharetra. Curabitur fringilla ipsum lacinia nisi aliquet blandit. Donec vitae metus sit amet turpis cursus pharetra et eget eros. Donec magna velit, viverra in erat molestie, cursus laoreet orci. Pellentesque pretium fermentum fermentum. Phasellus laoreet convallis ipsum. Pellentesque risus sem, lobortis non massa id, suscipit vehicula odio. Cras pretium risus sit amet dapibus iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum lacus eget bibendum fermentum.

Proin in enim in ex facilisis pellentesque sed eu orci. Nulla vulputate volutpat venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit amet tellus erat. Phasellus maximus, nibh et bibendum porta, augue enim porttitor velit, et tincidunt nisi ante viverra sem. Aliquam eget nisi lorem. Praesent lobortis eros tincidunt accumsan blandit. Morbi a sapien odio. Nam volutpat lectus lectus, iaculis placerat purus ultricies ac. Morbi iaculis ullamcorper purus, cursus finibus ante vulputate at. Etiam blandit sapien dolor, eu finibus nisi sollicitudin sed. Ut vitae pulvinar orci, et ultricies odio. In aliquet sit amet felis ut pellentesque. Nullam a est libero. In mattis tortor sit amet faucibus feugiat. "

const totalWordsString =  paragraph.length;

console.log (totalWordsString);

/* - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears. */

const searchTerm = "et";
const etTotal = paragraph.indexOf(searchTerm);

console.log(etTotal);

/*
#### Bonus 2:
Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wPalindromeikipedia.org/wiki/). Here are some examples of palindromes: 
  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
  */

  let phraseToCheck = "Amor, Roma";

  phraseToCheck = phraseToCheck.toLowerCase().replace(/[,!.?]/g, " ");
   // console.log(phraseToCheck);

  let reversedPhraseToCheck = phraseToCheck.split('').reverse().join('');
// console.log(reversedPhraseToCheck);

  if (phraseToCheck === reversedPhraseToCheck) {
      console.log (`${phraseToCheck} : Is a palindrome`);
  } else {
    console.log (`${phraseToCheck} : Is not a palindrome`);
  }




