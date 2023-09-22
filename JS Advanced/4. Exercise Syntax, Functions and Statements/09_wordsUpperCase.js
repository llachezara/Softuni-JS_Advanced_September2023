function convertWordsToUpperCase(sentenceString) {
    let regex = /[\W]+/g;

    let wordsArray = sentenceString
        .split(regex)
        .filter((el) => el !== '')
        .map(element => element.toUpperCase());

    console.log(wordsArray.join(', '));
}
convertWordsToUpperCase('Hi, how are you?!')