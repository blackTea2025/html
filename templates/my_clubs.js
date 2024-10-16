// 高亮当前页面的导航链接
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.backgroundColor = '#555'; // 高亮当前链接
        }
    });
});

// 切换移动端导航栏
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex'; // 切换显示
});

// 动态添加社团到列表
const addClubForm = document.getElementById('addClubForm');
const clubList = document.querySelector('.club-list');
const feedback = document.getElementById('feedback');

addClubForm.addEventListener('submit', function (e) {
    e.preventDefault(); // 阻止默认表单提交行为
    const newClubName = document.getElementById('newClub').value.trim(); // 获取输入的社团名称

    if (newClubName !== '') {
        // 创建新的社团列表项
        const newClubItem = document.createElement('li');
        newClubItem.classList.add('club-item'); // 添加类名以便样式
        newClubItem.innerHTML = `${newClubName} <button class="remove-btn">移除</button>`; // 添加移除按钮

        // 为移除按钮添加事件监听器
        newClubItem.querySelector('.remove-btn').addEventListener('click', () => {
            clubList.removeChild(newClubItem); // 移除社团
        });

        clubList.appendChild(newClubItem); // 将新社团添加到列表中
        document.getElementById('newClub').value = ''; // 清空输入框
        feedback.textContent = '社团已成功添加！'; // 反馈信息
        feedback.classList.remove('hidden'); // 显示反馈信息

        setTimeout(() => {
            feedback.classList.add('hidden'); // 3秒后隐藏反馈信息
        }, 3000);
    } else {
        feedback.textContent = '请输入社团名称！'; // 反馈错误信息
        feedback.classList.remove('hidden'); // 显示反馈信息
    }
});

// 模态窗口功能
const modal = document.getElementById('clubModal');
const closeModal = document.getElementsByClassName('close')[0];
const clubDetails = document.getElementById('clubDetails');

// 为每个社团添加点击事件，显示模态窗口
clubList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') { // 确保点击的是社团列表项
        modal.style.display = 'block'; // 显示模态窗口
        clubDetails.textContent = `详细信息：${e.target.firstChild.textContent}`; // 显示社团名称
    }
});

// 关闭模态窗口
closeModal.onclick = function() {
    modal.style.display = 'none'; // 隐藏模态窗口
};

// 点击模态窗口外部区域也可以关闭模态窗口
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'; // 隐藏模态窗口
    }
};
