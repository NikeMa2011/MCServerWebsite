const title = document.getElementById("title");

// 所有变量都已定义或传入
console.log("页面以前是否刷新: " + sessionStorage.getItem("Loaded"));
if (!sessionStorage.getItem("Loaded")) {
    title.innerHTML = `<div id="hiddenTitle"></div>
        <div id="blurTitle">
            <p id="welcomeTitle" class="middle">欢迎来到 MIS 的 MC 小家!</p>
        </div>
    `;
    sessionStorage.setItem("Loaded", true);
    console.log("加载背景函数");
    run();
}
function run() {
    const hiddenTitle = document.getElementById("hiddenTitle");
    const blurTitle = document.getElementById("blurTitle");
    const welcomeTitle = document.getElementById("welcomeTitle");
    const context = document.getElementById("context");

    let welcomeTitleColor = welcomeTitle.style.color;

    let backgroundString;
    let prefix = "../image/backgrounds/";

    const backgroundNumList = {day: 9, twilight: 3, night: 2};

    function dayNightCompare() {
        if (dayNight == "白天") {
            backgroundString = `${prefix}亮${setRandomNum(backgroundNumList.day)}.jpg`;
            welcomeTitleColor = "#fff";
        } else if (dayNight == "早晨" || dayNight == "黄昏") {
            backgroundString = `${prefix}黄${setRandomNum(backgroundNumList.twilight)}.jpg`;
            welcomeTitleColor = "#fff";
        } else if (dayNight == "夜晚") {
            backgroundString = `${prefix}暗${setRandomNum(backgroundNumList.night)}.jpg`;
            welcomeTitleColor = "#000";
        } else {
            throw new Error("dayNight 值错误:" + dayNight);
        }
    }
    function setRandomNum(option) {
        return Math.floor((Math.random() * option) + 1);
    }
    dayNightCompare();
    console.log("背景图片链接: " + backgroundString)
    blurTitle.style.backgroundImage = `url(\"${backgroundString}\")`;

    setTimeout(() => {
        hiddenTitle.remove();
    }, 990);
    addEventListener("mousedown", function() {
        welcomeTitle.style.animation = "disAppear 1s ease-out";
        setTimeout(() => {
            welcomeTitle.remove();
            blurTitle.style.animation = "flat 1.5s ease-out";
            setTimeout(() => {
                title.remove();
            }, 1490);
        }, 990);
    });
}
function iconTagReplace() {
    const menu = document.getElementById("menuMain");
    const iconTag = document.getElementById("menuLink");
    iconTag.remove();
    const menuContext = menu.innerHTML;
    menu.innerHTML = iconTagContext + menuContext;
}
iconTagReplace();