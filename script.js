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