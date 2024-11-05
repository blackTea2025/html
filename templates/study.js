// 监听练习题按钮点击事件
document.querySelectorAll('.exercise-button').forEach(button => {
    button.addEventListener('click', function() {
        const topic = this.dataset.topic;
        displayExercises(topic);
    });
});

function displayExercises(topic) {
    const exerciseDisplay = document.getElementById('exercise-display');
    let exercises;

    // 根据不同主题选择练习题
    switch (topic) {
        case 'python':
            exercises = [
                '1. Python 基础语法',
                '2. 函数与模块',
                '3. 数据结构与算法',
            ];
            break;
        case 'javascript':
            exercises = [
                '1. JavaScript 基础知识',
                '2. DOM 操作',
                '3. 异步编程',
            ];
            break;
        case 'webdev':
            exercises = [
                '1. HTML/CSS 基础',
                '2. 前端框架',
                '3. 后端开发',
            ];
            break;
        default:
            exercises = [];
    }

    // 显示选择的练习题
    exerciseDisplay.innerHTML = `<h3>${topic.toUpperCase()} 练习题</h3><ul>${exercises.map(ex => `<li>${ex}</li>`).join('')}</ul>`;
}
