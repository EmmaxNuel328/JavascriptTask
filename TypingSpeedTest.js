const startTime = Date.now();

function getTimeTakenPerSeconds(sentenceToType,userInput){
let text = sentenceToType.toLowerCase();
let input = userInput.toLowerCase();
const endTime = Date.now();
const timeElapsed = endTime - startTime;
const e = timeElapsed/1000;
return Math.floor(e);
}


function getTimeTakenPerMinute(sentenceToType,userInput){
const minute = getTimeTakenPerSeconds(sentenceToType,userInput)/60;
return minute;
}



function getWordsPerMinute(sentenceToType,userInput){
const minute = getTimeTakenPerSeconds(sentenceToType,userInput)/60;
const WordsPerMinutes =  userInput.length / minute;
return WordsPerMinutes;

}



function getAccuracyPercentage(sentenceToType,userInput){
const minute = getTimeTakenPerSeconds(sentenceToType,userInput)/60;
const WordsPerMinutes =  userInput.length / minute;
let text = sentenceToType.toLowerCase();
let input = userInput.toLowerCase();
const eachWordForUserinput = userInput.split(" ");
const eachWordForText = text.split(" ");
let numberOfCorrectWords = 0;
let accuracy = 0;
for(words of eachWordForUserinput){
for(wordsForText of eachWordForText){
if(words == wordsForText){
numberOfCorrectWords += 1;
}
}
}
console.log(numberOfCorrectWords);
accuracy = numberOfCorrectWords / eachWordForText.length * 100;
return accuracy;

}




let sentence = "I AM EMMANUEL";
const prompt = require('prompt-sync')();
console.log(sentence);
let userInput = prompt("type: ");
console.log("Seconds: ",getTimeTakenPerSeconds(sentence,userInput));
console.log("Minutes: ",getTimeTakenPerMinute(sentence,userInput));
console.log("Words per Minutes: ",getWordsPerMinute(sentence,userInput));
console.log(getAccuracyPercentage(sentence,userInput));