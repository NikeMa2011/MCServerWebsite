const blurTitle = document.getElementById("blurTitle");
const welcome = document.getElementById("welcome");
const hiddenBox = document.getElementById("hiddenBox");
const context = document.getElementById("context");

let date = new Date();
let clientHour = date.getHours();
console.log(date, clientHour);

let dayNight;
// 图片总数
const twilightBackgroundImageNum = 3;
const dayBackgroundImageNum = 9;
const nightBackgroundImageNum = 2;

let randomBackGroundNum, randomBackGroundString;

function dayNightCompare() {
    if (clientHour >= 5 && clientHour < 8) {
        dayNight = "早晨"; // Morning
    } else if (clientHour >= 8 && clientHour < 17) {
        dayNight = "白天"; // Daytime
    } else if (clientHour >= 17 && clientHour < 20) {
        dayNight = "黄昏"; // Twilight
    } else {
        dayNight = "夜晚"; // Nighttime
    }
    setBackGroundImage();
}

function setBackGroundImage() {
    if (dayNight === "早晨" || dayNight === "白天") {
        randomBackGroundNum = Math.floor((Math.random() * dayBackgroundImageNum) + 1);
        randomBackGroundString = "亮" + randomBackGroundNum;
        welcome.style.color = "#101010";
    } else if (dayNight === "黄昏") {
        randomBackGroundNum = Math.floor((Math.random() * twilightBackgroundImageNum) + 1);
        randomBackGroundString = "黄" + randomBackGroundNum;
        welcome.style.color = "#ffffff";
    } else {
        randomBackGroundNum = Math.floor((Math.random() * nightBackgroundImageNum) + 1);
        randomBackGroundString = "暗" + randomBackGroundNum;
        welcome.style.color = "#ffffff";
    }
}

function refreshBackGroundImage() {
    blurTitle.style.backgroundImage = `url("../image/backgrounds/${randomBackGroundString}.jpg")`;
    console.log(blurTitle.style.backgroundImage);
}

dayNightCompare();
refreshBackGroundImage();

setTimeout(() => { hiddenBox.hidden = true; }, 990);

blurTitle.addEventListener("pointerdown", function () {
    welcome.style.animation = "disAppear 1s ease-out";
    setTimeout(() => {
        welcome.hidden = true;
    }, 990);

    setTimeout(() => {
        blurTitle.hidden = true;
        blurTitle.style.animation = "flat 1s ease-out";
        context.hidden = false;
        menu.style.animation = "appear 1s ease-out";
        menu.hidden = false;
    }, 1000);
});
