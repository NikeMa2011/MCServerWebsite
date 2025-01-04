const styleTag = document.getElementById("darkModeStyleTag");

function nightModeCompare(op) {
    if (dayNight === "夜晚") {
        styleTag.innerHTML = "@import url(\"../css/nightMode.css\");";
        console.log("夜间模式状态: 开启");
    } else {
        styleTag.remove();
        console.log("夜间模式状态: 关闭");
    }
}
nightModeCompare();