const styleClass = document.body.classList;

// let date = new Date();
// let clientHour = date.getHours();

function nightModeCompare() {
     if (clientHour >= 8 && clientHour < 17) { // Daytime
        styleClass.add("nightMode");
    } else { // Nighttime
        styleClass.remove("nightMode");
    }
}
styleClass.add("nightMode");