// var interval = setInterval(start, 1000);
// console.log("content.js loaded")
// function start() {
//     var ads = document.getElementsByTagName("ytd-player-legacy-desktop-watch-ads-renderer")[0]
//     if (ads) {
//         ads.remove()
//     }
//     ads = document.getElementsByClassName("ytd-ad-slot-renderer")[0]
//     if (ads) {
//         ads.remove()
//     }

//     if (document.getElementsByClassName("video-ads")[0].childElementCount> 0) {
//         document.getElementsByTagName("video")[0].playbackRate = 16
//         console.log("set to 16x")
//     }
//     else {
//         document.getElementsByTagName("video")[0].playbackRate = 1

//     }

// }


// chrome.runtime.onMessage.addListener((request, sender, sendResponse)=> {
//     if (!interval)
//         return

//     if (!request.enabled)
//         clearInterval(interval);
//     else
//         interval = setInterval(start, 1000);

// })
var flag = false;
// console.log("content.js loaded");
window.onload = () => {
    const doc = document.documentElement || document.body;
    // console.log(doc);
    const observer = new MutationObserver((entries) => {
        for (let entry of entries) {
            // console.log(entry);
            // console.log(entry.target);
            // console.log(entry.target.className);
            // console.log(entry.target.className == "video-ads ytp-ad-module");
            if (entry.target.className == "video-ads ytp-ad-module") {
                console.log("set video playback rate");
                // if (entry.target.getElementsByClassName("video-ads")[0] !== undefined || (entry.target.getElementsByClassName("video-ads")[0].childElementCount > 0)) {
                //     document.getElementsByTagName("video")[0].playbackRate = 16;
                //     console.log("set to 16x");
                //     flag = true;
                // } else if (flag) {
                //     document.getElementsByTagName("video")[0].playbackRate = 1;
                //     flag = false;
                // }
                if (entry.target.childElementCount > 0) {
                    document.getElementsByTagName("video")[0].playbackRate = 16;
                    console.log("set to 16x");
                    flag = true;
                } else if (flag) {
                    document.getElementsByTagName("video")[0].playbackRate = 1;
                    flag = false;
                }

            }
            if (entry.target.tagName == "YTD-PLAYER-LEGACY-DESKTOP-WATCH-ADS-RENDERER") {
                console.log("remove ads YTD-PLAYER-LEGACY-DESKTOP-WATCH-ADS-RENDERER");
                entry.target.remove();
            }
            if (entry.target.className == "ytd-ad-slot-renderer") {
                console.log("remove ads ytd-ad-slot-renderer");
                entry.target.remove();
            }

        }

    });
    observer.observe(doc, { childList: true, subtree: true });
}
