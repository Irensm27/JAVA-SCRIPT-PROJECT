const containerName = document.createElement('div');
containerName.classList.add('containerName');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(function (users) {
        for (const user of users) {
            const divName = document.createElement('div');
            divName.classList.add('div-name');
            const buttonDetails = document.createElement('button');
            buttonDetails.classList.add('buttonDetails');
            buttonDetails.innerHTML = `<a href="user-details.html?userId=${user.id}">More </a>`

            divName.innerHTML =  `<h3>${user.id}. ${user.name}</h3>`;
            divName.appendChild(buttonDetails);
            containerName.appendChild(divName);

        }
    });
document.body.appendChild(containerName);

