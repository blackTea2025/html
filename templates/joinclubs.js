document.addEventListener('DOMContentLoaded', () => {
    const joinButtons = document.querySelectorAll('.join-btn');
    const toast = document.getElementById('toast');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const clubList = document.getElementById('clubList');

    // 加入社团按钮功能
    joinButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const btn = event.target;
            const clubName = btn.getAttribute('data-club');
            btn.disabled = true;  // 禁用按钮
            btn.innerText = '已加入';  // 改变按钮文字
            showToast(`${clubName} 加入成功！`);
        });
    });

    // 显示加入成功提示框
    function showToast(message) {
        toast.innerText = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);  // 2秒后自动隐藏提示框
    }

    // 加载更多社团功能
    loadMoreBtn.addEventListener('click', () => {
        const moreClubs = `
            <li class="club-item">
                <span>后端猎人 - 创建者：大熊</span>
                <button class="join-btn" data-club="后端猎人">加入</button>
            </li>
            <li class="club-item">
                <span>Python大师 - 创建者：老王</span>
                <button class="join-btn" data-club="Python大师">加入</button>
            </li>
        `;
        clubList.insertAdjacentHTML('beforeend', moreClubs);

        // 重新绑定新加入的按钮事件
        const newButtons = document.querySelectorAll('.club-item button:not(.initialized)');
        newButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const btn = event.target;
                const clubName = btn.getAttribute('data-club');
                btn.disabled = true;  // 禁用按钮
                btn.innerText = '已加入';  // 改变按钮文字
                showToast(`${clubName} 加入成功！`);
            });
            button.classList.add('initialized'); // 标记已经初始化过的按钮
        });
    });
});
