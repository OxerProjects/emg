// Media
const mainScreen  = document.querySelector('#mainScreen')
const alerts = document.querySelector('#alerts')
const switchButton = document.querySelector('#switchScreens')
// Links
const news12 = "https://www.mako.co.il/AjaxPage?jspName=embedHTML5video.jsp&galleryChannelId=3bf5c3a8e967f510VgnVCM2000002a0c10acRCRD&videoChannelId=8bf955222beab610VgnVCM100000700a10acRCRD&vcmid=1e2258089b67f510VgnVCM2000002a0c10acRCRD";
const alertsMap = "https://www.tzevaadom.co.il/"
let screen = 0
switchButton.addEventListener("click", () => {
    if (screen == 0) {
        mainScreen.src = alertsMap
        alerts.src = news12
        screen = 1
    } else {
        mainScreen.src = news12
        alerts.src = alertsMap
        screen = 0
    }
})