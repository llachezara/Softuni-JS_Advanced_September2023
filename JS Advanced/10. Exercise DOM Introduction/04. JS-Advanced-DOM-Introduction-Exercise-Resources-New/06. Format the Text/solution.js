function solve() {
  let textAreaValue = document.getElementById('input').value;

  let sentencesArray = textAreaValue.split('.');
  const maxSentencesInParagraph = 3;
  let counterForSentences = 0;
  let sentences = '';
  let formattedText = '';

  for (let i = 0; i < sentencesArray.length - 1; i++) {

    if (counterForSentences === maxSentencesInParagraph) {
      formattedText += '<p>' + sentences + '</p>';
      sentences = '';
      counterForSentences = 0;
    }

    if (sentencesArray[i].length >= 1) {
      sentences += sentencesArray[i] + '.';
      counterForSentences++;
    }
  
  }

  if (sentences !== '') {
    formattedText += '<p>' + sentences + '</p>';
  }

  document.getElementById('output').innerHTML = formattedText;
}