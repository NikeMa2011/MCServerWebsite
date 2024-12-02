const menu = document.getElementById("menu");

function addMenu() {
    menu.innerHTML = `
    <div id="links">
            <div id="navigation">
                <div id="subArea">
                    <p>导航</p>
                    <a href="contributors.html">🎈贡献者名单</a>
                    <a href="usefulLinks.html">🔗有用的链接</a>
                </div>
                <div id="subArea">
                    <p>维护</p>
                    <a href="codeFormat.html">💻代码格式</a>
                </div>
            </div>
        </div>
        <a href="main.html">
            <img id="menuIcon" src="../image/icons/icon.jpg" alt="主页图标">
        </a>
    `;
// 以后请在这修改菜单内容 此脚本会自动为网页加上
}

addMenu();