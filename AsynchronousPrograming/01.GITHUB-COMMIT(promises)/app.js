function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    const container = document.getElementById('commits');
    container.innerText = '';

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then((response) => {
        if (response.status < 400) {
            return response.json();
        }

        throw({
            status: response.status,
            statusText: response.statusText
        });
    })
    .then((data) => {
        data.forEach(element => {
            let li = document.createElement('li');
            li.innerText = `${element.commit.author.name}: ${element.commit.message}`
            container.appendChild(li);
        });
    })
    .catch((err) => {
        let li = document.createElement('li');
            li.innerText = `Error: ${err.status} (${err.statusText})`;
            container.appendChild(li);
    })
}