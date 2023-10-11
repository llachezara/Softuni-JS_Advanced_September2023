function getArticleGenerator(articles) {
    let divElement = document.getElementById('content');
    let i = 0;

    return function () {
        let newArticle = document.createElement('article');

        if (articles[i]) {
            let currArticleText = articles[i];
            newArticle.textContent = currArticleText;
            divElement.appendChild(newArticle);
        }
        i++;
    }
}

