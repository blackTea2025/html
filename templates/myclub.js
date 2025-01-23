// 等待页面加载完成后执行
document.addEventListener("DOMContentLoaded", function() {

    // 1. 移除社团功能
    var removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var clubItem = this.parentElement;
            clubItem.remove();
        });
    });

    // 2. 添加新社团功能
    var addClubForm = document.getElementById('addClubForm');
    var clubList = document.querySelector('.club-list');
    var feedback = document.getElementById('feedback');

    addClubForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var newClubName = document.getElementById('newClub').value;

        var newClubItem = document.createElement('li');
        newClubItem.classList.add('club-item');
        newClubItem.innerHTML = `${newClubName} <button class="remove-btn">移除</button>`;
        newClubItem.querySelector('.remove-btn').addEventListener('click', function() {
            newClubItem.remove();
        });
        clubList.appendChild(newClubItem);
        feedback.textContent = `社团 "${newClubName}" 已成功加入！`;
        feedback.classList.remove('hidden');

        // 重置表单输入框
        addClubForm.reset();

        // 3秒后隐藏反馈消息
        setTimeout(function() {
            feedback.classList.add('hidden');
        }, 3000);
    });

    // 3. 社团详情模态框功能
    var clubModal = document.getElementById('clubModal');
    var modalContent = document.getElementById('clubDetails');
    var closeModal = document.querySelector('.modal .close');

    // 为每个社团项添加点击事件，显示模态框
    document.querySelectorAll('.club-item').forEach(function(clubItem) {
        clubItem.addEventListener('click', function() {
            var clubName = this.textContent.replace("移除", "").trim();
            modalContent.textContent = `社团 "${clubName}" 的详细信息即将上线！`;
            clubModal.style.display = 'block';
        });
    });
    // 点击模态框关闭按钮关闭模态框
    closeModal.addEventListener('click', function() {
        clubModal.style.display = 'none';
    });

    // 点击模态框外部区域也关闭模态框
    window.addEventListener('click', function(event) {
        if (event.target == clubModal) {
            clubModal.style.display = 'none';
        }
    });

    // 4. 移动端汉堡菜单功能（考虑做不做）
    var hamburgerMenu = document.getElementById('hamburgerMenu');
    var navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });
});
