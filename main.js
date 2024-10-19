const sidebarLink = document.querySelectorAll('.sidebar__list a')
 
 function linkColor(){
     sidebarLink.forEach(l => l.classList.remove('active-link'))
     this.classList.add('active-link')
 }
 
 sidebarLink.forEach(l => l.addEventListener('click', linkColor))




document.addEventListener('click', (event) => {
    const likeDislikeDiv = event.target.closest('.like-dislike');
    if (!likeDislikeDiv) return; 

    const upvote = likeDislikeDiv.querySelector('.upvote');
    const downvote = likeDislikeDiv.querySelector('.downvote');
    const span = likeDislikeDiv.querySelector('span');

    const isUpvoteClicked = likeDislikeDiv.classList.contains('highlight-upvote');
    const isDownvoteClicked = likeDislikeDiv.classList.contains('highlight-downvote');

    if (event.target === upvote) {
        if (!isUpvoteClicked) {
            likeDislikeDiv.classList.add('highlight-upvote');
            likeDislikeDiv.classList.remove('highlight-downvote');
            span.style.color = 'white';
        } else {
            likeDislikeDiv.classList.remove('highlight-upvote');
            span.style.color = '';
        }
    }

    if (event.target === downvote) {
        if (!isDownvoteClicked) {
            likeDislikeDiv.classList.add('highlight-downvote');
            likeDislikeDiv.classList.remove('highlight-upvote');
            span.style.color = 'white';
        } else {
            likeDislikeDiv.classList.remove('highlight-downvote');
            span.style.color = '';
        }
    }
});

