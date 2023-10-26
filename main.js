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

