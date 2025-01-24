const historyList = document.getElementById('history-list');

const userHistory = [];

const loadHistory = () => {
    historyList.innerHTML = '';
    if (userHistory.length === 0) {
        historyList.innerHTML = '<p>暂无历史记录，快去发布分享吧！</p>';
    } else {
        userHistory.forEach((item) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.content}</p>
            `;
            historyList.appendChild(historyItem);
        });
    }
};

// 初始化加载历史记录
loadHistory();
