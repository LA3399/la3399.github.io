// 等待整个页面的HTML加载完成后再执行代码
document.addEventListener('DOMContentLoaded', function() {

    // 获取页面上的元素
    const searchEngineSelect = document.getElementById('search-engine');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // 定义一个执行搜索的函数
    function performSearch() {
        const query = searchInput.value; // 获取输入框里的内容
        if (query.trim() === '') {
            // 如果输入为空，则不进行任何操作
            return;
        }

        const searchEngineURL = searchEngineSelect.value; // 获取选择的搜索引擎URL
        const finalURL = searchEngineURL + encodeURIComponent(query); // 拼接成最终的搜索网址

        window.open(finalURL, '_blank'); // 在新标签页中打开搜索结果
    }

    // 当点击“搜索”按钮时，执行搜索函数
    searchButton.addEventListener('click', performSearch);

    // 当在输入框中按下回车键时，也执行搜索函数
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

});
/* --- 新增的折叠功能逻辑 --- */

// 1. 找到所有我们标记为“开关”的标题
const collapsibleTitles = document.querySelectorAll('.category-title');

// 2. 遍历每一个标题
collapsibleTitles.forEach(title => {

    // 3. 为每个标题添加一个点击事件监听器
    title.addEventListener('click', function() {

        // 当标题被点击时，切换它自己的 'is-active' class (用于改变 +/- 图标)
        this.classList.toggle('is-active');

        // 找到紧跟在标题后面的那个“内容区”元素
        const content = this.nextElementSibling;

        // 为内容区切换 'is-open' class
        // 如果有 'is-open'，内容就展开；如果没有，就收起
        content.classList.toggle('is-open');

    });
});