const container = document.createElement('div');
container.classList.add('users-container');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(function (users) {
        const divInfo = document.createElement('div');
        divInfo.classList.add('div-users-info');
        for (const user of users) {
            // for (const userKey in user.address) {
            //     const address = user.address[userKey];
            //     const p = document.createElement('p');
            //     p.innerText = address;
            //     divInfo.appendChild(p);
            //
            // }



            divInfo.innerHTML = `
    <h2>${user.id} - ${user.name}</h2>
    <p>Username: ${user.username}</p>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
    <p>Website: ${user.website}</p>

    <h3>Address:</h3>
    <p>${address}</p>

    <h4>Geo:</h4>
    <p>Lat: ${user.address.geo.lat}</p>
    <p>Lng: ${user.address.geo.lng}</p>

    <h3>Company:</h3>
    <p>${user.company.name}</p>
    <p>${user.company.catchPhrase}</p>
    <p>${user.company.bs}</p>
`;
            container.appendChild(divInfo);
        }
    })
document.body.appendChild(container);
