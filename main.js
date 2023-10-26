// Exercise 1

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

// Exercise 4

