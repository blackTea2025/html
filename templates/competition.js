// 平滑滚动到页面特定部分
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 模拟显示报名表单
document.querySelector('.register-btn').addEventListener('click', function() {
    const form = document.createElement('div');
    form.innerHTML = `
        <div class="form-overlay">
            <div class="form-popup">
                <h3>报名表单</h3>
                <label for="name">姓名:</label>
                <input type="text" id="name" placeholder="输入你的姓名">
                <label for="email">邮箱:</label>
                <input type="email" id="email" placeholder="输入你的邮箱">
                <button id="submit-btn">提交</button>
                <button id="cancel-btn">取消</button>
            </div>
        </div>
    `;
    document.body.appendChild(form);

    document.getElementById('cancel-btn').addEventListener('click', function() {
        document.body.removeChild(form);
    });

    document.getElementById('submit-btn').addEventListener('click', function() {
        alert('报名成功！');
        document.body.removeChild(form);
    });
});
