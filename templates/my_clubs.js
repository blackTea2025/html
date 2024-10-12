// 高亮当前页面的导航链接
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.backgroundColor = '#555';
        }
    });
});

// 切换移动端导航栏
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
});

// 动态添加社团到列表
const addClubForm = document.getElementById('addClubForm');
const clubList = document.querySelector('.club-list');

addClubForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newClubName = document.getElementById('newClub').value.trim();
    if (newClubName !== '') {
        const newClubItem = document.createElement('li');
        newClubItem.textContent = newClubName;
        clubList.appendChild(newClubItem);
        document.getElementById('newClub').value = '';
    }
});

// 模态窗口功能
const modal = document.getElementById('clubModal');
const closeModal = document.getElementsByClassName('close')[0];
const clubDetails = document.getElementById('clubDetails');

document.querySelectorAll('.club-list li').forEach(club => {
    club.addEventListener('click', () => {
        modal.style.display = 'block';
        clubDetails.textContent = `详细信息：${club.textContent}`;
    });
});

closeModal.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
