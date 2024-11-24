let str = "to the new to moon";
// ["moon", "new", "the", "to", "to"]
let splittedStr = str.split(" ").sort();

let maxCount = 0;
let mostFrequentWord = "";
let currentWord = splittedStr[0];
let currentCount = 1;

for (let i = 1; i < splittedStr.length; i++) {
    console.log(splittedStr[i], currentWord, splittedStr[i] === currentWord);
    // to == to  => true
    if (splittedStr[i] === currentWord) {
        currentCount++;
    } else {
        // 1 > 1 => false
        if (currentCount > maxCount) {
            maxCount = currentCount;// 1
            mostFrequentWord = currentWord; // moon 
        }
        currentWord = splittedStr[i]; // to
        currentCount = 1; // 1 
    }
}

// Check the last word
if (currentCount > maxCount) {
    maxCount = currentCount;
    mostFrequentWord = currentWord;
}

console.log("The most frequent word is:", mostFrequentWord, "with a count of:", maxCount);