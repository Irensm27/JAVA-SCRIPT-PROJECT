
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(function (users) {
        for (const user of users) {
            const id = user.id;
            const name = user.name;
            const divName = document.createElement('div');
            divName.classList.add('div-name');
            divName.innerHTML =  `
        <h3>${user.id}. ${user.name}</h3>
        <a href="user-details.html?userId=${user.id}">Деталі</a>
    `;

            document.body.appendChild(divName);
        }
    });


// divName.innerText = `${id} - ${name}`;
// const buttonElement = document.createElement('button');
// buttonElement.id = 'button';
// buttonElement.innerText = 'Детальніше';
// buttonElement.onclick = function () {
//     window.location.href= `user-details.html?id=${user.id}`;
// };
// divName.append(buttonElement);