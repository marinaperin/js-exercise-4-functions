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

