const styleTag = document.getElementById("darkModeStyle");

function nightModeCompare() {
     if (clientHour >= 8 && clientHour < 17) { // Daytime
        styleTag.innerHTML = "@import(\"../\"css/darkMode.css\")";
        console.log("夜间模式状态: 开启");
    } else { // Nighttime
        styleTag.innerHTML = null;
        console.log("夜间模式状态: 关闭")
    }
}
nightModeCompare();