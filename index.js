const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// create function titleCased

function titleCased() {
  // use map method to iterate through array and manipulate values of each string item

  return tutorials.map((sentenceItem) => {
    // console.log(sentenceItem);

    // get individual words from sentences

    const wordsInSentence = sentenceItem.split(" ");

    // capitalize each word in sentence
    const capitalizedWordsInSentence = wordsInSentence.map((word) => {

      //capitalize first letter, grab first letter and join it with remaining letters
     return `${word[0].toUpperCase()}${word.slice(1)}` ;
    });

    // console.log(capitalizedWordsInSentence);

    // need to join words in sentence, combine strings as single string

    const capitalizedTitleCaseSentences = capitalizedWordsInSentence.join(' ');
    console.log('capitalizedTitleCaseSentences: ', capitalizedTitleCaseSentences);

    return capitalizedTitleCaseSentences;

    // console.log(wordsInSentence);
  });


}

titleCased();

//   tutorials.map((string) => {

//   // isolate the words in each string item

//   const strWords = tutorials.split(' ');

//   console.log(tutorial);
//   const tutorialTitleCase = tutorial[0].toUpperCase();

// console.log(tutorialTitleCase);
