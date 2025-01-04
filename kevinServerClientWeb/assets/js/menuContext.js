// 单独使用(见homepage.js导入)
const iconTagContext = `
<a id="menuLink" href="main.html">
<img id="menuIcon" src="../image/icons/icon.jpg" alt="主页图标">
</a>
`;
const menuHTML = `
<div id="links">
            <div id="navigation">
                <a class="subTitle" href="introduce.html">介绍</a>
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
        ${iconTagContext}
</div>
`;