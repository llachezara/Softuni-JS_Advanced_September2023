function loadCommits() {
    const usernameEl = document.getElementById('username');
    const repositoryElwithName = document.getElementById('repo');
    const ulWithCommits = document.getElementById('commits');

    // const response = fetch(`https://api.github.com/repos/${usernameEl.value}/${repositoryElwithName.value}/commits`);

    const response = fetch(`https://api.github.com/repos/bla/bla/commits`);

    response
        .then((response) => {
            if (response.status !== 200) {
                throw new Error(`${response.status} (${response.statusText})`)
            }return response.json()
        })
        .then((data) =>
            data.forEach(obj => {
                const newLi = document.createElement('li');
                newLi.textContent = `${obj.commit.author.name}:${obj.commit.message}`;
                ulWithCommits.appendChild(newLi);
            }))
        .catch((error) => {
            const newLi = document.createElement('li');
            newLi.textContent = error;
            ulWithCommits.appendChild(newLi);
        });



}