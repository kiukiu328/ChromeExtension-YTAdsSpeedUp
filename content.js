const debug = true; // Set this to false to disable debug logs

function logDebug(message) {
    if (debug) {
        console.log(message);
    }
}

window.onload = () => {
    
    const observer = new MutationObserver((entries) => {
        for (let entry of entries) {

            if (entry.target.className == "video-ads ytp-ad-module") {
                logDebug("set video playback rate");
                if (entry.target.childElementCount > 0) {
                    document.getElementsByTagName("video")[0].playbackRate = 16;
                    logDebug("set to 16x");
                    logDebug(entry.target.getElementsByTagName("Button")[0]);
                }
            }
            if (entry.target.tagName == "YTD-PLAYER-LEGACY-DESKTOP-WATCH-ADS-RENDERER") {
                logDebug("remove ads YTD-PLAYER-LEGACY-DESKTOP-WATCH-ADS-RENDERER");
                entry.target.remove();
            }
            // if (entry.target.tagName == "ytd-ad-slot-renderer") {
            //     logDebug("remove ads ytd-ad-slot-renderer");
            //     entry.target.remove();
            // }
            if (entry.target.className == "ytp-skip-ad-button") {
                entry.target.click();
            }

        }
        var skipBtn = document.getElementsByClassName("ytp-skip-ad-button")[0];
        if (skipBtn) {
            skipBtn.click();
        }
        var ads = document.getElementsByTagName("ytd-ad-slot-renderer");
        for (let ad of ads) {
            logDebug("remove ads ytd-ad-slot-renderer");
            ad.remove();
        }
    });

    const doc = document.documentElement || document.body;
    observer.observe(doc, { childList: true, subtree: true });
}
