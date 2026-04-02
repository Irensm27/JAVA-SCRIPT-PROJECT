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
        <p>User ID: ${post.userId}</p>
        <p>Post ID: ${post.id}</p>
        <h3> ${post.title}</h3>
        <p> ${post.body}</p>
            `;
        postDetailsContainer.appendChild(postDetDiv);


            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => res.json())
            .then(function (comments) {
                const commentContainer = document.createElement('div');
                commentContainer.classList.add('commentContainer');
                const h3Comments = document.createElement('h3');
                h3Comments.innerText = 'Comments';
                commentContainer.append(h3Comments);
                for (const comment of comments) {
                    console.log(comment);
                const commentsDiv = document.createElement('div');
                commentsDiv.classList.add('commentDiv');
                commentsDiv.innerHTML =`
                            <h4>${comment.name}</h4>
                            <p>${comment.body}</p>
                            <small>${comment.email}</small>
                        `;


                    commentContainer.append(commentsDiv);


            }      postDetailsContainer.appendChild(commentContainer);
            })
    })

document.body.appendChild(postDetailsContainer);
