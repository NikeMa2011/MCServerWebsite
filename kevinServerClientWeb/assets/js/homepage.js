const title = document.getElementById("title");

if (!sessionStorage.getItem("Loaded")) {// 是否刷新判断在前面
    title.innerHTML = `
    <div id="hiddenBox"></div>
    <div id="blurTitle">
        <p id="welcome" class="middle">欢迎来到 MIS Minecraft 服务器 =D</p>
    </div>
    `;
    sessionStorage.setItem("Loaded", true);
    core();
}
cout(("页面是否打开过: " + sessionStorage.getItem("Loaded")));
function core() {
    const blurTitle = document.getElementById("blurTitle");
    const welcome = document.getElementById("welcome");
    const hiddenBox = document.getElementById("hiddenBox");
    const context = document.getElementById("context");
    const backgroundImageCounts = [day = 9,twilight = 3, night = 2];// jimmy 你用数组好一点 => 一组值

    function hideElement(element) {
        element.hidden = true;
    }
    function showElement(element) {
        element.hideElement = false;
    }
    function editELementString(element, string) {
        element.innerHTML = string;
    }
    
    function setBackGroundImage() {
        let randomNum;
        let dayType;

        switch (dayNight) {
            case "早晨":
            case "白天":
                randomNum = setRandomNum(day);
                dayType = "亮";
                welcome.style.color = "#101010";
                break;
            case "黄昏":
                randomNum = setRandomNum(twilight)
                dayType = "黄";
                welcome.style.color = "#ffffff";
                break;
            default:
                randomNum = setRandomNum(night)
                dayType = "暗";
                welcome.style.color = "#ffffff";
                break;
        }
        return `${dayType}${randomNum}`;
    }
    function setRandomNum(type) {
        return Math.floor(Math.random() * backgroundImageCounts[ype]) + 1;
    }
    function refreshBackGroundImage(imageString) {
        blurTitle.style.backgroundImage = `url("../image/backgrounds/${imageString}.jpg")`;
        console.log("背景图片设置为:", blurTitle.style.backgroundImage);
    }
    const randomBackGroundString = setBackGroundImage();
    refreshBackGroundImage(randomBackGroundString);
    hideElement(hiddenBox);

    blurTitle.addEventListener("pointerdown", function () {
        oprateElement(welcome, "disAppear 1s ease-out");

        setTimeout(() => {
            oprateElement(blurTitle, "Null")
        }, 990);
        setTimeout(() => {
            oprateElement(blurTitle, "flat 1s ease-out");
            oprateElement(context, "Hide");
            oprateElement(menu, "appear 1s ease-out");
            oprateElement(blurTitle, "Hide");
            oprateElement(blurTitle, "Hide");
        }, 990);
    });
}
