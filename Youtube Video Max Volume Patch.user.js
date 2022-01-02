// ==UserScript==
// @name         Youtube Video Max Volume Patch
// @namespace    http://github.com/jaytohe/
// @version      0.1
// @description  Override the html5 video volume to 1 when player's volume slider is set to 100%.
// @author       jaytohe
// @license      MIT
// @match        https://www.youtube.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const curr_volume = () => document.querySelector('div[class^="ytp-volume-panel"]').getAttribute('aria-valuenow');

    const forceMaxVol = (event) => {
        if (curr_volume() === '100') {
            event.target.volume = 1;
        }

    }
    const initHijack = () => {
        const video = document.querySelector('video');
        if (video != null && curr_volume() != null) {
            console.log('Patching max volume...');
            if (video.onplay == null)
                video.onplay = forceMaxVol;

            if(video.onvolumechange == null)
                video.onvolumechange = forceMaxVol;
        }
    }

    initHijack();
})();