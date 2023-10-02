function encodeAndDecodeMessages() {
    let buttonsElements = document.querySelectorAll('main button');
    let encodeButtonEl = buttonsElements[0];
    let decodeButtonEl = buttonsElements[1];

    let textareaElements = document.querySelectorAll('main div textarea');
    let textareaElementForEncoding = textareaElements[0];
    let textareaElementForDecoding = textareaElements[1];

    encodeButtonEl.addEventListener('click', encodeMessage);
    function encodeMessage(event) {
        const message = textareaElementForEncoding.value;

        let decodedMessage = '';
        for (const letter of message) {
            let asciiSymbol = Number(letter.charCodeAt());
            asciiSymbol++;

            decodedMessage += String.fromCharCode(asciiSymbol);
        }

        textareaElementForDecoding.value = decodedMessage;
        textareaElementForEncoding.value = '';
    }

    decodeButtonEl.addEventListener('click', decodeMessage);
    function decodeMessage(event) {
        const message = textareaElementForDecoding.value;

        let encodedMessage = '';
        for (const letter of message) {
            let asciiSymbol = Number(letter.charCodeAt());
            asciiSymbol--;

            encodedMessage += String.fromCharCode(asciiSymbol);
        }

        textareaElementForDecoding.value = encodedMessage;
        
    }
}