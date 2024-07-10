document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const postsContainer = document.getElementById('posts-container');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = postTitle.value.trim();
        const content = postContent.value.trim();

        if (title && content) {
            addPost(title, content);
            postForm.reset();
        }
    });

    function addPost(title, content) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        const postTitleElement = document.createElement('h3');
        postTitleElement.textContent = title;

        const postContentElement = document.createElement('p');
        postContentElement.textContent = content;

        postElement.appendChild(postTitleElement);
        postElement.appendChild(postContentElement);

        postsContainer.appendChild(postElement);
    }
});