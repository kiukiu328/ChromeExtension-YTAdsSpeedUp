var interval = setInterval(start, 1000);
console.log("content.js loaded")
function start() {
    var ads = document.getElementsByTagName("ytd-player-legacy-desktop-watch-ads-renderer")[0]
    if (ads) {
        ads.remove()
    }
    ads = document.getElementsByClassName("ytd-ad-slot-renderer")[0]
    if (ads) {
        ads.remove()
    }

    if (document.getElementsByClassName("video-ads")[0].childElementCount> 0) {
        document.getElementsByTagName("video")[0].playbackRate = 16
        console.log("set to 16x")
    }
    else {
        document.getElementsByTagName("video")[0].playbackRate = 1

    }

}


chrome.runtime.onMessage.addListener((request, sender, sendResponse)=> {
    if (!interval)
        return

    if (!request.enabled)
        clearInterval(interval);
    else
        interval = setInterval(start, 1000);

})

