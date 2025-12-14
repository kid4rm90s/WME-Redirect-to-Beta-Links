// ==UserScript==
// @name         WME Redirect to Beta Links
// @namespace    https://fxzfun.com/userscripts
// @version      2025-12-14.02
// @description  Open all WME links in Beta WME
// @author       kid4rm90s
// @match        https://docs.google.com/spreadsheets/*
// @match        https://mail.google.com/*
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=waze.com
// @grant        none
// @license      MIT
// @downloadURL https://raw.githubusercontent.com/kid4rm90s/WME-Redirect-to-Beta-Links/main/WME-Redirect-to-Beta-Links.user.js
// @updateURL https://raw.githubusercontent.com/kid4rm90s/WME-Redirect-to-Beta-Links/main/WME-Redirect-to-Beta-Links.user.js
// ==/UserScript==

// Modified from WME Beta UR Links-2025-01-21.user.js by FXZFun
 
(function() {
    'use strict';
 
    function replaceLinks() {
        let wmeLinks = [...document.querySelectorAll('a')].filter(link => /.*\.waze\.com\/.*editor.*/i.test(link.href));
 
        wmeLinks.forEach(linkEl => {
            let url = new URL(linkEl.href);
            let params = new URLSearchParams(url.search);
 
            // Adjust zoom value
            params.delete('zoom');
            params.delete('zoomLevel');
            params.append('zoomLevel', 18);
 
            // Change to beta WME
            url.hostname = url.hostname.replace('www.', 'beta.');
            let newLink = url.origin + url.pathname + '?' + params.toString();
 
            // Replace with new link
            linkEl.href = newLink;
            linkEl.setAttribute('data-saferedirecturl', newLink);
        });
    }
 
    replaceLinks();
 
    if (location.href.includes('mail.google.com') || location.href.includes('docs.google.com/spreadsheets')) {
        setInterval(replaceLinks, 1000);
    }
 
})();