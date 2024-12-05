const styleTag = document.getElementById("darkModeStyleTag");

console.log(styleTag);
function nightModeCompare() {
     if (clientHour >= 8 && clientHour < 17) { // Daytime
        styleTag.innerHTML = null;
        console.log("夜间模式状态: 关闭");
    } else { // Nighttime
        styleTag.innerHTML = "@import url(\"../css/nightMode.css\");";
        console.log("夜间模式状态: 开启");
    }
}
nightModeCompare();