const blurTitle = document.getElementById("blurTitle");
const welcome = document.getElementById("welcome");
const hiddenBox = document.getElementById("hiddenBox");
const context = document.getElementById("context");

// 图片总数
const twilightBackgroundImageNum = 3;
const dayBackgroundImageNum = 9;
const nightBackgroundImageNum = 2;

let randomBackGroundNum, randomBackGroundString;

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

setBackGroundImage();
refreshBackGroundImage();

setTimeout(() => { hiddenBox.hidden = true; }, 990);

blurTitle.addEventListener("pointerdown", function () {
    welcome.style.animation = "disAppear 1s ease-out";
    setTimeout(() => {
        blurTitle.innerHTML = null;
    }, 990);
    setTimeout(() => {;
        blurTitle.style.animation = "flat 1s ease-out";
        context.hidden = false;
        menu.style.animation = "appear 1s ease-out";
        menu.hidden = false;
        setTimeout(() => {
            blurTitle.hidden = true;
        }, 990);
    }, 990);// jimmy求求你看看管理图的内容 请不要乱改好不好qwq
});
