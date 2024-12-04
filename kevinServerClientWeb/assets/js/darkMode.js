const styleTag = document.getElementsByTagName("style");

function nightModeCompare() {
     if (clientHour >= 8 && clientHour < 17) { // Daytime
        bodyClass.add("nightMode");
        console.log("夜间模式状态: 开启");
    } else { // Nighttime
        bodyClass.remove("nightMode");
        console.log("夜间模式状态: 关闭")
    }
}
nightModeCompare();