function solve() {
  let namingConvention = document.getElementById('naming-convention').value;
  let textFromTextEl = document.getElementById('text').value;

  let arrayOfWords = textFromTextEl.toLowerCase().split(' ');

  let resultText = '';
  if (textFromTextEl === '') {

    resultText = "Error!";
    let resultElement = document.getElementById('result');
    resultElement.textContent = resultText;
    return;
  }


  if (namingConvention === 'Camel Case') {

    let lengthOfArrayWithWords = arrayOfWords.length;
    for (let i = 1; i < lengthOfArrayWithWords; i++) {
      let currWord = arrayOfWords[i];
      let newWord = currWord.substring(0, 1).toUpperCase() + currWord.substring(1).toLowerCase();

      arrayOfWords[i] = newWord;
    }

    resultText = arrayOfWords.join('');

  } else if (namingConvention === "Pascal Case") {

    let lengthOfArrayWithWords = arrayOfWords.length;
    for (let i = 0; i < lengthOfArrayWithWords; i++) {
      let currWord = arrayOfWords[i];
      let newWord = currWord.substring(0, 1).toUpperCase() + currWord.substring(1).toLowerCase();

      arrayOfWords[i] = newWord;
    }

    resultText = arrayOfWords.join('');

  } else {
    resultText = "Error!";
  }


  let resultElement = document.getElementById('result');
  resultElement.textContent = resultText;

}