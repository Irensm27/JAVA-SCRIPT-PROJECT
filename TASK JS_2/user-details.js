const container = document.createElement('div');
container.classList.add('users-container');

const params = new URLSearchParams(window.location.search);
const userId = params.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(function (user) {
            const divInfo = document.createElement('div');
            divInfo.classList.add('div-users-info');
            divInfo.innerHTML = `
                <h2>${user.id} ${user.name}</h2>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                  <h3>Address:</h3>
                <p>${user.address.street}, ${user.address.suite}</p>
                <p>${user.address.city}, ${user.address.zipcode}</p>
                   <h4>Geo:</h4>
                <p>Lat: ${user.address.geo.lat}</p>
                <p>Lng: ${user.address.geo.lng}</p>
               
                <p>Phone: ${user.phone}</p>
                <p>Website: ${user.website}</p>

                <h3>Company:</h3>
                <p>${user.company.name}</p>
                <p>${user.company.catchPhrase}</p>
                <p>${user.company.bs}</p>
            `;
            container.appendChild(divInfo);

    })
document.body.appendChild(container);
