// 假设我们有一个全局变量来存储所有帖子数据
const allPosts = [
    { title: "帖子标题 1", content: "这是帖子内容的详细介绍..." },
    { title: "帖子标题 2", content: "这是帖子内容的详细介绍..." },
    { title: "帖子标题 3", content: "这是帖子内容的详细介绍..." },
    { title: "帖子标题 4", content: "这是帖子内容的详细介绍..." },
    { title: "帖子标题 5", content: "这是帖子内容的详细介绍..." },
    { title: "帖子标题 6", content: "这是帖子内容的详细介绍..." },
    { title: "帖子标题 7", content: "这是帖子内容的详细介绍..." },
    { title: "帖子标题 8", content: "这是帖子内容的详细介绍..." },
    { title: "帖子标题 9", content: "这是帖子内容的详细介绍..." },
    { title: "帖子标题 10", content: "这是帖子内容的详细介绍..." },
    // 可以添加更多帖子
];

let currentPage = 1;
const postsPerPage = 3;

// 加载帖子函数
function loadPosts(page) {
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    const postsToDisplay = allPosts.slice(start, end);

    const postsSection = document.getElementById('posts-section');
    postsSection.innerHTML = '<h2>最新帖子</h2>'; // 重置帖子区域

    if (postsToDisplay.length === 0) {
        postsSection.innerHTML += '<p>没有更多帖子。</p>';
        return;
    }

    postsToDisplay.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <a href="post_detail.html" class="read-more">阅读更多</a>
        `;
        postsSection.appendChild(postDiv);
    });
}

// 搜索功能
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredPosts = allPosts.filter(post => post.title.toLowerCase().includes(query));

    const postsSection = document.getElementById('posts-section');
    postsSection.innerHTML = '<h2>搜索结果</h2>'; // 重置帖子区域

    if (filteredPosts.length === 0) {
        postsSection.innerHTML += '<p>没有找到相关帖子。</p>';
        return;
    }

    filteredPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <a href="post_detail.html" class="read-more">阅读更多</a>
        `;
        postsSection.appendChild(postDiv);
    });
});

// 分页功能
document.getElementById('prevPage').addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        loadPosts(currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', function() {
    if (currentPage * postsPerPage < allPosts.length) {
        currentPage++;
        loadPosts(currentPage);
    }
});

// 初始加载
loadPosts(currentPage);
