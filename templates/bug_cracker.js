document.addEventListener('DOMContentLoaded', function () {
    const bugForm = document.getElementById('submitBugForm');
    const bugsContainer = document.getElementById('bugs-container');
    const analysisContainer = document.getElementById('analysis-container');

    // 从后端加载所有Bug和分析
    function loadBugs() {
        fetch('/api/bugs')  // 假设后端有一个 /api/bugs 的API返回bug及分析数据
            .then(response => response.json())
            .then(bugs => {
                bugsContainer.innerHTML = '';  // 清空当前Bug列表
                bugs.forEach(bug => {
                    const bugItem = document.createElement('div');
                    bugItem.classList.add('bug-item');
                    bugItem.innerHTML = `
                        <h3>${bug.title} <span style="font-size:0.8rem; color: #028090;">(${bug.language})</span></h3>
                        <p>${bug.description}</p>
                        <button class="view-analysis" data-bug-id="${bug.id}">查看分析</button>
                    `;

                    // 将Bug添加到容器中
                    bugsContainer.appendChild(bugItem);

                    // 为每个“查看分析”按钮添加事件
                    bugItem.querySelector('.view-analysis').addEventListener('click', function () {
                        const bugId = this.getAttribute('data-bug-id');
                        viewAnalysis(bugId);
                    });
                });
            });
    }

    // 提交Bug表单并发送到后端
    bugForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const language = document.getElementById('language').value;

        // 发送数据到后端API
        fetch('/api/bugs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, language })
        }).then(response => response.json())
          .then(data => {
              if (data.success) {
                  // 重新加载Bug列表
                  loadBugs();
                  bugForm.reset();  // 清空表单
              } else {
                  console.error('Error submitting bug:', data);
              }
          });
    });

    // 查看Bug的分析
    function viewAnalysis(bugId) {
        fetch(`/api/bugs/${bugId}/analysis`)  // 获取该bug的分析内容
            .then(response => response.json())
            .then(analysis => {
                analysisContainer.innerHTML = '';  // 清空当前显示的分析
                const analysisItem = document.createElement('div');
                analysisItem.classList.add('analysis-item');
                analysisItem.innerHTML = `
                    <h4>BUG分析</h4>
                    <p>${analysis.text || '暂时没有分析内容。'}</p>
                `;
                analysisContainer.appendChild(analysisItem);
                window.scrollTo({
                    top: analysisContainer.offsetTop,
                    behavior: 'smooth'
                });
            });
    }

    // 页面加载时获取所有Bug
    loadBugs();
});
