const title = document.getElementById("title");

sessionStorage.setItem("Loaded", false);
console.log("页面以前是否刷新: " + sessionStorage.getItem("Loaded"));
if (sessionStorage.getItem("Loaded") != true) {
    title.innerHTML = `<div id="hiddenTitle"></div>
        <div id="blurTitle">
            <p id="welcomeTitle" class="middle">欢迎来到 MIS 的 MC 小家!</p>
        </div>
    `;
    sessionStorage.getItem("Loaded", true);
    console.log("加载背景函数");
    run();
}
function run() {
    const hiddenTitle = document.getElementById("hiddenTitle");
    const blurTitle = document.getElementById("blurTitle");
    const welcomeTitle = document.getElementById("welcomeTitle");
    const context = document.getElementById("context");

    let welcomeTitleColor = welcomeTitle.style.color;

    let randomNum;
    let backgroundImageString;
    let prefix = "../image/backgrounds/";

    const backgroundImageNumList = [
        day = 9,
        twilight = 3,
        night = 2
    ];
    function dayNightCompare() {
        if (dayNight == "白天") {
            backgroundImageString = `${prefix}亮${setRandomNum(night)}.jpg`;
            welcomeTitleColor = "#fff";
        } else if (dayNight == "早晨" || dayNight == "黄昏") {
            backgroundImageString = `${prefix}黄${setRandomNum(night)}.jpg`;
            welcomeTitleColor = "#fff";
        } else if (dayNight == "夜晚") {
            backgroundImageString = `${prefix}暗${setRandomNum(night)}.jpg`;
            welcomeTitleColor = "#000";
        } else {
            throw new Error("dayNight 值错误:" + dayNight);
        }
    }
    function setRandomNum(option) {
        return Math.floor((Math.random() * backgroundImageNumList[option]) + 1);
    }
    dayNightCompare();
    console.log("背景图片链接: " + backgroundImageString)
    blurTitle.style = `url(\"${backgroundImageString}\")`;

    setTimeout(() => {
        hiddenTitle.hidden = true;
    }, 990);
    addEventListener("mousedown", function() {
        
    });
}