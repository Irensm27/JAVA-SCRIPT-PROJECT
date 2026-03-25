
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(function (users) {
        for (const user of users) {
            const id = user.id;
            const name = user.name;
            const divName = document.createElement('div');
            divName.classList.add('div-name');
            divName.innerText = `${id} - ${name}`;
            const buttonElement = document.createElement('button');
            buttonElement.id = 'button';
            buttonElement.innerHTML = `<a href="user-details.html?id=${user.id}">Детальніше</a>`;
            divName.append(buttonElement);
            document.body.appendChild(divName);
        }
    });