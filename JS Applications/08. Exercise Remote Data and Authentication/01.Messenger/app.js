function attachEvents() {
    const textareaEl = document.getElementById('messages');
    const refreshBtn = document.getElementById('refresh');
    const sumbitBtn = document.getElementById('submit');

    const authorAndContentArray = Array.from(document.querySelectorAll('#controls input[type=text]'))
    const [author, content] = authorAndContentArray;

    refreshBtn.addEventListener('click', showPreviousMessages)


    async function showPreviousMessages() {
        clearInputFieldsAndTextarea();
        const response = await fetch('http://localhost:3030/jsonstore/messenger');
        const data = await response.json();

        const arrayOfValues = Object.values(data);
        let resultText = '';
        for (const value of arrayOfValues) {

            const { author, content } = value;
            resultText += `${author}: ${content}\n`;
        }

        textareaEl.textContent = resultText.trim();
    }


    sumbitBtn.addEventListener('click', addMessage)
    async function addMessage() {

        const response = await fetch('http://localhost:3030/jsonstore/messenger',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ author: author.value, content: content.value })

            });
        //const data = await response.json();

    }

    function clearInputFieldsAndTextarea() {
        author.value = '';
        content.value = '';
        textareaEl.textContent = '';
    };
}

attachEvents();