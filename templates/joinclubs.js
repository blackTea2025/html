document.addEventListener('DOMContentLoaded', function () {
    const joinButtons = document.querySelectorAll('.join-btn');
    const feedback = document.getElementById('feedback');

    joinButtons.forEach(button => {
        button.addEventListener('click', function () {
            const clubName = this.getAttribute('data-club');
            feedback.textContent = `正在加入 ${clubName}...`;
            feedback.classList.remove('hidden');

            setTimeout(() => {
                feedback.textContent = `你已经成功加入 ${clubName}！`;
            }, 2000);
        });
    });
});
