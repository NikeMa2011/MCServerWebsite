const blurTitle = document.getElementById("blurTitle");
const welcome = document.getElementById("welcome");
const hiddenBox = document.getElementById("hiddenBox");
const context = document.getElementById("context");

var date = new Date();
var clientHour = date.getHours();
console.log(date, clientHour);

var dayNight;
//图片总数
var twiLightBackGorundImageNum = 3;
var dayBackGroundImageNum = 9;  
var nightBackGorundImageNum = 2;

var randomBackGroundNum, randomBackGroundString;

function dayNightCompare() {
    if (clientHour >= 5 && clientHour <= 7) {//判断早晨 早上5点至7点
        dayNight = "黄昏";
    } else if (clientHour > 7 && clientHour <= 16) {//判断白天 早上8点至下午4点
        dayNight = "早晨";
    } else if (clientHour > 16 && clientHour <= 19) {//判断晚霞 下午5点至下午7点
        dayNight = "黄昏";
    } else {//其余为夜晚
        dayNight = "夜晚";
    }
    setBackGroundImage();
}
function setBackGroundImage(){
    if (dayNight == "早晨") {
        randomBackGroundNum = Math.floor((Math.random() * dayBackGroundImageNum) + 1);
        randomBackGroundString = "亮" + randomBackGroundNum;
        welcome.style.color = "#101010";
    } else if(dayNight == "黄昏") {
        randomBackGroundNum = Math.floor((Math.random() * twiLightBackGorundImageNum) + 1);
        randomBackGroundString = "黄" + randomBackGroundNum;
        welcome.style.color = "#ffffff";
    } else {
        randomBackGroundNum = Math.floor((Math.random() * nightBackGorundImageNum) + 1);
        randomBackGroundString = "暗" + randomBackGroundNum;
        welcome.style.color = "#ffffff";
    }
}
function refreshBackGroundImage() {
    blurTitle.style.backgroundImage = "url(\"../image/backgrounds/" + randomBackGroundString + ".jpg\"";
    console.log(blurTitle.style.backgroundImage);
}
dayNightCompare();
refreshBackGroundImage();

setTimeout("hiddenBox.hidden = true", 990);

blurTitle.addEventListener("pointerdown", function () {
    setTimeout(() => {
        welcome.hidden = true;
        welcome.style = "display: none;";
    }, 990);
    welcome.style.animation = "disAppear 1s ease-out";
    setTimeout(() => {
        setTimeout(("blurTitle.hidden = true"), 990);
        blurTitle.style.animation = "flat 1s ease-out";
        context.hidden = false;
        menu.style = "animation: appear 1s ease-out";
        menu.hidden = false;
    }, 1000);
});