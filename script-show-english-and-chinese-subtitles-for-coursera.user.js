// ==UserScript==
// @name         script-show-english-and-chinese-subtitles-for-coursera
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @include      http://www.coursera.org/*
// @include      https://www.coursera.org/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        //alert("I'm running!");
        video = document.getElementById("c-video_html5_api");
        if(video){
        n = video.textTracks;
        for (var o = 0; o < n.length; o++) {
            var i = n[o];
            //console.log(i.language);
            if (i.language == "zh-CN" || i.language == "zh-TW" || i.language == "en-US" || i.language == "en") {i.mode = "showing";continue;} i.mode = "hidden";
        }}
    },7000);
})();
