const styleTag = document.getElementById("darkModeStyleTag");

function nightModeCompare(op) {
    if(!op) {
        styleTag.innerHTML = null; 
    } else if(op) {
        styleTag.innerHTML = "@import url(\"../css/nightMode.css\");";
    } else if(op = undefined) {
        if(clientHour >= 8 && clientHour < 17) { // Daytime
            styleTag.innerHTML = null;
            console.log("夜间模式状态: 关闭");
        } else { // Nighttime
            styleTag.innerHTML = "@import url(\"../css/nightMode.css\");";
            console.log("夜间模式状态: 开启");
        }
    }
}
nightModeCompare();