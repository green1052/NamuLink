// ==UserScript==
// @version      1.0.0
// @author       green1052
// @name         NamuLink
// @namespace    NamuLink
// @match        https://namu.wiki/*
// @description  나무위키
// @run-at       document-start
// @no-frame     true
// @grant        unsafeWindow
// @homepageURL  https://github.com/green1052/NamuLink
// @supportURL   https://github.com/green1052/NamuLink/issues
// @downloadURL  https://raw.githubusercontent.com/green1052/NamuLink/master/NamuLink.user.js
// @updateURL    https://raw.githubusercontent.com/green1052/NamuLink/master/NamuLink.user.js
// ==/UserScript==

(async () => {
    "use strict";

    function hideAd() {
        setTimeout(() => {
            //div[style=""]:has(img[style="color: rgba(224, 242, 188, 0.235);"])
            document.querySelector(`img[style="color: rgba(224, 242, 188, 0.235);"]`)?.parentElement?.parentElement?.parentElement?.parentElement?.remove();
        }, 100);
    }

    unsafeWindow.history.pushState = new Proxy(unsafeWindow.history.pushState, {
        apply: (target, thisArg, argArray) => {
            hideAd();
            return target.apply(thisArg, argArray);
        }
    });

    hideAd();
})();