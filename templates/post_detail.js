document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('commentInput');
    const commentsSection = document.querySelector('.comments');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const commentText = commentInput.value.trim();
        if (commentText) {
            // 创建新的评论元素
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<p><strong>你:</strong> ${commentText}</p>`;
            
            // 添加渐入动画效果
            newComment.style.opacity = '0';
            commentsSection.appendChild(newComment);
            setTimeout(() => {
                newComment.style.transition = 'opacity 0.5s';
                newComment.style.opacity = '1';
            }, 100);

            // 清空输入框
            commentInput.value = '';
        }
    });
});