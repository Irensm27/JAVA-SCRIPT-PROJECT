const postDetailsContainer = document.createElement('div');
postDetailsContainer.classList.add('postDetailsContainer');

const params = new URLSearchParams(window.location.search);
const postId = params.get('postId');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, )
    .then(res => res.json())
    .then(function (post) {
        console.log(post);
        const postDetDiv = document.createElement('div');
        postDetDiv.classList.add('postDetDiv');

        postDetDiv.innerHTML = ` 
        <p><b>User ID:</b> ${post.userId}</p>
        <p><b>Post ID:</b> ${post.id}</p>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
            `;
        postDetailsContainer.appendChild(postDetDiv);


            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => res.json())
            .then(function (comments) {
                const commentContainer = document.createElement('div');
                commentContainer.classList.add('commentContainer');
                for (const comment of comments) {
                const commentsDiv = document.createElement('div');
                commentsDiv.classList.add('commentDiv');
                commentsDiv.innerHTML =`
                            <h4>${comment.name}</h4>
                            <p>${comment.body}</p>
                            <small>${comment.email}</small>
                        `;
                const h2Comments = document.createElement('h2');
                h2Comments.innerText = 'Comments';

                    commentContainer.append(h2Comments, commentsDiv);


            }      postDetailsContainer.appendChild(commentContainer);
            })
    })

document.body.appendChild(postDetailsContainer);
