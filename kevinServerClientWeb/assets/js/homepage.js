const blurTitle = document.getElementById("blurTitle");
const welcome = document.getElementById("welcome");
const hiddenBox = document.getElementById("hiddenBox");
const context = document.getElementById("context");
// 已经在menu.js里定义了awa

// 不要写注释
const backgroundImageCounts = {
    day: 9,
    twilight: 3,
    night: 2,
};
function setBackGroundImage() {
    let randomNum;
    let prefix;
    
    switch (dayNight) {
        case "早晨":
        case "白天":
            randomNum = Math.floor(Math.random() * backgroundImageCounts.day) + 1;
            prefix = "亮";
            welcome.style.color = "#101010";
            break;
        case "黄昏":
            randomNum = Math.floor(Math.random() * backgroundImageCounts.twilight) + 1;
            prefix = "黄";
            welcome.style.color = "#ffffff";
            break;
        default:
            randomNum = Math.floor(Math.random() * backgroundImageCounts.night) + 1;
            prefix = "暗";
            welcome.style.color = "#ffffff";
            break;
    }

    return `${prefix}${randomNum}`;// 我了个嵌入表达式
}
function refreshBackGroundImage(imageString) {
    blurTitle.style.backgroundImage = `url("../image/backgrounds/${imageString}.jpg")`;
    console.log("背景图片设置为:", blurTitle.style.backgroundImage);
}
function hideElement(element, delay = 990) {
    setTimeout(() => {
        element.hidden = true;
    }, delay);
}
const randomBackGroundString = setBackGroundImage();
refreshBackGroundImage(randomBackGroundString);
hideElement(hiddenBox);

blurTitle.addEventListener("pointerdown", function () {
    welcome.style.animation = "disAppear 1s ease-out";

    setTimeout(() => {
        blurTitle.innerHTML = null; // null了解一下
    }, 990);
    setTimeout(() => {
        blurTitle.style.animation = "flat 1s ease-out";
        context.hidden = false;
        menu.style.animation = "appear 1s ease-out";
        menu.hidden = false;
        hideElement(blurTitle);
    }, 990);
});