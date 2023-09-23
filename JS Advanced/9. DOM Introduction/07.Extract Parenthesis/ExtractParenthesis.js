function extract(content) {
    let elementToExtractFrom = document.getElementById(content);

    let regex = /\((?<word>[^\(]+)\)/g;
    let text = elementToExtractFrom.textContent;

    let arrayOfMatches = [];

    let match = regex.exec(text);
    while (match !== null) {

        arrayOfMatches.push(match.groups.word);
        match = regex.exec(text);

    }

    return arrayOfMatches.join('; ');
}