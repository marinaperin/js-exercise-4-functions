// Exercise 1
/*
function wordLengthChecker (word1, word2){
    let word1Length = word1.length;
    let word2Length = word2.length;
    if (word1Length === word2Length){
        console.log(word1, word2);
    }else if (word1Length > word2Length){
        console.log(word1);
    }else {
        console.log(word2)
    }
}

const userWord1 = prompt(`Pick a word`);
const userWord2 = prompt(`Pick another word`);

wordLengthChecker(userWord1, userWord2);

// Exercise 2

function wordReverser(wordToReverse){
    let reversedWord = ``;
    for(let i = wordToReverse.length -1; i >= 0; i--){
        reversedWord += wordToReverse[i]; 
    }
    return reversedWord;
}

const originalWord = prompt(`Pick a word to reverse`);
const userReversedWord = wordReverser(originalWord);

console.log(userReversedWord);

if (originalWord === userReversedWord){
    alert(`This word is a palyndrome`);
}

// Exercise 3

function arrayMixer (it1, it2, it3, it4, it5, it6, it7, it8){
    const array1 = [it1, it2, it3, it4];
    const array2 = [it5, it6, it7, it8];
    const mixedArrays = [array1[0], array2[0], array1[1], array2[1], array1[2], array2[2], array1[3], array2[3]];
    return mixedArrays;
}

const elements = arrayMixer(1, 2, 3, 4, 'a', 'b', 'c', 'd');
console.table(elements);
*/
// Exercise 4

const apple1 = {
    variety: 'Fuji',
    weight: 100,
    diameter: 9,
}
const apple2 = {
    variety: 'Gala',
    weight: 150,
    diameter: 14,
}
const apple3 = {
    variety: 'Granny Smith',
    weight: 200,
    diameter: 16,
}
const apple4 = {
    variety: 'Red',
    weight: 120,
    diameter: 13,
}
const apple5 = {
    variety: 'Pink Lady',
    weight: 80,
    diameter: 8,
}
const apple6 = {
    variety: 'Green',
    weight: 100,
    diameter: 13,
}
const apple7 = {
    variety: 'Yellow',
    weight: 130,
    diameter: 14,
}
const apple8 = {
    variety: 'Cotogna',
    weight: 80,
    diameter: 8,
}
const apple9 = {
    variety: 'Melina',
    weight: 90,
    diameter: 9,
}
const apple10 = {
    variety: 'Cameo',
    weight: 110,
    diameter: 12,
}

const apples = [{apple1}, {apple2}, {apple3}, {apple4}, {apple5}, {apple6}, {apple7}, {apple8}, {apple9}, {apple10}];

let totalWeight;

function appleWeightTotal (){
    
}
