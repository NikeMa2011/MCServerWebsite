let date = new Date();
let clientHour = date.getHours();
console.log("本地时间为: " + date);
console.log("本地时间-小时为: " + clientHour);

let dayNight;

function dayNightCompare() {
    if (clientHour >= 5 && clientHour < 8) {
        dayNight = "早晨"; // Morning
    } else if (clientHour >= 8 && clientHour < 17) {
        dayNight = "白天"; // Daytime
    } else if (clientHour >= 17 && clientHour < 19) {
        dayNight = "黄昏"; // Twilight
    } else {
        dayNight = "夜晚"; // Nighttime
    }
}
dayNightCompare();
console.log("时间为: " + dayNight);